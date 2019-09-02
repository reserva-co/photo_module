import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import PhotosGridEntry from './PhotosGridEntry.jsx';

const GridDiv = styled.div`
  display: inline-block;
  box-sizing: border-box;
  width: 50%;
  height: 100%;
  padding: none; 
  margin: none;
`;

class PhotosGrid extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    // photo grid
    const { photos, openSlideShow } = this.props;
    let maxDisplay;
    let wideGrid = false;
    let fullGrid = false;
    if (photos.length >= 5) {
      maxDisplay = 5;
    } else if (photos.length === 4 || photos.length === 3) {
      maxDisplay = 3;
      wideGrid = true;
    } else {
      maxDisplay = photos.length;
      wideGrid = true;
      fullGrid = true;
    }
    const imageArray = [];
    for (let i = 1; i < maxDisplay; i+= 1) {
      imageArray.push(<PhotosGridEntry key={photos[i].slide_id} photo={photos[i]} wideGrid={wideGrid} fullGrid={fullGrid} openSlideShow={openSlideShow}/>)
    }
    return (
      <GridDiv>
        {imageArray}
      </GridDiv>
    );
  }
}

PhotosGrid.propType = {
  photos: PropTypes.array.isRequired,
};

export default PhotosGrid;
