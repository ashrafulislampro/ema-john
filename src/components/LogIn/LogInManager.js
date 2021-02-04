import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./firebase.config";


  export const initializeFirebaseLogInWithFrameWork = () =>{
          if(firebase.apps.length === 0){
                    firebase.initializeApp(firebaseConfig);
              }
       }
  export const handleGoogleSignIn = () => {
          const googleProvider = new firebase.auth.GoogleAuthProvider();
          return firebase.auth().signInWithPopup(googleProvider)
          .then(res => {
            // console.log(res);
            const {email,photoURL,displayName} = res.user;
            
            const isSignedIn = {
              isSignedIn : true,
              displayName : displayName,
              photoURL : photoURL,
              email : email,
              success : true
            }
            return isSignedIn;
           
          })
         
          
        }
  export const handleGoogleSignOut = () => {
          return firebase.auth().signOut()
          .then(res => {
            
            const isSignOut = {
              isSignedIn : '',
              email : '',
              photoURL: '',
              displayName : '',
              error : '',
              success : false
            }
            return isSignOut;
          }).catch((error) => {
            const errorCode = error.code;
          })
         
        }
  export const handleFbSignIn = () => {
          const fbProvider = new firebase.auth.FacebookAuthProvider();
          return firebase
          .auth()
          .signInWithPopup(fbProvider)
          .then(res => {
            const {email,photoURL,displayName} = res.user;
            
            const isSignedIn = {
              isSignedIn : true,
              displayName : displayName,
              photoURL : photoURL,
              email : email,
              success : true
            }
            return isSignedIn;
        
          })
          .catch( error => {
           
           
          });
        }
        export const createUserWithEmailAndPassword = (displayName, email, password) => {
           return firebase.auth().createUserWithEmailAndPassword(email, password)
          .then(res => {
             const newUserInfo = res.user;
             newUserInfo.error = '';
             newUserInfo.success = true;
             updateUserName(displayName);
             return newUserInfo;
          })
          .catch((error) => {
            const newUserInfo = {};
            newUserInfo.error = error.message;
            newUserInfo.success = false;
            return newUserInfo;
          });
        }

        export const signInWithEmailAndPassword = (email, password) => {
           return firebase.auth().signInWithEmailAndPassword(email, password)
          .then(res => {
            // Signed in
            const newUserInfo = res.user;
            newUserInfo.error = '';
            newUserInfo.success = true;
            return newUserInfo;
          })
          .catch((error) => {
            const newUserInfo = {};
            newUserInfo.error = error.message;
            newUserInfo.success = false;
            return newUserInfo;
          });
        
        }
        const updateUserName = displayName => {
          const user = firebase.auth().currentUser;
      
          user.updateProfile({
            displayName: displayName
          }).then(function() {
           console.log("user name updated successfully")
          }).catch(function(error) {
           console.log(error);
          });
        }