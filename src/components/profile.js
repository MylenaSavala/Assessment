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
        <div 
        key={perfil.name.firts}>
          <div className='iconProfile'>
            <img src={`${perfil.picture.medium}`} />
            <h3>{`${perfil.name.first} `}
           {`${perfil.name.last}`}</h3>
           </div>
           <div className='iconProfile'>
           <h5> {dataNascimento}</h5>
            <h5> {identificacao}</h5>
           </div>
           


        </div>
        )
      })
  return (
   <div className='ContainerProfile'>
  {showProfile}
      </div>
  );
}

export default Profile;

