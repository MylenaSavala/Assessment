import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/home";
import Result from '../pages/result';
import Quiz from '../pages/quiz';
import Cena from "../pages/home/cena";



export const Router = () =>  {    

  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="quiz" element={<Quiz/>} /> 
            <Route path="/result" element={<Result/>} /> 
            <Route path="/cena" element={<Cena/>}> 
            </Route>
        </Routes>         
    </BrowserRouter>
  );
}

