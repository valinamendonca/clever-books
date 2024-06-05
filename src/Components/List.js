import React from 'react';
import Slider from 'react-slick';

const items = [
  { src: 'https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/64385aabb032484e3993df3d_wow.svg', alt: 'Image 1' },
  { src: 'https://via.placeholder.com/150', alt: 'Image 2' },
  { src: 'https://via.placeholder.com/150', alt: 'Image 3' },
  { src: 'https://via.placeholder.com/150', alt: 'Image 4' },
  { src: 'https://via.placeholder.com/150', alt: 'Image 5' }
]; // Replace with your actual image URLs

function List() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div style={{display: 'flex', justifyContent: 'center'}}>
      <Slider {...settings}>
        {items.map((item, index) => (
          <div key={index} style={{minWidth: '50px', padding: '10px', border: '1px solid black', marginRight: '10px', height: "100px"}}>
            <img src={item.src} alt={item.alt} style={{width: '50px'}} />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default List;
