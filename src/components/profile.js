import {useState, useEffect, useContext} from 'react';
import axios from 'axios';
import GlobalStateContext from "../context/GlobalStateContext";

const Profile = () =>{ 
const setProfile = useContext(GlobalStateContext);
const profile = useContext(GlobalStateContext)
useEffect(() => {
    getProfile();
  }, []);

  const getProfile = async () => {
    try {
    const response = await axios.get(`https://randomuser.me/api/`)
    setProfile(response.data.results)
    alert("Pegamos os dados")
   }
   catch (error) {
       alert("Algo deu errado, tente novamente mais tarde")
   }
}
  return (
   <div>
 
<h1>{`${profile[0].name.first}`}</h1>

<img src={`${profile[0].picture.medium}`} />

   </div>
  );
}

export default Profile;

