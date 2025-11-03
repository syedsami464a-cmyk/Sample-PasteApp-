
import { useMemo, useState } from 'react'
import './App.css'
import { useEffect } from 'react';

function App() {
  const [count , setCount] = useState(0);
  const [input , setInput] = useState(0);
  
  let doubleVal =  useMemo(() => expensiveTask(input),[input])


  function expensiveTask(num){
    for(let i = 0; i <= 1000000000; i++) {}
    return num*num
  }

  function handleClick(){
    setCount(count => count + 1)
  }

  useEffect (()=>{
    console.log("Mein Render huwa hoon")
  })

  return (
    <div>
      Count : {count}
    <br /><br />
    <button onClick={handleClick}>
    Increment
    </button>

    <br /><br />

    <input 
    type="number"
    value = {input} 
    placeholder='Enter number'
    onChange={(e) =>{
      setInput(e.target.value)
    }}
    />

    <div>
      double Value : {doubleVal}
    </div>

    </div>
  )
}

export default App
