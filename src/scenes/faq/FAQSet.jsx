import { AccordionItem } from "./AccordionItem.jsx";

export const FAQSet = () => {
    return <>{formateAccordionSet()}</>;
};

const formateAccordionSet = () => {
    const accordionData = [
        {
            summary: "An important question",
            description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit.  Asperiores temporibus nisi quidem placeat vitae consectetur, nobis iste rem sapiente eligendi!",
        },
        {
            summary: "How does it works?",
            description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit.  Asperiores temporibus nisi quidem placeat vitae consectetur, nobis iste rem sapiente eligendi!",
        },
        {
            summary: "'How to open an account here?",
            description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit.  Asperiores temporibus nisi quidem placeat vitae consectetur, nobis iste rem sapiente eligendi!",
        },
        {
            summary: "How to send an offer?",
            description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit.  Asperiores temporibus nisi quidem placeat vitae consectetur, nobis iste rem sapiente eligendi!",
        },
        {
            summary: "How to contact an admin?",
            description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit.  Asperiores temporibus nisi quidem placeat vitae consectetur, nobis iste rem sapiente eligendi!",
        },
        {
            summary: "What is the goal of this website?",
            description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit.  Asperiores temporibus nisi quidem placeat vitae consectetur, nobis iste rem sapiente eligendi!",
        },
        {
            summary: "How does it works?",
            description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit.  Asperiores temporibus nisi quidem placeat vitae consectetur, nobis iste rem sapiente eligendi!",
        },
    ];

    return accordionData.map(item => (
        <AccordionItem
            summary={item.summary}
            description={item.description}
            key={crypto.randomUUID()}
        />
    ));
};
