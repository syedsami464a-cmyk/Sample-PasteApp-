
import { useEffect, useState ,useRef} from 'react'
import './App.css'

function App() {
  const [count,setCount] = useState(0);

  // let val = 1; -> Making initialization like this and incrementing function means doesn't effect it still getting 1 value added to val which is 2 
  // In every re-render the val is 1 and getting added by 1 and continues in every re-render (the val is always 2 only)....


  // Using of useRef() hook we can make sense
  // UseRef -> having capability that value persists in every re-render and 
  //        -> We can access any element in Virtual DOM through Reference

  let val = useRef(0);

  // Showing that how can we access Virtual DOM Elements
  let btnRef = useRef();  // Creating the Button


  function handleIncrement(){
    val.current = val.current + 1     // useRef's object can be increment/decrement, through  ''.current'' only
    console.log("Value of val :" , val.current);
    setCount(count => count + 1);
  }



  function changeColor(){
    btnRef.current.style.backgroundColor = "Red"
  }




  // useEffect is using now -> renders for every re-renders
  useEffect (() =>{
    // alert("Mein Phir se Render huya hoon") -> use this for better Understanding..
    console.log("Mein Phir se Render huya hoon");
  })


  return (
    <div>
      <button 
      onClick={handleIncrement}
      ref={btnRef} // linking the button Reference (btnRef) using of ref = {}
      >
        Increment
      </button>
      <br />
      <div>
        {count}
      </div>
    <br />
    <br />
    <button onClick={changeColor}>Change color of 1st button</button>
    </div>
  )
}

export default App
