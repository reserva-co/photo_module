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
    const { photos } = this.props;
    console.log('Number of images:', photos.length);
    if (photos.length > 5) {
      return (
        <GridDiv>
          <PhotosGridEntry key={photos[1].slide_id} photo={photos[1]} />
          <PhotosGridEntry key={photos[2].slide_id} photo={photos[2]} />
          <PhotosGridEntry key={photos[3].slide_id} photo={photos[3]} />
          <PhotosGridEntry key={photos[4].slide_id} photo={photos[4]} />
        </GridDiv>
      );
    } 
    const photosShift = photos.slice(1);
    return (
      <GridDiv>
        {photosShift.map((photo) => {
          return <PhotosGridEntry key={photo.slide_id} photo={photo} />
        })}
      </GridDiv>
    )
  }
}

PhotosGrid.propType = {
  photos: PropTypes.array.isRequired,
};

export default PhotosGrid;
