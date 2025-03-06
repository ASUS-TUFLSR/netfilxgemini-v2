import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import net from "../assets/netflix.png";
import { toggleGeminiSearchView } from "../utils/geminiSearchSlice";
import { SUPPORTED_LANG } from "../utils/constants";
import { changeLanguage } from "../utils/configSlice";


const Header = () => {
   
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector(store => store.user);
  const geminiShowValue = useSelector((store) => store.gemini.showGeminiSearch); 
  // we are accessing the showgpt component value

  const handleSignOut = () => {

    signOut(auth).then(() => {})
    .catch((error) => {
    navigate("/error")
   
   });
  }


  const handleGptSearchClick = () => {
       dispatch(toggleGeminiSearchView());
  }
  
  const handleLangChange = (e) => {
        dispatch(changeLanguage(e.target.value))
  }

    useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
     if (user) {
     const {uid, email, displayName, photoURL} = user;
     dispatch(addUser({uid: uid, email: email, displayName: displayName, photoURL:photoURL}));
     navigate('/browse');
     } else {
      dispatch(removeUser());
      navigate('/');
     }
   });
   // Unsubscribe when component unmounts
   return () => unsubscribe();
  }, [])

  return (
  <div 
  className="absolute w-full px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between" >
   <img className="w-44"
   src={net} 
 alt="logo"/>

 { user && (

  <div className="flex p-2" >

   { geminiShowValue && (<select className="px-2 m-2 bg-gray-900 text-white rounded-xs" onChange={handleLangChange}  >
      {SUPPORTED_LANG.map(lang => <option key={lang.identifier} value={lang.identifier}>{lang.name}</option>)}
      </select>)
      }

    <button className="py-2 px-4 m-2 text-white bg-transparent cursor-pointer" 
     onClick={handleGptSearchClick}
    >
     {geminiShowValue ? "Home-Page" : "Gemini-Search"}
    </button> 

    <img  className="w-12 h-12" src={user?.photoURL} alt="usericon"/>
    <button onClick={handleSignOut} className="font-bold text-white" >SignOut</button>
   </div>
  )}
  </div>
  )

}

export default Header