import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Paste from './components/Paste'
import ViewPaste from './components/ViewPaste'

function App() {

  // array of routes ([ {}, {},.... ])
  const router = createBrowserRouter(
    [
      // Route 1
      {
        path : "/",
        element:
        <div>
          <Navbar/>
          <Home/>
        </div>
      },
       // Route 2
      {
        path : "/pastes",
        element:
        <div>
          <Navbar/>
          <Paste/>
        </div>
      },
       // Route 3
      {
        path : "/pastes/:id",
        element:
        <div>
          <Navbar/>
          <ViewPaste/>
        </div>
      }
    ]
  )



  return (
    <div>
      <RouterProvider router = {router}/>
    </div>
  )
}

export default App

