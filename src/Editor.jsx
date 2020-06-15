import React from 'react';
import styled from 'styled-components';
import {Slate, SlateContainer} from './Slate';

const Editor = () => {
    return (
        <SlateContainer>
        <Slate>
            <h1>Daily Menu</h1>
            <br/>
            <h2>Breakfast</h2>
            <br/>
            <strong><span>Egg Sandwiches $5.75 w/meat $7.75</span></strong>
            <br/>
            <span>Your Choice of Bread & Cheese</span>
            <br/>
        </Slate>
        </SlateContainer>
    )
}

export default Editor;