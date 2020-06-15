import React from 'react';
import styled from 'styled-components';
import { device } from './devices';

const Slate = styled.div`
    @media ${device.mobileS} {
    background: #FFFFFF;
    height: 100%;
    border-radius: .5em;
    border: 2px solid black;
    padding: 1em;
    width: 100%;
    margin-top: 1em;
    }

    @media ${device.laptop} {
    margin: 0em 3em 0em 3em;
    justify-content: center;
    }
`;

const SlateContainer = styled.div`
@media ${device.mobileS} {
  display: flex;
  flex-wrap: wrap;
  background: transparent;
  height: 100%;
  justify-content: space-evenly;
  padding: 1em;
`

export {Slate, SlateContainer};