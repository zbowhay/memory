import BoardTile from './BoardTile';
import './Board.css';
import { getIcons } from './Icons';

function Board() {
    const difficulty = {
        easy: 4*4,
        medium: 6*6,
        hard: 8*8
    };
    const currentDifficulty = difficulty.medium;
    const icons = getIcons(currentDifficulty);
    const classes = `boardContainer ${Object.entries(difficulty).find(val => val[1] === currentDifficulty)?.[0]}`;

    const tileClicked = (i: any) => {
        console.log('clicked', i);
    }

    const tiles = icons.map((val, i) =>
        <BoardTile i={i} icon={val} flipped={false} clickHandler={tileClicked}></BoardTile>
    );
    return (
        <div className={classes}>
            {tiles}
        </div>
    );
}

export default Board;
