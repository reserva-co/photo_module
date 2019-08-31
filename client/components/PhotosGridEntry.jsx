import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const PhotosGridDiv = styled.div`
  float: left;
  box-sizing: border-box;
  width: ${props => (props.wideGrid ? '100%' : '50%')};
  height: ${props => (props.fullGrid ? '100%' : '175px')};
  border: 1px solid #444;
  margin: none;
  padding: none;
  overflow: hidden;
`;

const PhotosGridImg = styled.img`
  width: 100%;
  min-width: 225px;
  min-height: 175px;
  height: auto;
  margin: none;
`;

class PhotosGridEntry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    const { photo, openSlideShow, wideGrid, fullGrid } = this.props;
    return (
      <PhotosGridDiv photo={photo} wideGrid={wideGrid} fullGrid={fullGrid} >
        <PhotosGridImg src={photo.url} alt={photo.desc} onClick={openSlideShow}/>
      </PhotosGridDiv>
    )
  }
}

PhotosGridEntry.propTypes = {
};


export default PhotosGridEntry;
