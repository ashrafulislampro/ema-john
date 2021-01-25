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
              displayName: '',
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
          .then((result) => {
            /** @type {firebase.auth.OAuthCredential} */
            var credential = result.credential;
      
            // The signed-in user info.
            var user = result.user;
            user.success = true;
            return user;
            // This gives you a Facebook Access Token. You can use it to access the Facebook API.
            var accessToken = credential.accessToken;
            
            // ...
          })
          .catch((error) => {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
      
            // ...
          });
        }
        export const createUserWithEmailAndPassword = (name, email, password) => {
           return firebase.auth().createUserWithEmailAndPassword(email, password)
          .then(res => {
             const newUserInfo = res.user;
             newUserInfo.error = '';
             newUserInfo.success = true;
             updateUserName(name);
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
        const updateUserName = name => {
          const user = firebase.auth().currentUser;
      
          user.updateProfile({
            displayName: name
          }).then(function() {
           console.log("user name updated successfully")
          }).catch(function(error) {
           console.log(error);
          });
        }