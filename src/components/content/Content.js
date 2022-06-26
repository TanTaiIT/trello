import React, { useEffect, useState } from 'react'
import './Content.scss'
import { initialData } from 'actions/initialData'
import { isEmpty } from 'lodash'
import Column from 'components/content/Column'
import { mapOrder } from 'utils/sort'
import { Container, Draggable } from 'react-smooth-dnd'
const Content = () => {
    const [board, setBoard] = useState({})
    const [column, setColumn] = useState([])
    useEffect(() => {
        const boardFromDB = initialData.boards.find((board) => board.id === 'board-1')
        if (boardFromDB) {
            setBoard(boardFromDB)
            setColumn(mapOrder(boardFromDB.columns, boardFromDB.columnOrder, 'id'))
        }
    }, [])
    if (isEmpty(board)) {
        return <div className="not-found">Board not Found</div>
    }
    const onColumnDrop = (dropResult) => {
        console.log(dropResult)
    }
    return (
        <div className="columnbar">
            <Container
                orientation="horizontal"
                onDrop={onColumnDrop}
                dragHandleSelector=".column-drag-handle"
                getChildPayload={index => column[index]}
                dropPlaceholder={{
                    animationDuration: 150,
                    showOnTop: true,
                    className: 'cards-drop-preview'
                }}
            >
                {
                    column.map((col, index) => {
                        return (
                            <Draggable key={index}>
                                <Column column={col} />
                            </Draggable>


                        )
                    })
                }
            </Container>

        </div>
    )
}

export default Content