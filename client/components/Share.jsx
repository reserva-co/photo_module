import React from 'react';
// import styled from 'styled-components';

const GrayContainer = styled.div`
  position: fixed;
  background: rgb(0, 0, 0, 0.75);
  display: block;
  width: 100%;
  height: 100%;
  overflow-y: auto;
  text-align: center;
  vertical-align: center;
  font-family: 'Century Gothic', helvetica, arial;
  letter-spacing: 1px;
  z-index: 10;
  padding-top: 7%;
    
  &:hover {
    cursor: default;
  }
`;

const ShareBox = styled.div`
  text-align: left;
  opacity: 1;
  background: #fff;
  display: block;
  box-sizing: border-box;
  width: 400px;
  margin: auto;
  margin-bottom: 50px;
  padding: 15px 40px 40px 0;
`;

const BigX = styled.span`
  font-size: 23px;
  padding-left: 40px;
  display: inline-block;
  margin-top: 15px;
  color: #666;

  &:hover {
    cursor: pointer;
  }
`;

const List = styled.li`
  display: block;
  padding: 25px;
  padding-left: 0px;
  color: #007777;
  border-bottom: 1px solid #eee;
  text-align: left;

  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;

const ListTitle = styled(List)`
  color: #222;
  font-size: 23px;
  font-weight: 900;
  padding-top: 0px;

  &:hover {
    text-decoration: none;
  }
`;

function ShareModal(props) {
  return (
    <GrayContainer>
      <ShareBox>
        <BigX onClick={() => props.toggleModal('share')}>✕</BigX>
        <ul>
          <ListTitle>Share</ListTitle>
          <List>Facebook</List>
          <List>Twitter</List>
          <List>Messenger</List>
          <List>Email</List>
          <List>Copy Link</List>
          <List>WhatsApp</List>
          <List>SMS</List>
          <List>Embed</List>
        </ul>
      </ShareBox>
    </GrayContainer>
  );
}

export default ShareModal;