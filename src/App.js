import './App.css';
import logo from "./assets/img/p.png";
import {firebase, auth} from "./services/firebase";
import {useState, useEffect} from "react";
import useAuth from './hooks/useAuth';


export default function App() {
  const {user, setUser} = useAuth;
  console.log(user);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if(user){
        const { uid, displayName, photoURL } = user;

        if (!displayName || !photoURL)
          throw new Error("The user don't have displayName or photoURL");

        setUser({
          id: uid,
          avatar: photoURL,
          name: displayName,
        });
        
      }
    });
  },[]);

  const handleClickButtonLogin = async () => {
    
    const provider = new firebase.auth.GoogleAuthProvider();

    const result = await auth.signInWithPopup(provider);
    
    if(result.user){
      const { uid, displayName, photoURL} = result.user;

      if(!displayName || !photoURL) throw new Error("The user don't have displayName or photoURL")
    
    setUser({
      
      id: uid,
      avatar: photoURL,
      name: displayName,
    });
    }
  };

  return ( 
    <div id="app">
    <aside>
      <img src= {logo} alt= "logo" />
    </aside>
    <main>
      <button  onClick={handleClickButtonLogin}>Login Google</button>
    </main>
    </div>
  );
}