import axios from "axios";
import React, { useState, useEffect } from "react";
import GlobalStateContext from "./GlobalStateContext";

const GlobalState = (props) => {
    const [profile, setProfile] = useState([]);
    const [result, setResult] = useState(0);
    const [identificacao, setIdentificacao] = useState('');
    const [dataNascimento, setDataNascimento] = useState('');
  
    useEffect(() => {
      getProfile();
    }, []);
  
    const getProfile = async () => {
      try {
      const response = await axios.get(`https://randomuser.me/api/`)
      setProfile(response.data.results)
     }
     catch (error) {
         alert("Algo deu errado, tente novamente mais tarde")
     }
  }    

  const data = {
    profile, result,setResult,
    identificacao, setIdentificacao, dataNascimento, setDataNascimento
  };
    return (
      <GlobalStateContext.Provider value={{data}}>
       {props.children}
    </GlobalStateContext.Provider>
    );
  };
  
  export default GlobalState;