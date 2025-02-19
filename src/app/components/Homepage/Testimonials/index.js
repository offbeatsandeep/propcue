import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonials = () => {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  };

  return (
    <div className="font-montserrat slider-container bg-gray-200 px-12 py-16">
      <h1 className="text-center py-5 md:text-3xl text-2xl font-extrabold">
        What our clients say
      </h1>
      <Slider {...settings}>
        {/* slide 1 */}
        <div>
          <div className="flex flex-col justify-center items-center">
            <div className="flex flex-col space-y-3 items-center py-5">
              <img
                className="rounded-full "
                src="https://i.pravatar.cc/100"
                alt="customer profile photo"
              />
              <h1 className="text-md md:text-xl font-bold"> Sunny Mehta </h1>
              <p className="text-justify text-sm md:text-md px-3 md:px-12 font-medium">
                {" "}
                "Working with Pawan was an amazing experience. From the start,
                they took the time to understand exactly what we were looking
                for and helped us find a home that perfectly suited our
                needs..."{" "} <br />
                <span className="float-right"> - Gurgaon</span>
              </p>

            </div>
          </div>
        </div>
        <div>
          <div className="flex flex-col justify-center items-center">
            <div className="flex flex-col space-y-3 items-center py-5">
              <img
                className="rounded-full "
                src="https://i.pravatar.cc/100"
                alt="customer profile photo"
              />
              <h1 className="text-md md:text-xl font-bold"> Sunny Mehta </h1>
              <p className="text-justify text-sm md:text-md px-3 md:px-12 font-medium">
                {" "}
                "Working with Pawan was an amazing experience. From the start,
                they took the time to understand exactly what we were looking
                for and helped us find a home that perfectly suited our
                needs..."{" "} <br />
                <span className="float-right"> - Gurgaon</span>
              </p>

            </div>
          </div>
        </div>
        <div>
          <div className="flex flex-col justify-center items-center">
            <div className="flex flex-col space-y-3 items-center py-5">
              <img
                className="rounded-full "
                src="https://i.pravatar.cc/100"
                alt="customer profile photo"
              />
              <h1 className="text-md md:text-xl font-bold"> Sunny Mehta </h1>
              <p className="text-justify text-sm md:text-md px-3 md:px-12 font-medium">
                {" "}
                "Working with Pawan was an amazing experience. From the start,
                they took the time to understand exactly what we were looking
                for and helped us find a home that perfectly suited our
                needs..."{" "} <br />
                <span className="float-right"> - Gurgaon</span>
              </p>

            </div>
          </div>
        </div>

       
      </Slider>
    </div>
  );
};

export default Testimonials;
