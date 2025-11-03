import { useEffect, useState } from 'react'
import './App.css'

function App() {

  const[count,setCount] = useState(0);
  // for variation:4 this below line is used
  const[total,setTotal] = useState(1);


  // Variation:1 

  // initially 2 alerts and for every time when it renders it'll give alert continuously......


  // useEffect(() =>{
  //   alert("This is a alert msg!!")
  // })

  // function handleClick(){
  //   setCount(c => c+1);
  // }

  // Variation:2

  // two times getting alert means once 0 is initialzed for that one and for by default ness it will get one alert
  // total of 2 alert will appear at start and then nothing alert will appears..
  
  // useEffect(()=>{
  //   alert("This is a alert Msg for You!!")
  // },[])


  //Variation:3

  // useEffect(() => {
  //   alert("This will give alert when tap on the button!!")
  // } , [count])

  //Variation:4 
    //MutilpleDependencies

  //Variation:5
    //Clean-up Statement is used -> second type in syntax

    // useEffect(() =>{
    //   alert("This will get when changes occurs in count/total");

    //   return()=>{
    //     alert("Count is mounted from UI")
    //   }

    // },[count,total])

  function handleClick(){
  setCount(c => c+1);  // or count+1
  }

  
  function handleClickTotal(){
  setTotal(c => c+1);  // or total+1
  }

  return (
    <div>
      <button onClick={handleClick}>
        Update Count
      </button>
      <br />
      Count is {count}

      <br />

      <button onClick={handleClickTotal}>
        Update Total
      </button>
      <br />
      Count is {total}
    </div>

    
  )
}

export default App
