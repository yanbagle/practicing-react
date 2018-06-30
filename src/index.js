// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
//
// function Square(props) {
//     return (
//         <button className="square" onClick={props.onClick}>
//             {props.value}
//         </button>
//     );
// }
//
// class Board extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             squares: Array(9).fill(null),
//             xIsNext: true,
//         };
//     }
//
//     handleClick(i) {
//         const squares = this.state.squares.slice();
//         this.state.xIsNext ? squares[i] = 'X' : squares[i] = 'O';
//         this.setState({squares: squares, xIsNext: !this.state.xIsNext});
//     }
//
//     renderSquare(i) {
//         return (
//             <Square
//                 value={this.state.squares[i]}
//                 onClick={() => this.handleClick(i)}
//             />
//         );
//     }
//
//     render() {
//         let status = 'Next Player: ';
//         this.state.xIsNext ? status += 'X' : status += '0';
//         const winner = calculateWinner(this.state.squares);
//         if (winner) {
//             status = `winner: ${winner}`;
//         }
//         return (
//             <div>
//                 <div className="status">{status}</div>
//                 <div className="board-row">
//                     {this.renderSquare(0)}
//                     {this.renderSquare(1)}
//                     {this.renderSquare(2)}
//                 </div>
//                 <div className="board-row">
//                     {this.renderSquare(3)}
//                     {this.renderSquare(4)}
//                     {this.renderSquare(5)}
//                 </div>
//                 <div className="board-row">
//                     {this.renderSquare(6)}
//                     {this.renderSquare(7)}
//                     {this.renderSquare(8)}
//                 </div>
//             </div>
//         );
//     }
// }
//
// class Game extends React.Component {
//     render() {
//         return (
//             <div className="game">
//                 <div className="game-board">
//                     <Board />
//                 </div>
//                 <div className="game-info">
//                     <div>{/* status */}</div>
//                     <ol>{/* TODO */}</ol>
//                 </div>
//             </div>
//         );
//     }
// }
//
// function calculateWinner(squares) {
//     const lines = [
//         [0, 1, 2],
//         [3, 4, 5],
//         [6, 7, 8],
//         [0, 3, 6],
//         [1, 4, 7],
//         [2, 5, 8],
//         [0, 4, 8],
//         [2, 4, 6],
//     ];
//     for (let i = 0; i < lines.length; i++) {
//         const [a, b, c] = lines[i];
//         if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
//             return squares[a];
//         }
//     }
//     return null;
// }
//
// // ========================================
//
// ReactDOM.render(
//     <Game />,
//     document.getElementById('root')
// );

import React from 'react';
import ReactDOM from 'react-dom';
import './index-practice.css';

function Square (props) {
    return (
        <button className="square" onClick={props.onClick}>
            {props.value}
        </button>
    );
}

class Board extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            squares: Array(9).fill(null),
            xIsNext: true,
            winner: null
        };
    }

    handleClick (i) {
        const squaresCopy = this.state.squares.slice();
        this.state.xIsNext ? squaresCopy[i] = 'x' : squaresCopy[i] = 'o';
        const winner = calculateWinner(squaresCopy);
        this.setState({squares: squaresCopy, xIsNext: !this.state.xIsNext, winner: winner});
    }

    renderSquares () {
        const squares = [];
        for (let i = 0; i < 9; i++) {
            squares.push(<Square value={this.state.squares[i]} onClick={() => this.handleClick(i)}/>);
        }
        return squares;
    }

    render() {
        return (
            <div>
                <div>
                    winner: {this.state.winner}
                </div>
                <div className="game-board">
                    {this.renderSquares()}
                </div>
            </div>
        );
    }
}

class Game extends React.Component {
    render() {
        return (
            <div className="game">
                <Board/>
            </div>
        );
    }
}

function calculateWinner(squares) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    return null;
}

// ========================================

ReactDOM.render(
    <Game />,
    document.getElementById('root')
);