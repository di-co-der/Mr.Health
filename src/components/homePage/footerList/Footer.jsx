import React from 'react'

function Footer({image, altText, title}) {
  return (
          <div>
            <div>
                <img src={image} alt={altText} />
                <div className='text-center font-[lato] font-medium text-[14px] leading-[16.82px] tracking-tight p-2 '>{title}</div>
            </div>
          </div>

  )
}

export default Footer