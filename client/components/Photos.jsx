import React from 'react';
import PhotosGrid from './PhotosGrid';

class Photos extends React.Components {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    // API call to localhost:3000/api/:reserva_id
  }

  render() {
    // hero photo
    // small photos
    // if 3 photos or less, hero photo is 2/3 of page width
    return (
      <div>
        <img src={this.state.photos[0].url} alt="Main display" />
        <PhotosGrid />
      </div>
    );
  }
}

export default Photos;
