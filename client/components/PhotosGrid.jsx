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
          <PhotosGridEntry photo={photos[1]} />
          <PhotosGridEntry photo={photos[2]} />
          <PhotosGridEntry photo={photos[3]} />
          <PhotosGridEntry photo={photos[4]} />
        </GridDiv>
      );
    } 
    const photosShift = photos.slice(1);
    return (
      <GridDiv>
        {photosShift.map(photo => {
          return <PhotosGridEntry photo={photo} />
        })}
      </GridDiv>
    )
  }
}

PhotosGrid.propType = {
  photos: PropTypes.array.isRequired,
};

export default PhotosGrid;
