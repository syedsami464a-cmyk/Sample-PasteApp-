import React from 'react'
import Button from './Button'

const PlayButton = ({moviename}) => {
    function handlePlayClick(){
        alert(`Playing ${moviename}`)
    }
  return (
    <div>
      <Button onClick={handlePlayClick}>
      Play "{moviename}"
    </Button>
    </div>
  )
}

export default PlayButton
