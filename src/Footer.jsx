import React from 'react';
import styled from 'styled-components';
import {ReactComponent as Phone} from './phone.svg';


const Nav = styled.div`
  display: flex;
  padding: 1em;
  background-color: #2B2D42;
  bottom: 0%;
  position: fixed;
  color: white;
  max-height: 75px;
  width: 100%;
`;

const Footer = () => {
    return (
        <Nav>
            <div>
           One Dog Lane, Storrs, CT 06268 | <strong>T</strong> 860.429.4900
           <br/>
           Proud member of <a style={{color: '#FFB05D', textDecoration: 'none'}} href="http://www.greenvalleyhospitality.com/">Green Valley Hospitality Group</a>
           </div>
        </Nav>
    )
}

export default Footer;