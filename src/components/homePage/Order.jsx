import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//assets
import orderIcon from "../../assets/svgs/orderIcon.svg";

//components 
import OfferProducts from './OfferProducts';

//data
import offerProducts from "../../data/offerProducts";

function Order() {
    const sliderSettings = {
        infinite: true,
        slidesToShow: 2,  // Show two slides at a time
        slidesToScroll: 1,  // Scroll one slide at a time
        autoplay: true,
        autoplaySpeed: 2000,  // Set a reasonable speed for autoplay
        centerMode: true,
        centerPadding: '10%',  // Add padding for better centering
        pauseOnHover: true,  // Optional: pause autoplay on hover
        adaptiveHeight: true,  // Adjust the height of slides based on content
    };
  return (
    <div>

    {/* Heading */}
    <div className=""></div>
  <div className=" flex justify-center items-start pt-6 gap-3 px-4 pb-5">
    <img
      src={orderIcon}
      alt="cal" className=""/>
    <div className="">
      <div className="font-bold text-2xl leading-none pb-1.5 pt-[3px]">
        Order Your Smart Health
      </div>

      <div className=" ">
        Schedule your health products for better health</div>
    </div>
  </div>

  <Slider {...sliderSettings}>
          {offerProducts.map((product) => (
            <OfferProducts key={product.id} product={product} />
          ))}
        </Slider>


{/* button */}
<div className="flex justify-center border-b-4 py-[20px]">
  <div className="px-32 rounded-md bg-[#ccf5f5] cursor-pointer hover:outline outline-1 transition-all py-3">
    <p className="text-md">View All</p>
  </div>
</div>
</div>
  )
}

export default Order