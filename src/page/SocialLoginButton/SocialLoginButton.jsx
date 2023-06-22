import React, { useContext } from 'react';
import google from './../../assets/img/google-btn.png';
import github from './../../assets/img/github-btn.png';
import { useState } from "react";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  GithubAuthProvider,
} from "firebase/auth";
import app from '../../firebase/firebase.config';


const SocialLoginButton = () => {
    const [user, setUser] = useState({});
    const auth = getAuth(app);
     const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
   
    const handleGoogleLogin = (event) => {
        event.preventDefault();
        
         signInWithPopup(auth, googleProvider)
        
          .then((result) => {
            const user = result.user;
            setUser(user);
            console.log(user);
          })
          .catch((error) => {
            const errorMessage = error.message;
            console.log(errorMessage);
          });
      };

      const handleGithubLogin = () => {
        signInWithPopup(auth, githubProvider)
          .then((result) => {
            const user = result.user;
            console.log(user);
          })
          .catch((error) => {
            const errorMessage = error.message;
          });
      };
    return (
        <div className='text-center'>
           <div className=" social-button-container w-50 mt-3">
      <div className="">
        <img
          onClick={handleGoogleLogin}
          style={{width:'210px', marginTop: '10px', cursor:'pointer'}}
         src={google}
          alt=""
        />
      </div>
      <div className="">
        <img
          onClick={handleGithubLogin}
          style={{width:'210px', marginTop: '10px', cursor:'pointer'}}
          src={github}
          alt=""
        />
      </div>
    </div> 
        </div>
    );
};

export default SocialLoginButton;