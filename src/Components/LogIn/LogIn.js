import React, { useContext, useState } from 'react';
import './LogIn.css'
import firebase from "firebase/app";
import "firebase/auth";
import { Button } from 'react-bootstrap';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router';
import HeaderNavbar from '../Home/Header/HeaderNavbar/HeaderNavbar';
import Footer from '../Home/Footer/Footer';
import firebaseConfig from './firebaseConfig'

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
 }else {
    firebase.app();
 }

const LogIn = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const [loginError, setLoginError] = useState(null)
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };
    const [userInfo, setUserInfo] = useState({
        isSignIn: false,
        username: '',
        email:'',
        photo:'',
    })
    const handleGoogleSignIn = () => {
        const GoogleProvider = new firebase.auth.GoogleAuthProvider();
        firebase.auth()
            .signInWithPopup(GoogleProvider)
            .then((result) => {
                const { displayName, email, photoURL } = result.user;
                const userSignIn = {
                    username: displayName,
                    photo: photoURL,
                    email: email,
                    isSignIn: true
                };
                setUserInfo(userSignIn)
                setLoggedInUser(userSignIn)
                history.replace(from)
                // setUserToken()
                // console.log(userSignIn.username);
            }).catch((error) => {
                setLoginError( error.message);
            });
                }     
    // const setUserToken = () => {
    //     firebase.auth().currentUser.getIdToken(/* forceRefresh */ true).then(function(idToken) {
    //         sessionStorage.setItem('token', idToken)
    //       }).catch(function(error) {
    //         // Handle error
    //       });
    // }
    return (
      <main>
          <HeaderNavbar/>
            <div className="main-container">
            <div className="card-container">
        <div className="single-card">
            <div className="face face1">
                <div className="content">
                    <img src="http://pngimg.com/uploads/google/google_PNG19630.png" alt='..'/>
                    <h3>LogIn With Google</h3>
                </div>
            </div>
            <div className="face face2">
                <div className="content">
                <Button onClick={handleGoogleSignIn} variant="danger"><img src="http://pngimg.com/uploads/google/google_PNG19630.png" width='30px' alt='..'/> Login</Button>
                </div>
            </div>
        </div>
    </div>
        </div>
        {
            loginError && <p className='text-center text-danger'>{loginError}</p>
        }
        <Footer/>
      </main>
    );
};

export default LogIn;