import { useState } from 'react'
import './App.css'
import Card from './components/LogInBtn'
import LogInBtn from './components/LogInBtn'
import LogOutBtn from './components/LogOutBtn'

function App() {
  //login and logout 

  const [isloggedIn,setLoggedIn] = useState(true);

// Early return

if (!isloggedIn){
  return(
      <LogInBtn/>
  )
}

return(
    <div> 
        <h1>Welcome Here</h1>

        <div>{isloggedIn&&<LogOutBtn/>}</div>

    </div>
  )



//logical operator

  // return(
  //   <div> 
  //       <h1>Welcome Here</h1>

  //       <div>{isloggedIn&&<LogOutBtn/>}</div>

  //   </div>
  // )


// ternary opearator

  // return (
  //   <div>
  //     {isloggedIn ? <LogOutBtn/> : <LogInBtn/>}
  //   </div>
  // )


// if-else

    // if (isloggedIn){
    //   return(
    //     <LogOutBtn/>
    //   )
    // }
    // else{
    //   return(
    //     <LogInBtn/>
    //   )
    // }

}

export default App
