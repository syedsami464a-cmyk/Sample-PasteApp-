import React from 'react'

const ChildComponent =React.memo((props) => {
    console.log('Mein Phir se Render huwa hoon')
  return (
    <div>
        <button onClick={props.handleClick}>
            {props.name}
        </button>
    </div>
  )
}
)

export default ChildComponent
