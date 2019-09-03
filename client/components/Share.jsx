import React from 'react';
import styled from 'styled-components';

const GrayContainer = styled.div`
  position: absolute;
  background: rgb(0, 0, 0, 0.75);
  display: block;
  width: 100%;
  height: 100%;
  text-align: center;
  vertical-align: center;
  font-family: 'Century Gothic', helvetica, arial;
  letter-spacing: 1px;
  z-index: 10;
  padding-top: 7%;
`;

const ShareBox = styled.div`
  text-align: left;
  opacity: 1;
  background: #fff;
  display: block;
  box-sizing: border-box;
  width: 350px;
  margin: auto;
  padding: 15px 40px 40px 0;
`;

const BigX = styled.span`
  font-size: 23px;
  padding-left: 40px;
  display: inline-block;
  margin-top: 15px;
  color: #666;
`;

const List = styled.li`
  display: block;
  padding: 25px;
  padding-left: 0px;
  color: #007777;
  border-bottom: 1px solid #ddd;
  text-align: left;

  &:hover {
    text-decoration: underline;
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