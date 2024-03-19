import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import React from 'react'
import About from './pages/About';
import Home from './pages/Home';
import PlayGround from './pages/PlayGround';
import Header from "./components/header&footer/Header";
import Footer from "./components/header&footer/Footer";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />
    },
    {
        path: '/about',
        element: <About />
    },
    {
        path: '/playground',
        element: <PlayGround />
    }
])
const App = () => {
    return (
        <>
       
            <RouterProvider router={router}></RouterProvider>
    </>
    )
}
export default App


