import React from 'react';
import styled from 'styled-components';
import Item from './Item';

const Style = styled.div`
display: flex;
flex-wrap: wrap;
flex-direction: column;
margin: 1em;
`;

const Category = ({category}) => {
    return (
    <Style>
        <h2>{category.name}</h2>
        { category.items.map(item => { return(<Item key={item.id} item={item}/>) }) }
    </Style>
    )
}

export default Category;