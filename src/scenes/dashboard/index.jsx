import { Box } from "@mui/material";
import { Header } from "../../components/Header.jsx";
import { Campaign } from "./Campaign.jsx";
import { DownloadReportsButton } from "./DownloadReportsButton.jsx";
import { GeographyBasedTraffic } from "./GeographyBasedTraffic.jsx";
import { RecentTransactions } from "./RecentTransactions.jsx";
import { RevenueGenerated } from "./RevenueGenerated.jsx";
import { SalesQuantity } from "./SalesQuantity.jsx";
import { StatBoxSet } from "./StatBoxSet.jsx";

export const Dashboard = () => {
    return (
        <Box m='20px'>
            <Box
                display='flex'
                justifyContent='space-between'
                alignItems='center'
            >
                <Header
                    title='DASHBOARD'
                    subtitle='Welcome to your  dashboard'
                />
                <DownloadReportsButton />
            </Box>

            {/* GRID AND CHARTS */}
            <Box
                display='grid'
                gridTemplateColumns='repeat(12, 1fr)'
                gridAutoRows='140px'
                gap='20px'
            >
                {/* ROW # 1 */}
                <StatBoxSet />
                {/* ROW # 2 */}
                <RevenueGenerated />
                <RecentTransactions />
                {/* ROW # 3 */}
                <Campaign />
                <SalesQuantity />
                <GeographyBasedTraffic />
            </Box>
        </Box>
    );
};
