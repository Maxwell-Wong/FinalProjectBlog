import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Route, Routes, useLocation} from "react-router-dom";
import {ChakraProvider, extendTheme} from "@chakra-ui/react";
import Layout from "./Components/Layout";
import HomePage from "./Pages/Home"
import TagsPage from "./Pages/Tags"
import ArchivePage from "./Pages/Archive"
import ArticlePage1 from "./Pages/Article1"
import ArticlePage2 from "./Pages/Article2"
import ArticlePage from "./Pages/Article"
import { SessionProvider } from './utils/user';
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
                <Route path="/search" element={<ArchivePage/>}/>
                <Route path="/article" element={<ArticlePage location={location} />}/>
                <Route path="/article1" element={<ArticlePage1/>}/>
                <Route path="/article2" element={<ArticlePage2/>}/>
            </Routes>
        </Layout>

    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <SessionProvider>
        <ChakraProvider theme={theme}>
            <BrowserRouter>
                <RouterMachine/>
            </BrowserRouter>
        </ChakraProvider>
    </SessionProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
