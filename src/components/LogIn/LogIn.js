import { createUserWithEmailAndPassword, handleFbSignIn, handleGoogleSignIn, handleGoogleSignOut, initializeFirebaseLogInWithFrameWork, signInWithEmailAndPassword } from "./LogInManager";
import { useContext, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { UserContext } from "../../App";


function LogIn() {
  const [newUser, setNewUser] = useState(false);
  const [user, setUser] = useState({
    isSignedIn: false,
    displayName :'',
    photoURL: '',
    email: '',
    password: ''
  })

  initializeFirebaseLogInWithFrameWork();
 
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const history = useHistory();
  const location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };
  // console.log(user)
  
  const googleSignIn = () => {
    handleGoogleSignIn()
    .then((res) =>{
     handleResponse(res, true);
    })
  }

  const googleSignOut = () => {
    handleGoogleSignOut()
    .then((res) =>{
      handleResponse(res, false);
    })
  }
  const fbSignIn = () => {
    handleFbSignIn()
    .then((res) =>{
      handleResponse(res, true);
    })
  }
  const handleResponse= (res , redirect) => {
    setUser(res);
    setLoggedInUser(res);
    if(redirect){
      history.replace(from);
    }
  }

  const handleBlur = (e) => {
    
    let isFieldValid = true;
    if(e.target.name === 'email'){
      isFieldValid = /\S+@\S+\.\S+/.test(e.target.value);
      
    }
    if(e.target.name === 'password'){
      
      isFieldValid = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(e.target.value);
       
    }
    if(isFieldValid){
      const newUserInfo = {...user};
      newUserInfo[e.target.name] = e.target.value;
      setUser(newUserInfo);
    }
  }
  const handleSubmit = (e) => {
     
      if(newUser && user.email && user.password){
         createUserWithEmailAndPassword(user.name, user.email, user.password)
         .then((res) => {
          handleResponse(res, true);
         })
      }
      if(!newUser && user.email && user.password){
         signInWithEmailAndPassword(user.email, user.password)
         .then((res) => {
          handleResponse(res, true); 
           
         })
      }
      e.preventDefault();
  }
  
 
 
  
  return (
    <div style={{textAlign: 'center'}}>
       
      { 
        user.isSignedIn ? <button onClick={googleSignOut}>Sign out</button> :
        <button onClick={googleSignIn}>Sign in</button>
      }
      <br/>
      <button onClick={fbSignIn}>Sign in using Facebook</button>
      {
        user.isSignedIn && 
        <div>
          <p>Welcome, {user.displayName}</p>
          <p>Email : {user.email}</p>
          <img src={user.photoURL} alt=""/>
        </div>
      }
      <h1>Our Own Authentication</h1>
      <input type="checkbox" onChange={ () => setNewUser(!newUser)} name="newUser" id=""/>
      <label htmlFor="newUser">New User Sign Up</label>
      <form onSubmit={handleSubmit}>
      {newUser && <input type="text" name="name" onBlur={handleBlur} placeholder="Your name"  required/>}
        <br/>
        <input type="text" name="email" onBlur={handleBlur} placeholder="Enter Your Email" required/>
        <br/>
        <input type="password" name="password" onBlur={handleBlur}  placeholder="Enter Your Password" required/>
        <br/>
        <input type="submit" value={newUser ? "Sign up" : "Sign in"}/>
       
      </form>
      <p style={{color: 'red'}}>{user.error}</p>
      {user.success &&  <p style={{color: 'green'}}>User {newUser ? "Created " : "logged in"} successfully</p>}
      
    </div>
  );
}

export default LogIn;
