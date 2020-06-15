import React from 'react';
import styled from 'styled-components';

const Style = styled.nav `

display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background: #2B251C;
  height: 100%;
  padding: 5rem 1rem 0em 1rem;
  text-align: left;
  position: absolute;
  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-150%)'};
  transition: transform 0.15s ease-in-out;
  z-index: 1;

  a {
    font-size: 1.2rem;
    text-transform: uppercase;
    padding: 1rem 0;
    font-weight: bold;
    letter-spacing: 0.2rem;
    color: #CAA671;
    text-decoration: none;
    transition: color 0.15s linear;

    &:hover {
      color: #FF9C33;
    }

  }

  div {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
  }
`;

const handleClick = (open) => {
  localStorage.removeItem('open');
}

const Nav = ({ open, setOpen}) => {
    return (
      <Style open={open}>
          <div>
        <a href="/" onClick={handleClick({open})}>
        Menu
      </a>
      <a href="/" onClick={handleClick({open})}>
        About Us
        </a>
      <a href="/" onClick={handleClick({open})}>
        Contact
        </a>
        </div>
        </Style>
    )
}

export default Nav;