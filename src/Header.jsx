import React from 'react';
import styled from 'styled-components';
import {ReactComponent as Logo} from './logo-dlc.svg';
import banner from './banner.jpg';
import { device } from './devices';


const Nav = styled.div`
@media ${device.mobileS} {
  display: flex;
  padding: 1em;
  background-color: #FDEAC7;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
}

  @media ${device.tablet} { 
    display: flex;
    flex-wrap: nowrap;
    flex-direction: row;
  }
`;

const Attention = styled(Nav)`
@media ${device.mobileS} {
  display: flex;
  text-align: center;
  padding: .5em;
  background-color: #FFB05D;
text-transform: uppercase;
}
`;

const NavLeft = styled.div`
@media ${device.mobileS} { 
  display:flex;
  width: 100%;
  justify-content: center;
}

@media ${device.tablet} { 
  display:flex;
  width: 50%;
  justify-content: flex-start;
}
`;

const NavRight = styled.div`

@media ${device.mobileS} {
  display:flex;
  width:100%;
  margin-top: 1em;
  justify-content: center;
  align-items: center;
}

@media ${device.tablet} { 
display:flex;
width: 50%;
justify-content: flex-end;
margin-top: 0em;
}
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
  font-size: 0.8em;
`;
 

const Header = () => {
    return (
        <>
        <Attention><AttentionLink href="#">Read Our Response to COVID-19</AttentionLink></Attention>
        <Nav>
            <NavLeft>
                <Logo style={{height: '32px'}}/>    
            </NavLeft>
            <NavRight>
                <Link href="/">Home</Link>
                <Link href="/menu">Menu</Link>
                <Link href="#">Catering</Link>
                <Link href="#">About</Link>
            </NavRight>
        </Nav>
        <img width={'100%'} src={banner}/>
        </>
    );
}

export default Header;

