import './App.css';
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Dashboard from "./components/Dashboard";
import NotFound from "./components/NotFound";
import Navbar from "./components/Navbar";
import ParamComp from "./components/ParamComp";
import Courses from './components/Courses';
import MockTests from './components/MockTests';
import Results from './components/Results';

const router = createBrowserRouter(
  [
    {
      path : "/",
      element : 
        <div>
          <Navbar/>
          <Home/>
        </div>
    },
    {
      path : "/About",
      element : 
       <div>
          <Navbar/> 
          <About/>
          
        </div>
    },
    {
      path : "/Dashboard",
      element :
       <div>
          <Navbar/>
          <Dashboard/>
        
        </div>,

        children:[
        
        {
          path : 'courses',
          element : <Courses/>
        },

        {
          path : 'Mock-tests',
          element : <MockTests/>
        },

        {
          path : 'Results',
          element : <Results/>
        }
        ],
    },

    {
      path : "/students/:id",
      element :
        <div>
          <Navbar/>
            <ParamComp/>
        </div>
    },

    {
      path : '*',
      element : <NotFound/>
    }
  ]
)


function App() {

  return (
    <div>
      <RouterProvider router = {router}/>
    </div>
  )
}

export default App