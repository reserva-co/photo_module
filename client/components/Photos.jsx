/* eslint-disable jsx-a11y/mouse-events-have-key-events */
import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import PhotosGrid from './PhotosGrid.jsx';
import SlideShow from './SlideShow.jsx';
import ShareModal from './Share.jsx';
import SaveModal from './Save.jsx';
import Navbar from './Navbar.jsx';

const PhotosModuleDiv = styled.div`
  display: block;
  box-sizing: border-box;
  width: 100%;
  min-width: 900px;
  height: 422px;
  padding: none;
  margin: none;
  overflow: hidden;

  &:hover {
    cursor: pointer;
  }
`;

const HeroImageDiv = styled.div`
  float: left;
  box-sizing: border-box;
  width: 50%;
  background: #000;
  height: 350px;
  border: 1px solid #444;
  overflow: hidden;
  position: relative;
`;

const HeroImageDivFull = styled(HeroImageDiv)`
  width: 100%;
`;

const MainImage = styled.img`
  width: 100%;
  opacity: 1.0;
  min-width: 425px;
  min-height: 350px;
  height: auto;
  margin: none;
  transition: opacity 1s, width 1s;

  &:hover {
    width: 105%;
    width 1s;
  }
`;

const FloatButton = styled.div`
  display: block;
  height: 33px;
  text-align: center;
  box-sizing: border-box;
  background: #fff;
  position: absolute;
  right: 25px;
  top: 95px;
  padding: 10px 15px;
  border-radius: 4px;
  z-index: 9;
  font-family: helvetica, arial, 'sans serif';
  font-size: 14px;
  line-height: 17px;
  color: #333;
  box-shadow: 2px 3px 2px rgba(0, 0, 0, 0.2);

  &:hover {
    cursor: pointer;
  }
`;

const SharePhotosButton = styled(FloatButton)`
  right: 123px;
`;

const SaveButton = styled(FloatButton)`
  right: 25px;
`;

const ViewPhotosButton = styled(FloatButton)`
  top: 360px;
`;

class Photos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: [],
      slideshow: false,
      currentId: null,
      share: false,
      save: false,
      favorite: false,
      hover: [],
    };
    this.openSlideShow = this.openSlideShow.bind(this);
    this.closeSlideShow = this.closeSlideShow.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
    this.toggleFavorite = this.toggleFavorite.bind(this);
    this.hoverEffect = this.hoverEffect.bind(this);
  }

  componentDidMount() {
    const listingId = this.props.listingId || 3;
    axios.get(`http://localhost:3004/api/${listingId} `)
      .then((info) => {
        this.setState({ photos: info.data[0].images });
        console.log('Photos', info.data[0].images.length);
        let hoverTemp = document.getElementsByClassName('hoverPhoto');
        this.setState({ hover: hoverTemp });
      })
      .catch((err) => { console.log(err); });
  }

  hoverEffect(imgNum, effect) {
    let opacitySet = effect ? "1" : "0.6";
    for (let i = 0; i < this.state.hover.length; i++) {
      if (i !== imgNum) {
        this.state.hover[i].style.opacity = opacitySet;
        console.log(i);
      }
    }
  }

  openSlideShow(inputNum = 0) {
    this.setState({ slideshow: true, currentId: inputNum });
    document.documentElement.style.overflow = 'hidden';
  }

  closeSlideShow() {
    this.setState({ slideshow: false });
    document.documentElement.style.overflow = 'auto';
  }

  toggleModal(modal) {
    this.setState({ [modal]: !this.state[modal] });
  }

  toggleFavorite() {
    this.setState({ favorite: !this.state.favorite });
    console.log('Click favorite!');
  }

  render() {
    // hero photo
    // small photos
    // if 3 photos or less, hero photo is 2/3 of page width
    // page dynamically renders if width falls below certain amount
    const { photos, slideshow, currentId, share, save, favorite } = this.state;
    const buttons = [
      <SharePhotosButton key="share" onClick={() => this.toggleModal('share')}>⇪ Share</SharePhotosButton>,
      <SaveButton key="save" onClick={() => this.toggleModal('save')}>
        {favorite ? <span style={{"color": "red", "fontSize": "14px", "fontFamily": "helvetica"}}>♥ </span> : '♡ '}
        Save
      </SaveButton>,
      <ViewPhotosButton key="view" onClick={() => this.openSlideShow(0)}>View Photos</ViewPhotosButton>,
    ];
    if (slideshow) {
      return (
        <SlideShow
          photos={photos}
          closeSlideShow={this.closeSlideShow}
          currentId={currentId}
        />
      );
    }
    if (photos.length > 0) {
      if (photos.length === 1) {
        return (
          <PhotosModuleDiv>
            { share && <ShareModal toggleModal={this.toggleModal} />}
            { save && <SaveModal src={photos[0].url} toggleModal={this.toggleModal} toggleFavorite={this.toggleFavorite} favorite={favorite} />}
            <Navbar />
            {buttons}
            <HeroImageDivFull onClick={() => this.openSlideShow()}>
              <MainImage src={photos[0].url}
                alt="Main display"
                className='hoverPhoto'
                onMouseOver={() => this.hoverEffect(0, false)}
                onMouseOut={() => this.hoverEffect(0, true)}
              />
            </HeroImageDivFull>
          </PhotosModuleDiv>
        );
      }
      return (
        <PhotosModuleDiv>
          { share && <ShareModal toggleModal={this.toggleModal} />}
          { save && <SaveModal src={photos[0].url} toggleModal={this.toggleModal} toggleFavorite={this.toggleFavorite} favorite={favorite} />}
          <Navbar />
          {buttons}
          <HeroImageDiv onClick={() => this.openSlideShow()}>
            <MainImage
              src={photos[0].url}
              alt="Main display"
              className="hoverPhoto"
              onMouseOver={() => this.hoverEffect(0, false)}
              onMouseOut={() => this.hoverEffect(0, true)}
            />
          </HeroImageDiv>
          <PhotosGrid photos={photos} openSlideShow={this.openSlideShow} hoverEffect={this.hoverEffect} />
        </PhotosModuleDiv>
      );
    }
    return <h3>Loading photos</h3>;
  }
}

Photos.propTypes = {
  listingId: PropTypes.number.isRequired,
};

export default Photos;
