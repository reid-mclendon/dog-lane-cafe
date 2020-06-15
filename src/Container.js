import React from 'react';
import { device } from './devices';
import styled from 'styled-components';

const Container = styled.div`
@media ${device.mobileS} {
  display: flex;
  padding: 1em;
  flex-wrap: wrap;
  flex-direction: column;
  background: transparent;
  height: 100%;

  @media ${device.tablet} { 
    display: flex;
    flex-wrap: nowrap;
    flex-direction: row;
  }`

export {Container};

