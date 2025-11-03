import React, { useEffect, useState } from 'react'

const MultiEffectComponent = () => {

    const [count,setCount] = useState(0)
    const [seconds,setSeconds] = useState(0);

    useEffect(() =>{
        console.log(" count changed : ",count)
    },[count])

    useEffect(() =>{
        const timeInterval = setInterval(() =>{
            console.log("Count at: ")
            setSeconds(prevseconds => prevseconds + 1)
        },1000);

        return () => {console.log("Time Stopped!") 
            clearInterval(timeInterval)}
    },[])


  return (
    <div>
      <h1>Count : {count}</h1>

      <button onClick={() => setCount(count+1)}>Increment Count</button>
    
      <h2>Seconds : {seconds}</h2>

    </div>
  )
}

export default MultiEffectComponent
