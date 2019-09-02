import React from 'react';
import styled from 'styled-components';
import Photos from './Photos.jsx';

const H3Message = styled.h3`
  font-family: helvetica, arial, "sans serif";
  letter-spacing: 2px;
  margin-left: 40px;
  color: #aaa;
`;

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
  }

  render() {
    const { listingId } = this.state;
    if (listingId) {
      return (
        <div>
          <Photos listingId={listingId} />
          <br />
          <H3Message>cozy getaway birdhouse</H3Message>
        </div>
      );
    }
    return <h2>Loading</h2>;
  }
}

export default App;
