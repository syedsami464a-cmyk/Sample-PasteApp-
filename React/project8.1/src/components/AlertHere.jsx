import React from 'react'

const AlertHere = ({msg,children}) => {
  return (
    <div>
      
        <button onClick={() => alert(msg)}>
            {children}
        </button>

    </div>
  )
}

export default AlertHere
