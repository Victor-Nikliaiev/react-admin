import { Box, Typography, useTheme } from "@mui/material";
import { GeographyChart } from "../../components/GeographyChart.jsx";
import { tokens } from "../../theme.js";

export const GeographyBasedTraffic = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
        <Box
            gridColumn='span 4'
            gridRow='span 2'
            backgroundColor={colors.primary[400]}
            p='30px'
        >
            <Typography variant='h5' fontWeight='600' sx={{ mb: "15px" }}>
                Geography Based Traffic
            </Typography>
            <Box height='200px'>
                <GeographyChart isDashboard={true} />
            </Box>
        </Box>
    );
};
