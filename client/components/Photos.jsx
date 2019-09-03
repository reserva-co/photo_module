import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import PhotosGrid from './PhotosGrid.jsx';
import SlideShow from './SlideShow.jsx';
import ShareModal from './Share.jsx';

const PhotosModuleDiv = styled.div`
  display: block;
  box-sizing: border-box;
  width: 100%;
  height: 350px;
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
  min-width: 425px;
  min-height: 350px;
  height: auto;
  margin: none;
`;

const FloatButton = styled.div`
  display: block;
  height: 33px;
  text-align: center;
  box-sizing: border-box;
  background: #fff;
  position: absolute;
  right: 25px;
  top: 20px;
  padding: 10px 15px;
  border-radius: 4px;
  z-index: 100;
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
  top: 290px;
`;

class Photos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: [],
      slideshow: false,
      currentId: null,
      share: false,
    };
    this.openSlideShow = this.openSlideShow.bind(this);
    this.closeSlideShow = this.closeSlideShow.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
  }

  componentDidMount() {
    const { listingId } = this.props;
    console.log('ID Photos mount:', listingId);
    axios.get(`/api/${listingId}`)
    // axios.get(`/api/88`)
      .then((info) => {
        this.setState({ photos: info.data[0].images });
        console.log('Photos', info.data[0].images.length);
      })
      .catch((err) => { console.log(err); });
  }

  openSlideShow(inputNum = 0) {
    this.setState({ slideshow: true, currentId: inputNum });
  }

  closeSlideShow() {
    this.setState({ slideshow: false });
  }

  toggleModal(modal) {
    this.setState({ [modal]: !this.state[modal] });
  }

  render() {
    // hero photo
    // small photos
    // if 3 photos or less, hero photo is 2/3 of page width
    // page dynamically renders if width falls below certain amount
    const { photos, slideshow, currentId, share } = this.state;
    const buttons = [
      <SharePhotosButton key="share" onClick={() => this.toggleModal('share')}>⇪ Share</SharePhotosButton>,
      <SaveButton key="save">♡ Save</SaveButton>,
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
            {buttons}
            <HeroImageDivFull onClick={() => this.openSlideShow()}>
              <MainImage src={photos[0].url} alt="Main display" />
            </HeroImageDivFull>
          </PhotosModuleDiv>
        );
      }
      return (
        <PhotosModuleDiv>
          { share ? <ShareModal toggleModal={this.toggleModal} /> : ''}
          {buttons}
          <HeroImageDiv onClick={() => this.openSlideShow()}>
            <MainImage src={photos[0].url} alt="Main display" />
          </HeroImageDiv>
          <PhotosGrid photos={photos} openSlideShow={this.openSlideShow} />
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
