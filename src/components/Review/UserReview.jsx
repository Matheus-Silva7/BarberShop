import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { DivCardUser } from "./ReviewStyles";
import data from "./userData";
import { SampleNextArrow, SamplePrevArrow } from "./ArrowSlick";



function UserReview() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      }
    ],
  };

  return (
    <div className="container-users">
      <Slider {...settings}>
        {data.map((user, index) => (
          <DivCardUser key={index} className="container-user">
            <img src={user.imgUser} alt="User" className="img-user" />
            <img src={user.starsUser} alt="Stars" />
            <h3>{user.titleReview}</h3>
            <p className="review-user">{user.review}</p>
            <h4 className="user-name">{user.userName}</h4>
          </DivCardUser>
        ))}
      </Slider>
    </div>
  );
}

export default UserReview;
