import {useContext,useState,useEffect } from "react";
import GlobalStateContext from "../../context/GlobalStateContext";
import Profile from "../../components/profile";


function Result() {
  const [profileDEV, setProfile] = useState('');
  const [age, setAge] = useState(0);

  const {data} = useContext(GlobalStateContext); 
  useEffect(() => {
    resultFinish()
    searchAge()
  }, []);


  const searchAge = () =>{
    var currentTime = new Date();
    var year = currentTime.getFullYear()
    var age = Number(data.dataNascimento.getFullYear) -year;
    setAge(age)
  }
const resultFinish =()=>{
 if(data.result>=-50&&data.result>0){
    console.log("Você tem o perfil de FrontEnd!")
setProfile("Você tem o perfil de FrontEnd!")
  }else if(data.result===-50+50){
    setProfile("Indefinido! Refaça o teste novamente!")
  }else{
    setProfile("Você tem o perfil de BackEnd!")
  }
} 

  return (
    <div className="result">
  <div className="app">
  <Profile />

  <h1>{profileDEV}</h1>
</div>
</div>
    )
}

export default Result;
