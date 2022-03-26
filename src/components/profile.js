import {useEffect, useContext} from 'react';
import GlobalStateContext from "../context/GlobalStateContext";
import '../styles/styles.scss';


const Profile = () =>{ 

  const {data} = useContext(GlobalStateContext);

const profile=data.profile;
const dataNascimento=data.dataNascimento;
const identificacao=data.identificacao;

useEffect(() => {

    }, [data]);

      const showProfile = profile
      .map((perfil)=>{
        return (
        <div class="box"
        key={perfil.name.firts}>
          <div className='card'>
          <div class="imgBx">
            <img src={`${perfil.picture.large}`} />
            </div>
            <div class="details">

            <h3>{`${perfil.name.first} `}
           {`${perfil.name.last}`}</h3>
           </div>
           </div>
    

        </div>
        )
      })
  return (
<div className='cardProfile'>

{showProfile}
<div className='descricaoProfile'>
<p>{dataNascimento} </p>
<p> - {identificacao}</p>
</div>

</div>
  );
}

export default Profile;

