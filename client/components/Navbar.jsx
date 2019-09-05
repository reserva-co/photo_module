import React from 'react';

const NavbarDiv = styled.div`
  height: 70px;
  width: 100%;
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
`;

const RightLinkBox = styled.div`
  margin-right: 20px;
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

function Navbar(props) {
  return (
    <NavbarDiv>
      <div>
        <img src="https://birdhouse325.s3-us-west-1.amazonaws.com/logo.png" width="61px" height="70px" alt="Reserva logo" />
        <img src="https://birdhouse325.s3-us-west-1.amazonaws.com/searchbar.png" width="492px" height="65px" alt="Search bar" />
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
