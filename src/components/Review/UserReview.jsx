import UserImage from "../../assets/img/img-review/user-image.png";
import Stars from "../../assets/img/img-review/stars.png";
import { DivCard } from "./ReviewStyles";

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function UserReview() {
  /* var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  }; */

  return (
    <>
      {/* <Slider {...settings}> */}
        {data.map((user, index) => (
          <DivCard key={index} className="Containe-user">
            <img src={user.imgUser} alt="" />
            <img src={user.starsUser} alt="" />
            <h3>{user.titleReview}</h3>
            <p className="review-user">{user.review}</p>
            <h4 className="user-name">{user.userName}</h4>
          </DivCard>
        ))}
     {/*  </Slider> */}
    </>
  );
}

export default UserReview;


const data = [
  {
    imgUser: UserImage,
    starsUser: Stars,
    titleReview: "THE BEST BARBER Services",
    review: " Et proin ut in dignissim sem non a nullam magna lectus urna et dui quam tellus imperdiet sit purus at fringilla scelerisque diam amet fermentum orci fringilla aliquet nulla lectus erat eu auctor",
    userName: "SAM HOUSTON"
  },
 /*  {
    imgUser: UserImage,
    starsUser: Stars,
    titleReview: "THE BEST BARBER Services",
    review: " Et proin ut in dignissim sem non a nullam magna lectus urna et dui quam tellus imperdiet sit purus at fringilla scelerisque diam amet fermentum orci fringilla aliquet nulla lectus erat eu auctor",
    userName: "RODRIGO FARO"
  },
  {
    imgUser: UserImage,
    starsUser: Stars,
    titleReview: "THE BEST BARBER Services",
    review: " Et proin ut in dignissim sem non a nullam magna lectus urna et dui quam tellus imperdiet sit purus at fringilla scelerisque diam amet fermentum orci fringilla aliquet nulla lectus erat eu auctor",
    userName: "LUCIANO HULK"
  },
  {
    imgUser: UserImage,
    starsUser: Stars,
    titleReview: "THE BEST BARBER Services",
    review: " Et proin ut in dignissim sem non a nullam magna lectus urna et dui quam tellus imperdiet sit purus at fringilla scelerisque diam amet fermentum orci fringilla aliquet nulla lectus erat eu auctor",
    userName: "NEYMAR JR"
  },
  {
    imgUser: UserImage,
    starsUser: Stars,
    titleReview: "THE BEST BARBER Services",
    review: " Et proin ut in dignissim sem non a nullam magna lectus urna et dui quam tellus imperdiet sit purus at fringilla scelerisque diam amet fermentum orci fringilla aliquet nulla lectus erat eu auctor",
    userName: "WALTER WHITE"
  }, */
]