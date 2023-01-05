import { Email, PersonAdd, PointOfSale, Traffic } from "@mui/icons-material";
import { useTheme } from "@mui/material";
import { StatBox } from "../../components/StatBox.jsx";
import { tokens } from "../../theme.js";

const statBoxData = [
    {
        title: "12,361",
        subtitle: "Emails Sent",
        progress: "0.75",
        increase: "+14%",
        icon: Email,
    },
    {
        title: "431,225",
        subtitle: "Sales Obtained",
        progress: "0.5",
        increase: "+21%",
        icon: PointOfSale,
    },
    {
        title: "32,441",
        subtitle: "New Clients",
        progress: "0.30",
        increase: "+5%",
        icon: PersonAdd,
    },
    {
        title: "1,335,134",
        subtitle: "Traffic Inbound",
        progress: "0.80",
        increase: "+43%",
        icon: Traffic,
    },
];

export const StatBoxSet = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const iconColor = colors.greenAccent[600];

    return statBoxData.map(
        ({ title, subtitle, progress, increase, icon: Icon }) => (
            <StatBox
                key={crypto.randomUUID()}
                title={title}
                subtitle={subtitle}
                progress={progress}
                increase={increase}
                icon={
                    <Icon
                        sx={{
                            color: iconColor,
                            fontSize: "26px",
                        }}
                    />
                }
            />
        )
    );
};
