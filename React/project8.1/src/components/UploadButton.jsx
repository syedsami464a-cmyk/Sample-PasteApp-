import React from 'react'
import Button from './Button'

const UploadButton = () => {
  return (
    <div>
      <Button onClick={() => {
        alert("Uploading..")
      }}>
        Upload Image
      </Button>
    </div>
  )
}

export default UploadButton
