import { createBrowserRouter, createHashRouter } from "react-router-dom"
import Browse from "./Browse"
import Login from "./Login"
import EachVideo from "./EachVideo"
import { RouterProvider } from "react-router-dom"
import ErrorPage from "./ErrorPage"
import NoPlay from "./NoPlay"


const Body = () => {


  const appRouter = createHashRouter([
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
    {
      path:"/error",
      element: <ErrorPage/>
    },
    {
      path:"/noPlay",
      element: <NoPlay/>
    }
   
  ])



  return <div>
    <RouterProvider router={appRouter } />
  </div>
}

export default Body