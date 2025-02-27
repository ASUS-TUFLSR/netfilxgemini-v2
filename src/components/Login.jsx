import { useRef, useState } from "react"
import Header from "./Header"
import {checkValidateData} from '../utils/validate'
import { auth } from "../utils/firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { NET_BACK, PHOTO_URL } from "../utils/constants";


const Login = () => {

  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  
  const dispatch = useDispatch();

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const toggleSignInForm = () => {
      setIsSignInForm(!isSignInForm);
  }

  const handleButtonClick = () => {

    //add name validation
    const message =  checkValidateData(email.current.value, password.current.value);
    setErrorMessage(message);
    if(message) return;

    if(!isSignInForm){
      createUserWithEmailAndPassword(
        auth, 
        email.current.value, 
        password.current.value
      ).then((userCredential) => {
      const user = userCredential.user;
      updateProfile(user, {
       displayName: name.current.value,
        photoURL: PHOTO_URL
      }).then(() => {
       const {
        uid, 
        email,
        displayName, 
        photoURL
      } = auth.currentUser;
        dispatch(addUser(
        { uid: uid, 
          email: email, 
          displayName: displayName, 
          photoURL:photoURL
        }));
       })
       .catch((error) => {
       setErrorMessage(error);
      });
    })
   .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      setErrorMessage(errorCode + "-" + errorMessage);
    });
    }else{
      signInWithEmailAndPassword(
        auth, 
        email.current.value,
        password.current.value)
   .then((userCredential) => {
      const user = userCredential.user;
     })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode + "-" + errorMessage);
  });
    }

  }

  return <div>
    <Header/>
     <div className="absolute" >
       <img src={NET_BACK}
        alt="net-back" />
     </div>

     <form onSubmit={(e) => e.preventDefault()}
       className="absolute w-3/12 p-12 my-36 mx-auto right-0 left-0  w-88 bg-black text-white opacity-80" >

     <h1 className="font-bold text-3xl py-4" >{isSignInForm ? "Sign In" : "Sign Up"}</h1>
      
      { !isSignInForm && <input type="text" ref={name} placeholder="Name" className="p-2 my-2 w-full bg-gray-800" />}

      <input type="text" ref={email} placeholder="Email or mobile number"
       className="p-2 my-2 w-full bg-gray-800" />
       
      
      <input type="password" ref={password} placeholder="Password"
       className="p-2 my-2 w-full bg-gray-800" />
              <p className="text-red-700 font-bold text-xs" >{errorMessage}</p>


 
      <button  onClick={handleButtonClick} 
        className="p-2 my-6 bg-red-700 w-full rounded-xs" >
        {isSignInForm ? "Sign In" : "Sign Up"}
        </button>

      <p className="py-4 cursor-pointer " onClick={toggleSignInForm} >
        {isSignInForm ? "New to Netflix? Sign Up Now" : "Already registered? Sign In Now"}
        </p>
     </form>
  </div>
}

export default Login