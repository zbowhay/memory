import { Card } from "@mui/material";
import './BoardTile.css';

export interface BoardTileProps {
    i: number;
    flipped: boolean;
    matched: boolean;
    icon: any;
    clickHandler: any;
}

const BoardTile = (props: BoardTileProps) => {
    return (
        <Card
            className={`boardTile ${props.flipped ? 'cardBack' : 'cardFront'}`}
            onClick={(e) => props.clickHandler(props.i, e)}
        >
            {props.flipped && <props.icon className='cardIcon'></props.icon>}
        </Card>
    )
}

export default BoardTile;