import { Box } from "@mui/material";

function BoardTile(props: { value: any }) {
    return (
        <Box width={100} height={100}>{props.value}</Box>
    );
}

export default BoardTile;