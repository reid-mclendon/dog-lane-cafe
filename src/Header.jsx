import React, { useState } from 'react';
import styled from 'styled-components';
import {ReactComponent as Logo} from './logo.svg';
import banner from './banner.jpg';
import { device } from './devices';
import Burger from './Burger';
import Nav from './Nav';
import {Container} from './Container';


const Attention = styled(Container)`
@media ${device.mobileS} {
  display: flex;
  text-align: center;
  justify-content: center;
  padding: .5em;
  background-color: #FFB05D;
text-transform: uppercase;
z-index:-1
}
`;

const Left = styled.div`
@media ${device.mobileS} { 
  display:flex;
  width: 100%;
  justify-content: flex-start;
}


`;

const Right = styled.div`
display:flex;
width: 100%;
justify-content: flex-end;
margin-top: 0em;
`;

const Link = styled.a`
@media ${device.mobileS} {
  color: #2B2D42;
text-decoration: none;
margin: 0 10px 0 10px;
}


@media ${device.tablet} {
margin: 0 0 0 20px;
}
`;

const AttentionLink = styled(Link)`
  margin: none;
  font-size: 0.9em;
`;
 
const Header = () => {
  const [open, setOpen] = useState(localStorage.getItem('open') || false);
    return (
        <>
      <Nav open={open} setOpen={setOpen}/>
        <Container>
        <Left>
        <Burger open={open} setOpen={setOpen}/>
        </Left>
        <Right>
        <Logo style={{width: '200px'}}/>    
        </Right>
      </Container>
     


        </>
    );
}

export default Header;