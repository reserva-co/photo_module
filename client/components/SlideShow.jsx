import React from 'react';
import styled from 'styled-components';

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
  height: 50px;
  overflow: hidden;
  margin-bottom: 20px;
`;

const GalleryImg = styled.img`
  height: 50px;
  width: 50px;
  border-radius: 5px;
  margin-right: 5px;
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
      current: this.props.photos[0]
    };
  }

  render() {
    const { photos, closeSlideShow } = this.props;
    const { current } = this.state;
    return (
      <Container>
        <Display>
          <Arrows>{'〈'}</Arrows>
          <DisplayPanel>
            <MainImage src={current.url} />
          </DisplayPanel>
          <Arrows>{'〉'}</Arrows>
        </Display>
        <Gallery>
          <BigX onClick={closeSlideShow}>✕</BigX>
          <br />
          <GalleryImgDiv>
            {photos.map((photo) => (<GalleryImg src={photo.url} key={photo.slide_id} />))}
          </GalleryImgDiv>
          <br />
          <span style={{fontWeight: 'bold' }}>
            {`${current.slide_id + 1} / ${photos.length}`}
          </span>
          <br />
          <span>
            {current.desc}
          </span>
          <br />
          <span style={{fontSize: '13px' }}>
            {current.verified ? 'Photo Verified By Birbnb' : ''}
          </span>

        </Gallery>
      </Container>
    )
  }
}

export default SlideShow;
