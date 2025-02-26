import { createBrowserRouter } from "react-router-dom"
import Browse from "./Browse"
import Login from "./Login"
import Account from "./Account"
import { RouterProvider } from "react-router-dom"
import { useEffect } from "react"
import { onAuthStateChanged } from "firebase/auth"
import { auth } from "../utils/firebase"
import { useDispatch } from "react-redux"
import { addUser, removeUser } from "../utils/userSlice"
import Profile from "./Profile"
import Help from "./Help"

const Body = () => {
// Use your hooks at the top level
const dispatch = useDispatch();

  const appRouter = createBrowserRouter([
    {
      path:"/",
      element: <Login/>
    },
    {
      path:"/browse",
      element: <Browse/>
    },
    {
      path:"/account",
      element: <Account/>
    },
    {
      path:"/profile",
      element: <Profile/>
    },
    {
      path:"/help",
      element: <Help/>
    },
    
  ])

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
     if (user) {
     const {uid, email, displayName, photoURL} = user;
     dispatch(addUser({uid: uid, email: email, displayName: displayName, photoURL:photoURL}));
     } else {
      dispatch(removeUser());
     }
   });
  }, [])

  return <div>
    <RouterProvider router={appRouter } />
  </div>
}

export default Body