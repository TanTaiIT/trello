import React, { useEffect, useState } from 'react'
import './Content.scss'
import { initialData } from 'actions/initialData'
import { isEmpty } from 'lodash'
import Column from 'components/content/Column'
import { mapOrder } from 'utils/sort'
const Content = () => {
    const [board, setBoard] = useState({})
    const [column, setColumn] = useState([])
    useEffect(() => {
        const boardFromDB = initialData.boards.find((board) => board.id === 'board-1')
        if (boardFromDB) {
            setBoard(boardFromDB)
            // 
            setColumn(mapOrder(boardFromDB.columns, boardFromDB.columnOrder, 'id'))
        }
    }, [])
    if (isEmpty(board)) {
        return <div className="not-found">Board not Found</div>
    }
    return (
        <div class="columnbar">
            {
                column.map((col, index) => {
                    return (
                        <Column column={col} key={index} />
                    )
                })
            }
        </div>
    )
}

export default Content