import { useContext,useEffect,useState} from "react";
import './styles.scss';
import GlobalStateContext from "../../context/GlobalStateContext";
import {goToQuiz} from "../../Router/coordinator";
import Profile from "../../components/profile";
import Quiz from "../../pages/quiz";

import { useNavigate } from "react-router-dom";

const Cena = () =>{ 

  const {data} = useContext(GlobalStateContext);
  const dataNascimento=data.dataNascimento;
  const identificacao=data.identificacao;
  const navigation = useNavigate();

  useEffect(() => {
  }, []);


  return (
<div className="body">
<div className="Container">

<Profile />   
<Quiz />
    {/* <fieldset>  
      <input type="button" className="button" id="btnSubmit" value="Login" onClick={() =>goToQuiz(navigation)}/>
    </fieldset> */}
    </div>

    </div>
  );
}

export default Cena;
