import React, { useEffect, useState } from 'react'
import { mapOrder } from 'utils/sort'
import './Column.scss'
import Task from './Task'

const Column = ({ column }) => {
    const colu = mapOrder(column.cards, column.cardOrder, 'id')
    return (
        <div class="column">
            <header>{column.title}</header>
            <ul>

                {
                    column.cards.map((ca) => {
                        return (
                            <Task card={ca} />
                        )
                    })
                }
                {/* <Task card={column.cards} /> */}

            </ul>
        </div>
    )
}

export default Column