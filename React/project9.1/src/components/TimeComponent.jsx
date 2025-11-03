import React, { useEffect, useState } from 'react'

const TimeComponent = () => {
    
    const[seconds,setSeconds] = useState(0)

    useEffect(()=>{
        const sec = setInterval(() =>{
            setSeconds(prevSeconds => prevSeconds + 1)
        },1000)

        return () => (
            clearInterval(sec)
        )
    },[])

  return (
    <div>
        <h1> Seconds : {seconds} </h1>
    </div>
  )
}

export default TimeComponent
