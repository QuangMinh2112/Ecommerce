import { Carousel } from "antd";
import React from "react";
import "./home.css";

const Slider = () => {
  return (
    <Carousel autoplay className="slider">
      <div>
        <img
          className="slider_image"
          src="https://vietnix.vn/wp-content/uploads/2022/05/tai-sao-can-su-dung-plugin-tao-slide-anh-cho-wordpress-1024x576.webp"
          alt="slide"
        />
      </div>
      <div>
        <img
          className="slider_image"
          src="https://img.thuthuattinhoc.vn/uploads/2019/03/07/thuthuattinhoc-slide-cam-on-dep-1_113240949.jpg"
          alt="slide"
        />
      </div>
      <div>
        <img
          className="slider_image"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOQ4Y2RwPsYOuQ29NmBUGA7i3z0RApNBw7sg&usqp=CAU"
          alt="slide"
        />
      </div>
      <div>
        <img
          className="slider_image"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9pe_KCh1ZVDDVhSDJmFeZdIrx4u7upT3OjZGAXUhnM3pztEy932jpRiJ1tUlRRauIS0Q&usqp=CAU"
          alt="slide"
        />
      </div>
    </Carousel>
  );
};

export default Slider;
