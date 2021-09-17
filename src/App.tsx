import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';
import { Container, Grid } from '@mui/material';
import { SxProps } from '@mui/system';
import Board from './components/board/Board';
import Stats from './components/stats/Stats';

function App() {
    const darkTheme = createTheme({
        palette: {
            mode: 'dark',
        },
    });

    const gridStyle: SxProps = {
        borderRadius: 3
    };

    return (
        <ThemeProvider theme={darkTheme}>
            <CssBaseline />
            <Container maxWidth="lg" sx={{ padding: '2em' }}>
                <Grid container sx={gridStyle} gap={4}>
                    <Grid item xs={12}>
                        <Stats></Stats>
                    </Grid>
                    <Board xs={12}></Board>
                </Grid>
            </Container>
        </ThemeProvider>
    );
}

export default App;
