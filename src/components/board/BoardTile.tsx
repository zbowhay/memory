import { Card } from "@mui/material";
import React from "react";
import './BoardTile.css';

interface BoardTileProps {
    i: number;
    flipped?: boolean;
    icon: any;
    clickHandler?: any;
}

interface BoardTileState {
    flipped: boolean;
}
class BoardTile extends React.Component<BoardTileProps, BoardTileState> {
    classes: any;

    constructor(props: BoardTileProps) {
        super(props);
        this.state = { flipped: false };
    }
    
    handleClick = (e: any) => {
        console.log('hello', e);
        this.setState(prev => ({
            flipped: !prev.flipped
        }))
    }
    
    render() {
        return (
            <Card key={this.props.i}
                className={`boardTile ${this.state.flipped ? 'cardBack' : 'cardFront'}`}
                onClick={this.handleClick}
            >
                {this.state.flipped && <this.props.icon className='cardIcon'></this.props.icon>}
            </Card>
        );
    }
}

export default BoardTile;