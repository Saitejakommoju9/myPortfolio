import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Home from "./components/Home";
import { Children } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Projects from "./components/Projects";

const Layout=()=>{
  return(
    <>
    <Header/>
    <Outlet/>
    </>
  )
}
const route=createBrowserRouter([
    {
      path:"/",
      element:<Layout/>,
  
    children:[
      {
         path:"/",
         element:<Home/>,
      },
      {
        path:"/about",
        element:<About/>

      },
      {
        path:"/Contact",
        element:<Contact/>
      },
      {
        path:"/projects",
        element:<Projects/>

      }
    ]
  },
  ])

const App=()=>{
  
  return(
    <>
   <RouterProvider router={route}>
    <Header/>
    <Outlet/>

   </RouterProvider>
    </>
  )
}
export default App;