import React, { useState } from 'react'

// children is built-in is like props
const Panel = ({title,children}) => {          //  {/* isActive={true} -> parameter is added*/}
  const [isActive,setIsActive] = useState(false)  // remove this if you add isActive={true} parameter
  return (
    <div>
      {/* {props  .children} */}

      <div>
        <h3>{title}</h3>

      {isActive ? (<p>{children}</p>) : (<button onClick={() =>{setIsActive(true) }}>
         Show
      </button> )}

      </div>
      

    </div>
  )
}

export default Panel
