import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import PhotosGrid from './PhotosGrid.jsx';

const PhotosModuleDiv = styled.div`
  display: block;
  box-sizing: border-box;
  width: 100%;
  height: 300px;
  padding: none;
  margin: none;
  overflow: hidden;
`;

const HeroImageDiv = styled.div`
  float: left;
  box-sizing: border-box;
  width: 50%;
  height: 300px;
  border: 1px solid #444;
  overflow: hidden;
  position: relative;
`;

const MainImage = styled.img`
  width: 100%;
  min-width: 400px;
  min-height: 300px;
  height: auto;
  margin: none;
`;

class Photos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: [],
    };
  }

  componentDidMount() {
    const { listingId } = this.props;
    console.log('ID Photos mount:', listingId);
    axios.get(`/api/${listingId}`)
      .then((info) => {
        this.setState({ photos: info.data[0].images });
        // console.log('Photos', info.data[0]);
      })
      .catch((err) => { console.log(err); });
  }

  render() {
    // hero photo
    // small photos
    // if 3 photos or less, hero photo is 2/3 of page width
    // page dynamically renders if width falls below certain amount
    const { photos } = this.state;
    if (photos.length > 0) {
      return (
        <PhotosModuleDiv>
          <HeroImageDiv>
            <MainImage src={photos[0].url} alt="Main display" />
          </HeroImageDiv>
          <PhotosGrid photos={photos} />
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
