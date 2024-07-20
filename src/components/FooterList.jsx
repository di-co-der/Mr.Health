import React from 'react'
import Footer from './Footer'
import footer1 from '../assets/footer1.jpg'
import footer2 from '../assets/footer2.jpg'
import footer3 from '../assets/footer3.jpg'
import footer4 from '../assets/footer4.jpg'
import footer_image from '../assets/footer_image.png'

const cards = [
    {
        image: footer1 ,
        altText: 'footer1',
        title:'ABHA'
    },
    {
        image: footer2 ,
        altText: 'footer2',
        title:"FAQ'S"
    },
    {
        image: footer3 ,
        altText: 'footer3',
        title:'Help'
    },
    {
        image: footer4 ,
        altText: 'footer4',
        title:'About'
    },
]

function FooterList() {
  return (
    <div>
        <div className='flex justify-center items-center p-3 flex-wrap gap-6'>
        {cards.map((card, index) => (
            <Footer key={index} image = {card.image} altText={card.altText} title={card.title}/>
        ))}

    </div>
        <div className='mb-4'>
           <div className='bg-[#0088ff] flex justify-center items-center py-14'>
           <img src={footer_image} alt=""/>
           </div>
        </div>
    </div>
    
  )
}

export default FooterList