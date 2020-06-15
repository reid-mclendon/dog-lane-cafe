import React from 'react';
import styled from 'styled-components';

const Style = styled.button`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;

  &:focus {
    outline: none;
  }
  
  div {
    width: 2rem;
    height: 0.25rem;
    background: ${({ open }) => open ? '#FF9C33' : '#2B251C'};
    border-radius: 10px;
    transition: all 0.15s linear;
    position: relative;
    transform-origin: 1px;

    :first-child {
        transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
      }
  
      :nth-child(2) {
        opacity: ${({ open }) => open ? '0' : '1'};
        transform: ${({ open }) => open ? 'translateX(20px)' : 'translateX(0)'};
      }
  
      :nth-child(3) {
        transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
      }
  }
`;
  

   const Burger = ({ open, setOpen }) => {
       return(
        <Style open={open} onClick={() => {
            setOpen(!open); 
            if (!open === true)
            localStorage.setItem('open', !open);
            else
            localStorage.removeItem('open');
            }
        }>
            <div/>
            <div/>
            <div/>
        </Style>
       )
  }

  export default Burger;