import React from 'react'
import { useNavigate } from 'react-router-dom'
import './About.css'

const About = () => {
  const navigate = useNavigate();

  function handleClick(){
    navigate('/Dashboard')
  }

  return (
    <div  className='About'>
      About Page

      {/* Using Navigate hook */}
      <button onClick={handleClick}>
        Move to Dashboard Page
      </button>

    </div>
  )
}

export default About
