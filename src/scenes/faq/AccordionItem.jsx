import { ExpandMore } from "@mui/icons-material";
import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Typography,
    useTheme,
} from "@mui/material";
import { tokens } from "../../theme.js";

export const AccordionItem = ({ summary, description }) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const textColor = colors.greenAccent[300];

    return (
        <Accordion defaultExpanded>
            <AccordionSummary expandIcon={<ExpandMore />}>
                <Typography color={textColor} variant='h5'>
                    {summary}
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>{description}</Typography>
            </AccordionDetails>
        </Accordion>
    );
};
