import { createBrowserRouter } from "react-router-dom"
import Browse from "./Browse"
import Login from './Login'
import { RouterProvider } from "react-router-dom"


const Body = () => {
    


    const approuter = createBrowserRouter([
        {
            path: "/",
            element:<Login />
        },{
            path: "/browse",
            element: <Browse />
        },
    ]);
  


  return (
    <div>
        <RouterProvider router={approuter}/>
    </div>
  )
}

export default Body