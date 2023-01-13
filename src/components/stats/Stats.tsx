import { Container } from '@mui/material';
import { grey } from '@mui/material/colors';
import { SxProps } from '@mui/system';
import { Timer } from './Timer';
import { MoveCounter } from './MoveCounter';

interface GameStats {
  moveCount: number;
}

function Stats(props: GameStats) {
    const containerStyle: SxProps = {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        border: 2,
        borderRadius: 3,
        borderColor: 'primary.dark',
        bgcolor: grey[900]
    };

    return (
        <Container maxWidth="sm" sx={containerStyle}>
            <Timer></Timer>
            <MoveCounter move={props.moveCount}></MoveCounter>
        </Container>
    );
}

export default Stats;
