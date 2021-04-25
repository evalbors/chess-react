import Square from './Square';
import '../css/Chessboard.css';

const verticalAxis = ["1", "2", "3", "4", "5", "6", "7", "8"];
const horizontalAxis = ["a", "b", "c", "d", "e", "f", "g", "h"];

interface Piece {
    image?: string
    x: number
    y: number
}

const pieces: Piece[] = []

pieces.push({image: "images/black-pawn.svg", x: 0, y: 1})

export default function Chessboard() {
    let board = [];

    for (let j = verticalAxis.length - 1; j >= 0; j--) {
        for (let i = 0; i < horizontalAxis.length; i++) {
            const number = j + i + 2;
            let image = undefined;
            
            pieces.forEach(p => {
                if(p.x ===i && p.y ===j){
                    image = p.image;
                }
            })

            board.push(<Square image={image} number={number} />);
        }
    }

    return <div id="chessboard">{board}</div>;
}

