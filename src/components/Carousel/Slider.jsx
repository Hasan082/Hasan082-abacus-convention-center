import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import './slider.css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { useEffect, useState } from 'react';

const Slider = () => {
  const [sliderData, setSliderData] = useState([]);

  useEffect(() => {
    fetch('/slider.json')
      .then(res => res.json())
      .then(data => setSliderData(data));
  }, []);

  return (
    <Swiper
    //   spaceBetween={0}
      centeredSlides={true}
      loop={true}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper"
    >
      {sliderData.map((singleData, index) => (
        <SwiperSlide key={index}>
          <div
            className='imagebg bg-cover bg-center h-[calc(100vh-108px)] flex items-center justify-center bg-opacity-50 bg-black bg-blend-overlay'
            style={{
              backgroundImage: `url(${singleData.image})`,
            }}
          >
            <div className='Slider-inner-wrap text-white text-center space-y-4 max-w-3xl px-10'>
              <h2>{singleData?.title}</h2>
              <p>{singleData?.description}</p>
              <a href="#" className='btn'>
                Book Now
              </a>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;
