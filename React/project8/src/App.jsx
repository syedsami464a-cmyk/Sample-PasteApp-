
import './App.css'

function App() {

  function handleClick(){
    alert("You Clicked on button!!");
  }

  function MouseOver(){
    alert("Your mouse is on paragraph");
  }

  function ChangeInfo(e){
    console.log("You have changed the input as: " + e.target.value);
  }

  function SubmitInfo(e){
    e.preventDefault();
    alert("Submit kardu kya ??")
  }

  return (
    <>  

        {/* 1.onClick */}

        {/* <button onclick={alert("You Clicked on button")}>click</button>  -> unfair of using this*/}
          
          <button onClick={handleClick}>  {/* () => alert("Clicked to button!!") */}
            Click me
          </button>

          {/* 2.onMouseOver */}

          <p onMouseOver={MouseOver} style={{color:'pink' , backgroundColor:'orange'}}>Hello MR welcome to my page!!</p>

          {/* 3.onChange */}

          <input type="text" onChange={ChangeInfo}/>
          <button type="submit" onClick={SubmitInfo}>Submit</button>

    </>
  )
}

export default App
