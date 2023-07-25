import React from 'react';
import Home from "../pages/home/index";
import AProposPage from "../pages/A-propos-page/index";
import Error from "../pages/error/index";
import Projet from "../pages/Projet/index";
//import Cv from "../pages/cv/index";
import { Routes, Route, Navigate } from "react-router-dom";


const Router = () => {
    return (
        <Routes>
            <Route element={<Navigate replace to="/home" />} path="/" />
            <Route path="/home" element={<Home />} />
            <Route path="/a-propos-page" element={<AProposPage />} />
            <Route path="/projet/:id" element={<Projet />} />
            {/*<Route path="/cv" element={<Cv />} />*/}
            <Route path="*" element={<Error />} />
            <Route path= "/" element={<Navigate replace to = "/home" />} />
        </Routes>
    );
};

export default Router;
