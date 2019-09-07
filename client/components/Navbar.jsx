import React from 'react';

const NavbarDiv = styled.div`
  height: 70px;
  width: 100%;
  min-width: 950px;
  display: inline-flex;
  align-items: center;
  justify-content: space-between;

  &:hover {
    cursor: default;
  }
`;

const RightLinkBox = styled.div`
  margin-right: 20px;

  &:hover {
    cursor: pointer;
  }
`;

const RightLinks = styled.span`
  display: inline-block;
  margin-left: 20px;
  font-family: Helvetica, arial;
  letter-spacing: 1px;
  color: #333;
  font-size: 14px;
  padding: 25px 3px;
  border-bottom: 2px solid #fff;

  &:hover {
    border-bottom: 2px solid #333;
  }
`;

const Logo = styled.img`
  width: 61px;
  height: 70px;

  &:hover {
    cursor: pointer;
  }
`;

const InputBar = styled.input`
  position: absolute;
  background: #fff;
  color: #404040;
  border: none;
  left: 115px;
  top: 18px;
  width: 415px;
  height: 35px;
  font-size: 16px;
  outline: none;
  font-family: Circular, Helvetica, Arial;
  font-weight: 900;
`;

function Navbar(props) {
  return (
    <NavbarDiv>
      <div>
        <Logo src="https://birdhouse325.s3-us-west-1.amazonaws.com/logo.png" alt="Reserva logo" />
        <img src="https://birdhouse325.s3-us-west-1.amazonaws.com/searchbar.png" width="490px" height="65px" alt="Search bar" />
        <InputBar type='text' placeholder='Search' />
      </div>
      <RightLinkBox>
        <RightLinks>Become a host</RightLinks>
        <RightLinks>Help</RightLinks>
        <RightLinks>Sign up</RightLinks>
        <RightLinks>Log in</RightLinks>
      </RightLinkBox>
    </NavbarDiv>
  );
}

export default Navbar;
