import React from 'react'

function Footer({image, altText, title}) {
  return (
          <div>
            <div>
                <img src={image} alt={altText} />
                <div className='text-center text-sm pt-1'>{title}</div>
            </div>
          </div>

  )
}

export default Footer