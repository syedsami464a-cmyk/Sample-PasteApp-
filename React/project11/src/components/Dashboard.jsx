import React from 'react'
import { useNavigate , Outlet} from 'react-router-dom'
import './Dashboard.css'

const Dashboard = () => {

  const navigate = useNavigate();

  function handleClick(){
    navigate('/')
  }

  return (
    <div className='Dashboard'>
      Dashboard Page

      {/* Using Navigate hook */}
      <button onClick={handleClick}>
        Move to Home Page
      </button>

      <Outlet/>

    </div>
  )
}

export default Dashboard
