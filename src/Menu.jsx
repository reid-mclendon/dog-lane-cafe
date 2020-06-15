import React from 'react';
import {Slate, SlateContainer} from './Slate';
import Category from './Category';

const Menu = ({canEdit, menu}) => {
    return (
        <SlateContainer>
        <Slate>
            <h1>~ Daily Menu ~</h1>
            <SlateContainer>
            { menu.map(category => { return(<Category key={category.id} category={category}/>) }) }
            </SlateContainer>
        </Slate>
        </SlateContainer>
    )
}



export default Menu;