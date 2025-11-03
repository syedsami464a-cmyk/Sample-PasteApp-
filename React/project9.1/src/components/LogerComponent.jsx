import React, { useEffect, useState } from 'react'

const LogerComponent = () => {
    const [count,setCount] = useState(0);

    useEffect(() =>{
      alert("The button is clicked!!")

      return ()=>{
        alert("Button is unmounted")
      }
    },[count])

    function handleClick(){
        setCount(c=>c+1)
    }
  return (
    <div>
      <button onClick={handleClick}>
        Click me
      </button>


      Count is {count}
    </div>
  )
}

export default LogerComponent
