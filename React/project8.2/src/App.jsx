import Button from './components/Button'
import './App.css'

function App() {


  return (

   <div>
      <form onSubmit={e => {
        // e.preventDefault();
        alert('Submitting..')
      }}>
        <input/>
        <button>Send</button>
      </form>
   </div>

  )
}

export default App


//type-1:

      // <div onClick={() =>{ alert("Toolbar..")}}>

      // <button onClick={() => alert("playing..")}>Btn1</button>

      // <button onClick={() => alert("Uploading..")}>Btn2</button>


// type-2: 

      //  <div onClick={() => {alert("ToolKit!!");}}>

      //     <Button onClick={() => {
      //       alert("Playing.......")
      //     }}>Play Game Mode</Button>

      //      <Button onClick={() => {
      //       alert("Exiting.......")
      //     }}>Exit Mode</Button>
      //     </div>