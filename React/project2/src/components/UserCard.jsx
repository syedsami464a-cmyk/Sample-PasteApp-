import React from 'react'
import './UserCard.css' // we need to import this to get styling into access

const UserCard = (props) => { // props is used here
  return (
    <div className='user-container' style={props.style}>
      <p id='user-name'>{props.name}</p>
      <img id='user-img' src={props.image} alt={props.name}/>
      <p id='user-desc'>{props.desc}</p>
    </div>
  )
}

export default UserCard
