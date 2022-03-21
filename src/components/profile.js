import {useEffect, useContext} from 'react';
import GlobalStateContext from "../context/GlobalStateContext";

const Profile = () =>{ 

  const profile = useContext(GlobalStateContext);

useEffect(() => {

    }, [profile]);

      const showProfile = profile&&profile.profile[0]&&profile.profile[0]
      .map((perfil)=>{
        return (
        <div 
        key={perfil[0].name.firts}>
            <img src={`${perfil[0].picture.medium}`} />
            <h1>{`${perfil[0].name.first}`}</h1>
        </div>
        )
      })
  return (
   <div>
     <h3>section profile</h3>
     <h1>{`${profile&&profile.profile[0]&&profile.profile[0].name.first}`}</h1>  
      </div>
  );
}

export default Profile;

