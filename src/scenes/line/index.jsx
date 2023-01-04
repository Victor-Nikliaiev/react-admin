import { Box } from "@mui/material";
import { Header } from "../../components/Header.jsx";
import { LineChart } from "../../components/LineChart.jsx";

export const Line = () => {
    return (
        <Box m='20px'>
            <Header title='LINE CHART' subtitle='Simple Line Chart' />
            <Box height='75vh'>
                <LineChart />
            </Box>
        </Box>
    );
};
