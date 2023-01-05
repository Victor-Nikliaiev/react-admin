import { Box } from "@mui/material";
import { Header } from "../../components/Header.jsx";
import { FAQSet } from "./FAQSet.jsx";

export const FAQ = () => {
    return (
        <Box m='20px'>
            <Header title='FAQ' subtitle='Frequently Asked Questions Page' />
            <FAQSet />
        </Box>
    );
};
