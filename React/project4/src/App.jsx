import './App.css'
// import Card from './components/Card'
import Button from './components/Button'
import { useState } from 'react'

function App() {

  const [count,setCount] = useState(0);

  function incrementCounter(){
    setCount(count+1);
  }

  return (
    <div>
    
    <Button text="click me" incrementCounter={incrementCounter}>
      <h1>{count}</h1>
    </Button>

    </div>
  )
}

export default App


 {/* <Card name="Samisyed">
        <h1>Best person in this World</h1>
        <p>Lorem ipsum dolor sit amet.</p>
        <p>Lorem ipsum dolor sit amet consectetur.</p>
      </Card>
      <Card children="This is a children">
        Here it is a children named card
      </Card>  -> inside the div tag  */}