import { Button, Container } from '@mui/material';
import * as React from 'react';
import { useState } from "react";

// Page 1! This also serves as the homepage of our Website.

function Page1() {

    // useState is basically how to do variables in react.
    // Here we have a variable buttonClicked and a function setButtonClicked
    // that is used to update this variable.
    const [buttonClicked, setButtonClicked] = useState(false);

    return (
        <Container maxWidth="xl">
            <h1 className="page1_title">2024 App Academy Hackathon</h1>
            
            <p>
                Hey! Welcome to the App Academy 2024 Hackathon. If you're in this workshop, that means you probably decided to make something using React. 
            </p>

            <p>
                To help you get started, this template has 3 different pages and a navigation bar to navigate between them. You can get rid of these if you want to or keep them in. It's up to you.
            </p>

            <p>
                The different pages are located in the "pages" folder with page1 being the home page. You add css styling through the App.css file. If you want to edit the navigation bar, or add new pages, you can do that in the App.js file.
            </p>

            <Button variant="contained" onClick={() => setButtonClicked(true)}>
                Click Here!
            </Button>

            {buttonClicked && <p>You clicked the button!</p>}

        </Container>
    )
}

export default Page1