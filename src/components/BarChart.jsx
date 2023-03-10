import { useTheme } from "@mui/material";
import { ResponsiveBar } from "@nivo/bar";
import { mockBarData as data } from "../data/mockData.js";
import { tokens } from "../theme.js";

export const BarChart = ({ isDashboard = false }) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const BASE_COLOR = colors.grey[100];

    return (
        <ResponsiveBar
            data={data}
            theme={{
                axis: {
                    domain: {
                        line: {
                            stroke: BASE_COLOR,
                        },
                    },
                    legend: {
                        text: {
                            fill: BASE_COLOR,
                        },
                    },
                    ticks: {
                        line: {
                            stroke: BASE_COLOR,
                            strokeWidth: 1,
                        },
                        text: {
                            fill: BASE_COLOR,
                        },
                    },
                },
                legends: {
                    text: {
                        fill: BASE_COLOR,
                    },
                },
                tooltip: {
                    container: {
                        color: BASE_COLOR,
                        background: colors.primary[400],
                    },
                },
            }}
            keys={["hot dog", "burger", "sandwich", "kebab", "fries", "donut"]}
            indexBy='country'
            margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
            padding={0.3}
            valueScale={{ type: "linear" }}
            indexScale={{ type: "band", round: true }}
            colors={{ scheme: "nivo" }}
            defs={[
                {
                    id: "dots",
                    type: "patternDots",
                    background: "inherit",
                    color: "#38bcb2",
                    size: 4,
                    padding: 1,
                    stagger: true,
                },
                {
                    id: "lines",
                    type: "patternLines",
                    background: "inherit",
                    color: "#eed312",
                    rotation: -45,
                    lineWidth: 6,
                    spacing: 10,
                },
            ]}
            fill={[
                {
                    match: {
                        id: "fries",
                    },
                    id: "dots",
                },
                {
                    match: {
                        id: "sandwich",
                    },
                    id: "lines",
                },
            ]}
            borderColor={{
                from: "color",
                modifiers: [["darker", 1.6]],
            }}
            axisTop={null}
            axisRight={null}
            axisBottom={{
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: isDashboard ? undefined : "country",
                legendPosition: "middle",
                legendOffset: 32,
            }}
            axisLeft={{
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: isDashboard ? undefined : "food",
                legendPosition: "middle",
                legendOffset: -40,
            }}
            enableLabel={false}
            labelSkipWidth={5}
            labelSkipHeight={12}
            labelTextColor={{
                from: "color",
                modifiers: [["darker", 1.6]],
            }}
            legends={[
                {
                    dataFrom: "keys",
                    anchor: "bottom-right",
                    direction: "column",
                    justify: false,
                    translateX: 120,
                    translateY: 0,
                    itemsSpacing: 2,
                    itemWidth: 100,
                    itemHeight: 20,
                    itemDirection: "left-to-right",
                    itemOpacity: 0.85,
                    symbolSize: 20,
                    effects: [
                        {
                            on: "hover",
                            style: {
                                itemOpacity: 1,
                            },
                        },
                    ],
                },
            ]}
            role='application'
            ariaLabel='Nivo bar chart demo'
            barAriaLabel={function (e) {
                return (
                    e.id +
                    ": " +
                    e.formattedValue +
                    " in country: " +
                    e.indexValue
                );
            }}
        />
    );
};
