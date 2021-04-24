import React from 'react'

function Board(props) {
    const drop = e => {
        e.preventDefault();
        const piece_id = e.dataTransfer.getData('piece_id');

        const piece = document.getElementById(piece_id);
        piece.style.display = 'block';

        e.target.appendChild(piece);
    }

    const dragOver = e => {
        e.preventDefault(); 
    }

    return (
        <div
            id={props.id}
            className={props.className}
            onDrop={drop}
            onDragOver={dragOver}

        >
            { props.children }
        </div>
    )
}

export default Board
