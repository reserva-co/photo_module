import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  position: absolute;
  box-sizing: border-box;
  padding: 40px;
  width: 100%;
  height: 100%;
  min-height: 300px;
  background: #f9f9f9;
`;

const Display = styled.div`
  display: flex;
  flex: 1;
  box-sizing: border-box;
  width: auto;
`;

const DisplayPanel = styled.div`
  display: flex;
  align-items: center;
  box-sizing: border-box;
  height: auto;
`;

const Arrows = styled(DisplayPanel)`
  padding: 20px;
  font-family: 'century gothic', helvetica, arial, 'sans-serif';
  font-size: 30px;
    
  &:hover {
    cursor: pointer; 
  }
`;

const Gallery = styled.div`
  display: flex;
  flex: initial;
  flex-direction: column;
  box-sizing: border-box;
  width: 250px;
  letter-spacing: 1px;
  color: #333;
  font-size: 15px;
  font-family: 'Century Gothic', helvetica, arial, 'sans serif';
`;

const MainImage = styled.img`
  align-self: center;
  border-radius: 15px;
  width: 100%;
  height: auto;
`;

const GalleryImgDiv = styled.div`
  display: block;
  width: 250px;
  height: 64px;
  overflow: hidden;
  margin-bottom: 20px;
  white-space: nowrap;
`;

const GalleryImg = styled.img`
  height: 50px;
  width: 50px;
  display: inline-block;
  border-radius: 5px;
  margin-right: 5px;
  border: 2px solid;
  border-color: #f9f9f9;
  position: relative;
  left: ${(props) => `${props.current * -59}px`};

  &:hover {
    cursor: pointer;
  }
`;

const BigX = styled.div`
  font-size: 30px;
  text-align: right;

  &:hover {
    cursor: pointer;
  }
`;

class SlideShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current: this.props.photos[this.props.currentId],
    };
    this.nextImage = this.nextImage.bind(this);
    this.prevImage = this.prevImage.bind(this);
    this.viewGalleryImage = this.viewGalleryImage.bind(this);
  }

  nextImage() {
    const { photos } = this.props;
    let next = this.state.current.slide_id + 1;
    if (next <= photos.length - 1) {
      this.setState({ current: photos[next] });
    } else {
      this.setState({ current: photos[0] });
    }
  }

  prevImage() {
    const { photos } = this.props;
    const prev = this.state.current.slide_id - 1;
    if (prev >= 0) {
      this.setState({ current: photos[prev] });
    } else {
      this.setState({ current: photos[photos.length - 1] });
    }
  }

  viewGalleryImage(newPicId) {
    console.log(newPicId);
    this.setState({ current: this.props.photos[newPicId] });
  }

  render() {
    const { photos, closeSlideShow } = this.props;
    const { current } = this.state;
    return (
      <Container>
        <Display>
          <Arrows onClick={this.prevImage}>〈</Arrows>
          <DisplayPanel>
            <MainImage src={current.url} />
          </DisplayPanel>
          <Arrows onClick={this.nextImage}>〉</Arrows>
        </Display>
        <Gallery>
          <BigX onClick={closeSlideShow}>✕</BigX>
          <br />
          <GalleryImgDiv>
            {photos.map((photo) => (<GalleryImg src={photo.url} key={photo.slide_id} current={current.slide_id} onClick={() => this.viewGalleryImage(photo.slide_id)} />))}
          </GalleryImgDiv>
          <br />
          <span style={{ fontWeight: 'bold' }}>
            {`${current.slide_id + 1} / ${photos.length}`}
          </span>
          <br />
          <span>
            {current.desc}
          </span>
          <br />
          <span style={{ fontSize: '13px' }}>
            {current.verified ? 'Photo Verified By Birbnb' : ''}
          </span>

        </Gallery>
      </Container>
    )
  }
}
SlideShow.propType = {
  photos: PropTypes.arrayOf(
    PropTypes.shape({
      slide_id: PropTypes.number.isRequired,
      url: PropTypes.string.isRequired,
      desc: PropTypes.string.isRequired,
    }),
  ),
}.isRequired;

export default SlideShow;
