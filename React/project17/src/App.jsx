// Simply go through the notes then you can understand the concept Clearly ..



import { useState } from 'react'
import './App.css'
import ChildComponent from './components/ChildComponent';
import { useCallback } from 'react';
import ExpensiveComponent from './components/ExpensiveTask';

function App() {
  // const [count , setCount] = useState(0);

  // const handleClick = useCallback(() =>{
  //   setCount(count => count + 1)
  // },[])


  return (
    <div>
      <ExpensiveComponent/>
      {/* <div>
        Count : {count}
      </div>
      <br />
      <div>
        <button onClick={handleClick}>
          Increment
        </button>
      </div>

      <br />

      <div>
        <ChildComponent name = "Click Me"  handleClick = {handleClick}/> */}
      </div>
  )
}

export default App
