import React from 'react';
import Home from "../pages/home/index";
import Error from "../pages/error/index";
//import Projet from "../pages/projet/index";
//import Cv from "../pages/cv/index";
import { Routes, Route, Navigate } from "react-router-dom";


const Router = () => {
    return (
        <Routes>
            <Route element={<Navigate replace to="/home" />} path="/" />
            <Route path="/home" element={<Home />} />
            {/*<Route path="/projet" element={<Projet />} />*/}
            {/*<Route path="/cv" element={<Cv />} />*/}
            <Route path="*" element={<Error />} />
        </Routes>
    );
};

export default Router;
