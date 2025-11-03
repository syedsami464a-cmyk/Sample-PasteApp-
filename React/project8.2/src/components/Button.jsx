import React from 'react'

const Button = ({onClick,children}) => {
  return (
    <div>
      <button onClick={e => {
        e.stopPropagation();
        onClick();
      }}>
        {children}
      </button>
    </div>
  )
}

export default Button
