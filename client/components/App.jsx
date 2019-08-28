import React from 'react';
import Photos from './Photos.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listingId: null,
    };
  }

  componentDidMount() {
    const genNum = Math.floor(Math.random() * 100);
    this.setState({ listingId: genNum });
    console.log('End of App mount', genNum);
  }

  render() {
    const { listingId } = this.state;
    if (listingId) {
      return (
        <div>
          <Photos listingId={listingId} />
          <br />
          <h3>App loaded</h3>
        </div>
      );
    }
    return <h2>Loading</h2>;
  }
}

export default App;
