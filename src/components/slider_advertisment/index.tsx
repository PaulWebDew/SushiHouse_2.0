import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import image1 from "../../assets/image/sliderItems/botImage.jpeg";
import image2 from "../../assets/image/sliderItems/bonusImage.png";
import image3 from "../../assets/image/sliderItems/30persentsSaleImage.png";
import image4 from "../../assets/image/sliderItems/rollMart.jpeg";

import cls from "./style.module.scss";
import { ArrowRight } from "../../assets/icons/arrowRight.tsx";
import { ArrowLeft } from "../../assets/icons/arrowLeft.tsx";

export default function SliderAdvertisment() {
  function SampleNextArrow(props: any) {
    const { style, onClick } = props;
    return (
      <ArrowRight
        style={{
          ...style,
        }}
        className={cls.nextButton}
        onClick={() => onClick()}
        width={40}
        height={40}
      />
    );
  }

  function SamplePrevArrow(props: any) {
    const { style, onClick } = props;
    return (
      <ArrowLeft
        className={cls.prevButton}
        width={40}
        height={40}
        style={{
          ...style,
        }}
        onClick={() => onClick()}
      />
    );
  }

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <div className={cls.sliderContainer}>
      <Slider {...settings}>
        <div className={cls.sliderItem}>
          <img src={image1} alt="sliderimg" />
        </div>
        <div className={cls.sliderItem}>
          <img src={image2} alt="sliderimg" />
        </div>
        <div className={cls.sliderItem}>
          <img src={image3} alt="sliderimg" />
        </div>
        <div className={cls.sliderItem}>
          <img src={image4} alt="sliderimg" />
        </div>
      </Slider>
    </div>
  );
}
