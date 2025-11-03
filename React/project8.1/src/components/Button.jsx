import React from 'react'

const Button = ({onSmash,children}) => {
  return (
    <div>
      <button onClick={onSmash}>
        {children}
      </button>
    </div>
  )
}

export default Button
