import { useContext,useEffect,useState} from "react";
import './styles.scss';
import { useNavigate } from "react-router-dom";
import GlobalStateContext from "../../context/GlobalStateContext";
import { goToCena } from "../../Router/coordinator";
import Woman from '../../img/woman.svg'

const Home = () =>{ 

  const {data} = useContext(GlobalStateContext);
  const dataNascimento=data.dataNascimento;
  const identificacao=data.identificacao;
  const navigation = useNavigate();

  useEffect(() => {
    onChangeInputButtonDisabled()
  }, []);

const onChangeInputButtonDisabled =()=>{
  var input = document.querySelector('#btnSubmit')
  input.disabled=true;
}
const onChangeInputButton =()=>{
  var input = document.querySelector('#btnSubmit')
  input.disabled=false;
}

const onChangeIdentificacao = (e) =>{
 data.setIdentificacao(e.target.value)
}

const handleData = (e) =>{
  data.setDataNascimento(e.target.value)
  onChangeInputButton()
}

  return (
<div className="body">
<div className="cardHome card-5">
  <section>
  <img src={Woman} /> <p>Teste Perfil Desenvolvedora</p>
  </section>
  <article>
  <p>O objetivo é identificar de acordo com suas escolhas se o seu perfil é para Desenvolvedora FrontEnd ou Desenvolvedora BackEnd</p>
<p>Para realização do Quiz preencha os campos.</p>

</article>
    <div className="cardHome">

    <h2 class="card__titleHome">Como você se identifica?</h2>


        <div class="form__radio">
          <label for="mulherCis">Mulher Cis</label>
          <input  id="mulherCis" type="radio"
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
      <input type="button" className="button" id="btnSubmit" value="PRÓXIMO" onClick={() =>goToCena(navigation)}/>
      </div>
   
    </div>

    </div>
  );
}

export default Home;
