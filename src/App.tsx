import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';
import { Container, Grid } from '@mui/material';
import { grey } from '@mui/material/colors';
import { SxProps } from '@mui/system';
import { StyledEngineProvider } from '@mui/material/styles';

import Board from './components/board/Board';
import Stats from './components/stats/Stats';
import { useState } from 'react';


function App() {
    const darkTheme = createTheme({
        palette: {
            mode: 'dark',
        },
    });

    const gridStyle: SxProps = {
        borderRadius: 3
    };

    const gridBoardItem: SxProps = {
        border: 2,
        borderRadius: 3,
        bgcolor: grey[900],
        borderColor: 'primary.dark'
    };

    const [moveCount, setMoveCount] = useState(0);
    const incrementMoveCount = () => setMoveCount(moveCount + 1);

    return (
        <StyledEngineProvider injectFirst>
            {/* injectFirst ensures that MUI styles are at the top of <head>
                so we don't have to add !important to all of our other css rules */}
            <ThemeProvider theme={darkTheme}>
                <CssBaseline />
                <Container maxWidth="lg" sx={{ padding: '2em' }}>
                    <Grid container sx={gridStyle} gap={4}>
                        <Grid item xs={12}>
                            <Stats moveCount={moveCount}></Stats>
                        </Grid>
                        <Grid item xs={12} sx={gridBoardItem}>
                            <Board incrementMoveCount={incrementMoveCount}></Board>
                        </Grid>
                    </Grid>
                </Container>
            </ThemeProvider>
        </StyledEngineProvider>
    );
}

export default App;
