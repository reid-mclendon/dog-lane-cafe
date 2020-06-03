import React from 'react';
import styled from 'styled-components';
import {ReactComponent as Logo} from './logo.svg';
import banner from './banner.jpg';

const Nav = styled.div`
  display: flex;
  padding: 1em;
  background-color: #FDEAC7;
  align-items: center;  
`;

const Attention = styled(Nav)`
  padding: .5em;
  background-color: #FFB05D;
  justify-content: center;
text-transform: uppercase;

`;

const NavLeft = styled.div`
  display:flex;
  width: 50%;
  text-align: left;
`;

const NavRight = styled.div`
  width: 50%;
  text-align: right;
`;

const Link = styled.a`
color: #2B2D42;
text-decoration: none;
margin-right:20px;
`;

const Header = () => {
    return (
        <>
        <Attention><Link style={{fontSize: ".8em"}} href="#">Read Our Response to COVID-19</Link></Attention>
        <Nav>
            <NavLeft>
                <Logo style={{width: '125px'}}/>    
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

