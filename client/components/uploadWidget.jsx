import React from 'react'
import cloudinary from 'cloudinary'

class uploadWidget extends React.Component {
  render () {
    var myWidget = cloudinary.createUploadWidget({
      cloudName: 'takemenz',
      uploadPreset: 'nxxqgset'
    }, (error, result) => {
      if (!error && result && result.event === 'success') {
        console.log('Done! Here is the image info: ', result.info)
      }
    }
    )
    document.getElementById('upload_widget').addEventListener('click', function () {
      myWidget.open()
    }, false)
    return (

      <button id="upload_widget" className="cloudinary-button">Upload files</button>
    )
  }
}

export default uploadWidget
