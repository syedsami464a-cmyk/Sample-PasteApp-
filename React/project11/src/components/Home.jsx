import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Home.css'

const Home = () => {
  const navigate = useNavigate();

  function handleClick(){
    navigate('/about');
  }
  return (
    <div className='Home'>
      Home Page
      
      {/* Using Navigate hook */}
      <button onClick={handleClick}>
        Move to About Page
      </button>
    </div>
  )
}

export default Home
