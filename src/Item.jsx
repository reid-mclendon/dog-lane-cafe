import React from 'react';

const Item = ({item}) => {
    {console.log(item.title)}
    return (
        <div>
        <br/>
        <span><strong>{item.title}</strong></span>
        <br/>
        <span>{item.desc}</span>
        </div>
    )
}

export default Item;