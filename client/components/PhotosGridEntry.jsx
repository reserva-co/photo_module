import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const PhotosGridDiv = styled.div`
  float: left;
  box-sizing: border-box;
  width: 50%;
  height: 150px;
  border: 1px solid #444;
  margin: none;
  padding: none;
  overflow: hidden;
`;

const PhotosGridImg = styled.img`
  width: 100%;
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
    const { photo } = this.props;
    return (
      <PhotosGridDiv>
        <PhotosGridImg src={photo.url} alt={photo.desc} />
      </PhotosGridDiv>
    )
  }
}

PhotosGridEntry.propTypes = {
};


export default PhotosGridEntry;
