import { Box } from "@mui/material";
import { Header } from "../../components/Header.jsx";
import { AccordionItem } from "./AccordionItem.jsx";

export const FAQ = () => {
    return (
        <Box m='20px'>
            <Header title='FAQ' subtitle='Frequently Asked Questions Page' />
            <AccordionItem
                summary='An Important question'
                description='Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Asperiores temporibus nisi quidem placeat vitae consectetur,
                    nobis iste rem sapiente eligendi!'
            />
            <AccordionItem
                summary='How does it works?'
                description='Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Asperiores temporibus nisi quidem placeat vitae consectetur,
                    nobis iste rem sapiente eligendi!'
            />
            <AccordionItem
                summary='How to open an account here?'
                description='Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Asperiores temporibus nisi quidem placeat vitae consectetur,
                    nobis iste rem sapiente eligendi!'
            />
            <AccordionItem
                summary='How to send an offer'
                description='Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Asperiores temporibus nisi quidem placeat vitae consectetur,
                    nobis iste rem sapiente eligendi!'
            />
            <AccordionItem
                summary='How to contact admin?'
                description='Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Asperiores temporibus nisi quidem placeat vitae consectetur,
                    nobis iste rem sapiente eligendi!'
            />{" "}
            <AccordionItem
                summary='What is the goal of this website?'
                description='Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Asperiores temporibus nisi quidem placeat vitae consectetur,
                nobis iste rem sapiente eligendi!'
            />
        </Box>
    );
};
