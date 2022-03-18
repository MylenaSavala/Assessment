import { useContext,useEffect } from "react";
import './styles.scss';
import Quiz from '../quiz';
import Profile from '../../components/profile'
import GlobalStateContext from "../../context/GlobalStateContext";

const Home = () =>{ 

  const profile = useContext(GlobalStateContext);
  const identificacao = useContext(GlobalStateContext)
  const setDataNascimento = useContext(GlobalStateContext)
  const setIdentificacao = useContext(GlobalStateContext)
  const dataNascimento = useContext(GlobalStateContext)

  useEffect(() => {
    onClickLogin();
  }, []);


const onChangeIdentificacao = (e) =>{
  var variavel = e.target.id;
    setIdentificacao({value: variavel});
}

const handleData = (e) =>{
  setDataNascimento({value: e.target.value});
}
const onClickNext = () =>{
  console.log(identificacao,dataNascimento)
}
const onClickLogin = () =>{
  console.log(profile)
}
 
  return (
    <div>
      <h1>Você se identifica como?</h1>   
<input 
type="radio" 
id="mulherCis" 
name="identificacao" 
value={identificacao}
onChange={onChangeIdentificacao}/>
<label for="mulherCis">Mulher Cis</label>

<input
type="radio"
id="mulherTrans"
name="identificacao"
value={identificacao}
onChange={onChangeIdentificacao}/>
<label for="mulherTrans">Mulher Trans</label>

<label for="dataNascimento">Data Nascimento</label>

<input 
type="date"
 id="anoNasc" 
 name="Data de nascimento" 
 value={dataNascimento}
 onChange={handleData}/>
<button onClick={onClickNext}>Próximo</button>
<button onClick={onClickLogin}>Logar</button>

<Profile /> 
<Quiz />
    </div>
  );
}

export default Home;
