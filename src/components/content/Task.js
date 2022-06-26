import React, { useState, useEffect } from 'react'
const Task = ({ card }) => {
    return (
        <div className="list-item">
            {card.cover && <img src={card.cover} alt="" onMouseDown={(e) => e.preventDefault()} />}
            {card.title}
        </div>


    )
}

export default Task