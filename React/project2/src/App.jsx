import UserCard from "./components/UserCard"
import samipic from './assets/samipic.jpg'
import reactpic from './assets/react.svg'
import './App.css'

function App() {
  return (
    <div className="container">
      <UserCard name="Samisyed" desc="Description-1" image={samipic} style={{"border-radius":"10px"}}/>
      <UserCard name="Saifsyed" desc="Description-2" image={samipic} style={{"border-radius":"10px"}}/>
      <UserCard name="X syed" desc="Description-3" image={reactpic} style={{"border-radius":"10px"}}/>
      <UserCard name="X syed" desc="Description-3" image={reactpic} style={{"border-radius":"10px"}}/>
      <UserCard name="X syed" desc="Description-3" image={reactpic} style={{"border-radius":"10px"}}/>
      <UserCard name="X syed" desc="Description-3" image={reactpic} style={{"border-radius":"10px"}}/>
      <UserCard name="X syed" desc="Description-3" image={reactpic} style={{"border-radius":"10px"}}/>
      <UserCard name="X syed" desc="Description-3" image={reactpic} style={{"border-radius":"10px"}}/>
      <UserCard name="Samisyed" desc="Description-1" image={samipic} style={{"border-radius":"10px"}}/>
      <UserCard name="Saifsyed" desc="Description-2" image={samipic} style={{"border-radius":"10px"}}/>
    </div>
  )
}

export default App
