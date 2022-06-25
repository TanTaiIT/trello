import React, { useState, useEffect } from 'react'
const Task = ({ card }) => {
    return (
        <>
            {card.cover && <li><img src={card.cover} alt="" /></li>}
            <li>{card.title}</li>
        </>


    )
}

export default Task