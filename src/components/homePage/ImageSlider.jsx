import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import image1 from '../../assets/banner1.png'; 
import image2 from '../../assets/banner2.png';
// import image3 from '../../assets/banner3.png';
import image4 from '../../assets/banner4.png';
import image5 from '../../assets/banner5.png';

const images = [image1, image2, image4, image5];

const ImageSlider = () => {
  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2400,
    centerMode: true,
    centerPadding: '5%',
    // beforeChange: (current, next) => console.log("before change", current, next),
    // afterChange: current => console.log("after change", current)
  };

  return (
    <div className="w-full pb-2 pt-[14px] mt-1 border-y-4 border-y-zinc-300">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className='outline-none px-2'>
            <img src={image} alt={`Slide ${index}`} className="h-44 w-full rounded-xl" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageSlider;
