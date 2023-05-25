import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Route, Routes, useLocation} from "react-router-dom";
import {ChakraProvider, extendTheme} from "@chakra-ui/react";
import Layout from "./Components/Layout";
import HomePage from "./Pages/Home"
import TagsPage from "./Pages/Tags"

const config = {
    initialColorMode: 'system',
    useSystemColorMode: false
};

const theme = extendTheme({config});

function RouterMachine() {
    const location = useLocation()
    return (
        <Layout title="A platform for meta analysis" >
            <Routes location={location}>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/analysis" element={<TagsPage/>}/>
            </Routes>
        </Layout>

    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
        <ChakraProvider theme={theme}>
            <BrowserRouter>
                <RouterMachine/>
            </BrowserRouter>
        </ChakraProvider>
    </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
