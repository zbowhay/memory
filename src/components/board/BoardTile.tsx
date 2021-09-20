import { Card } from "@mui/material";
import React from "react";
import './BoardTile.css';

export interface BoardTileProps {
    i: number;
    flipped: boolean;
    icon: any;
    clickHandler: any;
}

interface BoardTileState {
    flipped: boolean;
}
class BoardTile extends React.Component<BoardTileProps, BoardTileState> {
    render() {
        return (
            <Card key={this.props.i}
                className={`boardTile ${this.props.flipped ? 'cardBack' : 'cardFront'}`}
                onClick={(e) => this.props.clickHandler(this.props.i, e)}
                >
                {this.props.flipped && <this.props.icon className='cardIcon'></this.props.icon>}
            </Card>
        );
    }
}

export default BoardTile;