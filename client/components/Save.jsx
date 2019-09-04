import React from 'react';

const WhiteContainer = styled.div`
  display: block;
  position: fixed;
  width: 100%;
  height: 100%;
  background: rgb(255, 255, 255, 0.6);
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
  width: 575px;
  height: auto;
  background: #fff;
  margin: auto;
  margin-top: 7%;
  text-align: left;
  box-shadow: 0 0 20px rgba(10, 10, 10, 0.3);
`;

const ShareBox = styled.div`
  display: block;
  padding: 40px;
  height: 80%;
  min-height: 350px;
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
  min-height: 80px;
  font-size: 13px;
  line-height: 25px;
`;

const Favorite = styled.span`
  float: right;
  font-size: 20px;

  &:hover {
    cursor: pointer;
  }
`;

const List = styled.li`
  border-bottom: 1px solid #eee;
  display: block;
  padding: 25px 0;
`;

const ListTitle = styled(List)`
  color: #007777;

  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;

function SaveModal(props) {
  // const { toggleFavorite, favorite } = props;
  return (
    <WhiteContainer>
      <ShareBoxWrapper>
        <ShareBox>
          <BigX onClick={() => props.toggleModal('save')}>✕</BigX>
          <h2>Save to List</h2>
          <ul style={{ "paddingLeft": "0"}}>
            <ListTitle>Create New List</ListTitle>
            <List>
              San Francisco
              <Favorite onClick={() => props.toggleFavorite()}>
                {props.favorite ? <span style={{"color": "red", "fontFamily": "helvetica"}}>♥</span> : '♡ '}
              </Favorite>
            </List>
          </ul>          
        </ShareBox>
        <ListingBox>
          <img src={props.src} height="78px" width="105px" style={{ "float": "left", "marginRight": "20px"}}/>
          <span style={{"fontSize": "15px", "fontWeight": "900"}}>Unique Cozy Rustic Birdhouse</span><br />
          Mayne Island, BC, Canada <br />
          <span style={{"color": "#007777"}}>★★★★★</span> 47 reviews
        </ListingBox>
      </ShareBoxWrapper>
    </WhiteContainer>
  );
}

export default SaveModal;
