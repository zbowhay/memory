import React from 'react';
import { getIcons } from './Icons';
import BoardTile from './BoardTile';
import { BoardTileProps } from './BoardTile';
import './Board.css';



interface BoardState {
    difficulty: number; // current difficulty
    tilePropsDict: { [key: string]: BoardTileProps }
    lastClicked: number;
}
class Board extends React.Component<{}, BoardState> {
    difficulty = { easy: 4*4, medium: 6*6, hard: 8*8 };

    constructor(props: {}) {
        super(props);
        this.state = {
            difficulty: this.difficulty.easy,
            tilePropsDict: Object.fromEntries(getIcons(this.difficulty.easy)
                .map((icon, i) => ({
                    icon,
                    i,
                    flipped: false,
                    matched: false,
                    clickHandler: this.tileClicked
                }))
                .map(p => [p.i, p])),
            lastClicked: -1
        };
    }

    handleWinCondition(tilePropsDict: { [key: string]: BoardTileProps }) {
        if (Object.values(tilePropsDict).every(tp => tp.matched)) {
            console.log('hooray! you won!');
        }
    }

    tileClicked = (tileIndex: number) => {
        console.log(`tile ${tileIndex} clicked!`);

        this.setState(prev => {
            console.log(prev);

            if (prev.lastClicked === tileIndex || prev.tilePropsDict[tileIndex].matched) {
                console.log('ignoring click')
                return prev;
            }

            let lastClicked = prev.lastClicked;
            const tilePropsDict = prev.tilePropsDict;

            // if we previously attempted a match and failed, flip those tiles back over
            if (lastClicked < 0) {
                Object.values(tilePropsDict).forEach((p, i) => {
                    if (!p.matched && p.flipped) {
                        tilePropsDict[i].flipped = false;
                    }
                });
            }

            // flip current selection
            tilePropsDict[tileIndex].flipped = true;

            // check for match if we have 2 tiles flipped now
            if (lastClicked > -1) {
                const [first, second] = [tilePropsDict[lastClicked], tilePropsDict[tileIndex]];
                if (first.icon === second.icon) {
                    console.log('matched!');
                    tilePropsDict[lastClicked].matched = true;
                    tilePropsDict[tileIndex].matched = true;
                    this.handleWinCondition(tilePropsDict);
                }

                // reset
                lastClicked = -1;
            } else {
                // only one tile flipped, update
                lastClicked = tileIndex;
            }

            return {
                difficulty: prev.difficulty,
                tilePropsDict,
                lastClicked
            };
        });
    }

    render() {
        const classes = `boardContainer ${Object.entries(this.difficulty).find(val => val[1] === this.state.difficulty)?.[0]}`;
        return (
            <div className={classes}>
                {Object.values(this.state.tilePropsDict).map((p, i) => {
                    return (
                        <BoardTile key={i} {...p}></BoardTile>
                    )
                })}
            </div>
        );
    }
}

export default Board;
