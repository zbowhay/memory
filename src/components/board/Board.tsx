import BoardTile from './BoardTile';
import HomeIcon from '@mui/icons-material/Home';
import './Board.css';

function Board() {
    const difficulty = {
        easy: 4*4,
        medium: 6*6,
        hard: 8*8
    };

    const tileClicked = (i: any) => {
        console.log('clicked', i);
    }

    const tiles = Array(difficulty.medium).fill(0).map((val, i) => <BoardTile i={i} icon={HomeIcon} flipped={false} clickHandler={tileClicked}></BoardTile>);
    return (
        <div className="boardContainer">
            {tiles}
        </div>
    );
}

export default Board;
