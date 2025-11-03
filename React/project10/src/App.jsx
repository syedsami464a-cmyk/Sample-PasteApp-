import React, { useState, createContext } from 'react';
import './App.css';
import ChildA from './components/ChildA';

const UserContext = createContext();

function App() {

    const [user , setUser] = useState({name : "Samisyed"}) 

  return (

      <UserContext.Provider value = {user}>
          <ChildA/>
      </UserContext.Provider>

  )
}

export default App

// this is important to export the useContext hook

export {UserContext}