import { Box } from "@mui/material";
import { BarChart } from "../../components/BarChart.jsx";
import { Header } from "../../components/Header.jsx";

export const Bar = () => {
    return (
        <Box m='20px'>
            <Header title='BAR CHART' subtitle='Simple Bar Chart' />
            <Box height='75vh'>
                <BarChart />
            </Box>
        </Box>
    );
};
