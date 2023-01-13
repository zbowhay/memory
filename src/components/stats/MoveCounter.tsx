import React from 'react';

interface MoveProps {
    move: number;
}

export class MoveCounter extends React.Component<MoveProps> {
    render() {
        return (
            <p>Move Count: {this.props.move}</p>
        );
    }
}