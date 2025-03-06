import { createBrowserRouter } from "react-router-dom"
import Browse from "./Browse"
import Login from "./Login"
import EachVideo from "./EachVideo"
import { RouterProvider } from "react-router-dom"




const Body = () => {
// Use your hooks at the top level
// Our body contains our routes and main container

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
      path:"/vid",
      element: <EachVideo/>
    }, 
  ])



  return <div>
    <RouterProvider router={appRouter } />
  </div>
}

export default Body