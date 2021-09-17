import { Container } from '@mui/material';
import { grey } from '@mui/material/colors';
import { SxProps } from '@mui/system';
import { Timer } from './Timer';

function Stats() {
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
            <p>Move Counter</p>
            <p>High Score</p>
        </Container>
    );
}

export default Stats;
