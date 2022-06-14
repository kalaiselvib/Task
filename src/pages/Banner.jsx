import React , {useState} from 'react'
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';
function Banner() {
    const bannerImages = [
        {
          slogan: "Your Slogan Will be Here",
          text : "Sample text will be in this section",
          imgPath:"Banner.png",
          btnText : "Order Now"
        },
        {
          slogan: "Your Slogan Will be Here",
          text : "Sample text will be in this section",
          imgPath:"Banner.png",
         btnText : "Order Now"
        },
        {
          slogan: "Your Slogan Will be Here",
          text : "Sample text will be in this section",
          imgPath:"Banner.png",
          btnText : "Order Now"
        },
      ];
      const [current, setCurrent] = useState(0);
      const length = bannerImages.length;
    
      const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
      };
    
      const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
      };
    
      if (!Array.isArray(bannerImages) || bannerImages.length <= 0) {
        return null;
      }
  return (
    <section className='slider'>
    <BsArrowLeft className='arrow left-arrow' onClick={prevSlide} />
    <BsArrowRight className='arrow  right-arrow' onClick={nextSlide} />
    {bannerImages.map((slide, index) => {
      return (
        <div
          className={index === current ? 'slide active' : 'slide'}
          key={index}
        >
          {index === current && (
            <img  src={require(`../assets/images/${slide.imgPath}`)} alt='travel image' className='image' />
          )}
           
        </div>
      );
    })}
  </section>
  )
}

export default Banner