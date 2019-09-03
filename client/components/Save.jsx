import React from 'react';
import styled from 'styled-components';

const WhiteContainer = styled.div`
  display: block;
  position: fixed;
  width: 100%;
  height: 100%;
  background: rgb(255, 255, 255, 0.5);
  text-align: center;
  font-family: 'Century Gotchic', Helvetica, Arial;
  letter-spacing: 1px;
  z-index: 10;
  color: #333;
    
  &:hover {
    cursor: default;
  };
`;

const ShareBoxWrapper = styled.div`
  width: 600px;
  height: auto;
  background: #fff;
  margin: auto;
  margin-top: 7%;
  text-align: left;
  box-shadow: 0 0 20px rgba(10, 10, 10, 0.4);
`;

const ShareBox = styled.div`
  display: block;
  padding: 40px;
  height: 60%;
  min-height: 300px;
`;

const BigX = styled.span`
  font-size: 23px;
  display: inline-block;
  color: #666;
  font-weight: 100;
    
  &:hover {
    cursor: pointer;
  };
`;

const ListingBox = styled.div`
  padding: 20px;
  box-shadow: 0 -5px 10px rgba(100, 100, 100, 0.3);
  min-height: 100px;
  font-size: 15px;
  line-height: 30px;
`;

const Favorite = styled.span`
  float: right;
`;

function SaveModal(props) {

  return (
    <WhiteContainer>
      <ShareBoxWrapper>
        <ShareBox>
          <BigX onClick={() => props.toggleModal('save')}>✕</BigX>
          <h3>Save to List</h3><br />
          Create New List<br />
          <hr/>
          San Francisco <Favorite>♡</Favorite>
        </ShareBox>
        <ListingBox>
          <img src={props.src} height="100px" width="125px" style={{ "float": "left", "marginRight": "10px"}}/>
          Unique Cozy Rustic Birdhouse<br />
          Mayne Island, BC, Canada <br />
          ★★★★★ 47 reviews
        </ListingBox>
      </ShareBoxWrapper>
    </WhiteContainer>
  );
}

export default SaveModal;
