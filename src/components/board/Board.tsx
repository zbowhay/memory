import { Grid, GridSize } from '@mui/material';
import { grey } from '@mui/material/colors';
import { SxProps } from '@mui/system';
import BoardTile from './BoardTile';


function Board(props: { xs: GridSize }) {
    const boardStyle: SxProps = {
        border: 2,
        borderRadius: 3,
        borderColor: 'primary.dark',
        bgcolor: grey[900],
        justifyContent: 'space-evenly',
        padding: 5
    };

    const boxes = Array(25).fill(0);
    

    return (
        <Grid container item columns={6} gap={4} xs={props.xs || 12} sx={boardStyle} >
            {boxes.map((val, i) => 
                <Grid item xs={1} sx={{ borderColor: 'primary.main', border: 1 }}>
                    <BoardTile value={i}></BoardTile>
                </Grid>
            )
            }
        </Grid>
    );
}

export default Board;
