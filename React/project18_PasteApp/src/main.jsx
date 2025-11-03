// import { StrictMode } from "react";
// import { createRoot } from "react-dom/client";
// import App from "./App.jsx";
// import "./index.css";
// import { Provider } from "react-redux";
// import { store } from "./store.js";
// import { Toaster } from 'react-hot-toast';

// createRoot(document.getElementById("root")).render(
//   <StrictMode>
//     <Provider store={store}>
//       <div className="min-h-screen w-screen overflow-hidden">
//         <App />
//         <Toaster position="top-right"/>
//       </div>
//     </Provider>
//   </StrictMode>
// );




import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import store from './store.js'
import { Provider } from 'react-redux'
import {Toaster} from 'react-hot-toast'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store = {store}>
      <App />
      <Toaster/>
    </Provider>
  </StrictMode>,
)
