import React, { useEffect, useState } from 'react'
import { mapOrder } from 'utils/sort'
import './Column.scss'
import Task from './Task'
import { Container, Draggable } from 'react-smooth-dnd'

const Column = ({ column }) => {
    const onCardDrop = (cardResult) => {
        console.log(cardResult)
    }
    const colu = mapOrder(column.cards, column.cardOrder, 'id')
    return (
        <div className='column'>
            <header className='column-drag-handle'>{column.title}</header>
            <div className='list-style'>
                <Container
                    groupName="col"
                    // onDragStart={e => console.log('drag started', e)}
                    // onDragEnd={e => console.log('drag end', e)}
                    onDrop={onCardDrop()}
                    getChildPayload={index => column[index]}
                    dragClass='card-ghost'
                    dropClass='card-ghost-drop'
                    // onDragEnter={() => {
                    //     console.log('drag enter:', column.id);
                    // }}
                    // onDragLeave={() => {
                    //     console.log('drag leave:', column.id);
                    // }}
                    onDropReady={p => console.log('Drop ready: ', p)}
                    dropPlaceholder={{
                        animationDuration: 150,
                        showOnTop: true,
                        className: 'drop-preview'
                    }}
                    dropPlaceholderAnimationDuration={200}
                >
                    {
                        column.cards.map((ca, index) => {
                            return (
                                <Draggable key={index}>
                                    <Task card={ca} />
                                </Draggable>

                            )
                        })
                    }
                </Container>
                {/* <Task card={column.cards} /> */}

            </div>
        </div>
    )
}

export default Column