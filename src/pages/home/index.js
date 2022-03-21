import { useContext,useEffect,useState} from "react";
import './styles.scss';
import Quiz from '../quiz';
import GlobalStateContext from "../../context/GlobalStateContext";
import Profile from "../../components/profile";

const Home = () =>{ 

  const identificacao = useContext(GlobalStateContext);
  const setIdentificacao = useContext(GlobalStateContext);
  const dataNascimento = useContext(GlobalStateContext);
  const setDataNascimento = useContext(GlobalStateContext);

  useEffect(() => {

onClickLogin();
  }, []);


const onChangeIdentificacao = (e) =>{
 setIdentificacao(e.target.value)
}

const handleData = (e) =>{
  setDataNascimento(e.target.value)
}
const onClickNext = () =>{
  console.log(identificacao,dataNascimento)
}

const onClickLogin = () =>{

document.getElementById("btnSubmit").onClick = function() {
  console.log(identificacao,dataNascimento)

  var radios = document.getElementsByName("identificacao");
  for (var i = 0; i < radios.length; i++) {
      if (radios[i].checked) {
          console.log("Escolheu: " + radios[i].value);
      }
  }
};
}
  return (
<div className="body">
<Profile />   

<fieldset>
      <div class="form__radios">
      <legend>Como você se identifica?</legend>

        <div class="form__radio">
          <label for="mulherCis">Mulher Cis</label>
          <input checked id="mulherCis" type="radio"
            name="identificacao" 
            value="mulherTrans"
            onChange={onChangeIdentificacao}/>
        </div>

        <div class="form__radio">
          <label for="mulherCis">Mulher Trans</label>
          <input id="mulherCis" type="radio" name="identificacao" 
          value="mulherTrans" onChange={onChangeIdentificacao}/>
        </div>

        <label for="dataNascimento">Data Nascimento</label>
        <input 
        type="date"
        id="anoNasc" 
        name="Data de nascimento" 
        value={dataNascimento}
        onChange={handleData}/>
      <input type="button" className="button" id="btnSubmit" value="Submit me!" onClick={onClickLogin}/>

      </div>

    </fieldset>

    </div>
  );
}

export default Home;
