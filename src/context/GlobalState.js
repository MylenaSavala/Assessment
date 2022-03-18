import axios from "axios";
import React, { useState, useEffect } from "react";
import GlobalStateContext from "./GlobalStateContext";
import Home from "../pages/home";
import Quiz from "../pages/quiz";
import Result from "../pages/result";

const GlobalState = () => {
    const [profile, setProfile] = useState([]);
    const [result, setResult] = useState(0);
    const [identificacao, setIdentificacao] = useState('');
    const [dataNascimento, setDataNascimento] = useState("yyyy-MM-dd");
  
    
    
    return (
      <GlobalStateContext.Provider value={{profile,setProfile, result,setResult,
       identificacao, setIdentificacao, dataNascimento, setDataNascimento}}>
        <Home />   
        <Quiz /> 
        <Result /> 
    </GlobalStateContext.Provider>
    );
  };
  
  export default GlobalState;