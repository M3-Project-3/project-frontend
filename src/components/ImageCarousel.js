import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function ImageCarousel({ images }) {
  const settings = {
    infinite: true,
    dots: true,
    slidesToShow: 1,
    arrows: false,
    slidesToScroll: 1,
    lazyLoad: true
  };
  console.log(images);
  return (
    <div>
      <Slider {...settings}>
        {images.map((item, index) => (
            <>
            {console.log(index)}
            <div key={index}>
            <img src={item}  alt="restaurant" />
          </div>
            </>
        ))}
      </Slider>
    </div>
  );
}