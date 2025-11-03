import { useState } from 'react'
import './App.css'
import Card from './components/Card'

function App() {

  const [name,setName] = useState('');

  const [name1,setName1] = useState('');

  return(
    <div>
      <Card text="card1" name={name} setName = {setName} ></Card>
      <p>I'm inside part component and val of name is {name}</p>   {/*Children sending info to the Parent */}
      {/* <Card text="card2" name={name} setName = {setName} ></Card> */}

      <Card text="card2" name={name1} setName = {setName1} ></Card>
      <p>I'm inside part component and val of name is {name1}</p> 
    </div>
  )
}

export default App
