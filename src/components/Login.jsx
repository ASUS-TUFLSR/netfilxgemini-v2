import { useRef, useState } from "react"
import Header from "./Header"
import {checkValidateData} from '../utils/validate'
import { auth } from "../utils/firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";


const Login = () => {

  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate();
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
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
     .then((userCredential) => {
      const user = userCredential.user;
      updateProfile(user, {
       displayName: name.current.value, photoURL: "https://avatars.githubusercontent.com/u/130681653?v=4"
       })
       .then(() => {
       const {uid, email, displayName, photoURL} = auth.currentUser;
       dispatch(addUser(
        { uid: uid, 
          email: email, 
          displayName: displayName, 
          photoURL:photoURL
        }));
        navigate('/browse');

       })
       .catch((error) => {
       setErrorMessage(error);
      });
      navigate('/browse');
      console.log(user)

    })
   .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      setErrorMessage(errorCode + "-" + errorMessage);
    });

    }else{
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
   .then((userCredential) => {
      const user = userCredential.user;
      navigate('/browse');
      console.log(user)
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
       <img src="https://assets.nflxext.com/ffe/siteui/vlv3/0cf2c109-3af1-4a9d-87d7-aecfac5fe881/web/IN-en-20250217-TRIFECTA-perspective_c3376e06-9aff-4657-aafb-91256a597b7c_large.jpg" 
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