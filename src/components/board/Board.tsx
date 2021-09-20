import React from 'react';
import { getIcons } from './Icons';
import BoardTile from './BoardTile';
import { BoardTileProps } from './BoardTile';
import './Board.css';



interface BoardState {
    difficulty: number; // current difficulty
    tileProps: BoardTileProps[];
}
class Board extends React.Component<{}, BoardState> {
    difficulty = { easy: 4*4, medium: 6*6, hard: 8*8 };

    constructor(props: {}) {
        super(props);
        this.state = {
            difficulty: this.difficulty.medium,
            tileProps: getIcons(this.difficulty.medium).map((icon, i) => ({ icon, i, flipped: false, clickHandler: this.tileClicked }))
        };
    }

    tileClicked = (tileIndex: number) => {
        console.log(`tile ${tileIndex} clicked!`);

        this.setState((prev) => ({
            difficulty: prev.difficulty,
            tileProps: prev.tileProps.map((val, i) => {
                if (i === tileIndex) {
                    return {...val, ...{ flipped: !val.flipped }};
                }
                return val;
            })
        }));
    }

    render() {
        const classes = `boardContainer ${Object.entries(this.difficulty).find(val => val[1] === this.state.difficulty)?.[0]}`;
        return (
            <div className={classes}>
                {this.state.tileProps.map(p => {
                    return (
                        <BoardTile {...p}></BoardTile>
                    )
                })}
            </div>
        );
    }
}

export default Board;
