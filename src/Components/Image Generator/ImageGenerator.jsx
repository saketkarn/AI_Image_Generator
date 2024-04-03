import React, { useRef, useState } from 'react'
import './ImageGenerator.css'
import default_image from '../../../src/assets/default_image.svg'
const ImageGenerator = () => {

    const [image_url, setImage_url]=useState("/");
    let inputRef = useRef(null)

    const imageGenerator = async()=>{
        if(inputRef.current.value==="")
            return 0;
        const response = await fetch(
            
        )
    }

  return (
    <div className='ai-image-generator'>
      <div className='header'>AI Image <span>Generator</span></div>
      <div className='img-loading'>
        <div className='image'> <img src={image_url==="/"?default_image:image_url}/></div>
      </div>
      <div className='search-box'>
        <input type='text' ref={inputRef} className='search-input' placeholder='Describe what you want to see'/>
        <div className='generate-btn'>Generate</div>
      </div>
    </div>
  )
}

export default ImageGenerator
