import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
// import PhotosGrid from './PhotosGrid.jsx';

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
        console.log('Photos', info.data[0]);
      })
      .catch((err) => { console.log(err); });
  }

  render() {
    // hero photo
    // small photos
    // if 3 photos or less, hero photo is 2/3 of page width
    const { photos } = this.state;
    if (photos.length > 0) {
      return (
        <div>
          <div>
            <img src={photos[0].url} alt="Main display" />
          </div>
          {/* <PhotosGrid photos={this.state.photos} /> */}
        </div>
      );
    }
    return <h3>Loading photos</h3>;
  }
}

Photos.propTypes = {
  listingId: PropTypes.number.isRequired,
};

export default Photos;
