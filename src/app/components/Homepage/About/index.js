import React from "react";

const About = () => {
  return (
    <div className="font-montserrat flex flex-col md:px-5 md:py-10 items-center">
      <h1 className="text-center py-5 md:text-3xl text-2xl font-extrabold"> About us </h1>
      <div className="flex md:flex-row flex-col justify-center items-center  bg-gray-100">
        <img
          src="./building.svg"
          className="md:size-[32rem] size-96 px-6 md:px-10 md:py-3"
          alt=""
          srcset=""
        />
        <div className="space-y-5 bg-gray-50 text-gray-700 md:size-[42rem] h-full  flex flex-col justify-center items-center px-10 py-12">
          <h1 className="font-bold text-2xl text-center">
            {" "}
            Welcome to propcue{" "}
          </h1>
          <h2 className="px-2 text-sm md:text-xl text-center font-semibold">
            Your go-to place for finding the perfect rental or property for
            sale!
          </h2>
          <h2 className="px-2 font-semibold">
            We are a friendly team dedicated to helping you find your dream home
            or investment property. Whether you're looking to rent a cozy
            apartment or buy a house, we make the process easy and stress-free.
          </h2>
          <p className="font-doto px-2 text-sm font-medium">
            Our goal is to connect you with properties that fit your needs and
            budget. <br />
            We offer a wide range of options, from apartments and houses to
            commercial spaces, all available for rent or sale. <br />
            Reach out to us for any inquiries, and we'll guide you every step of
            the way.
          </p>
          <p className="px-2 text-center font-bold">
            Thank you for choosing PropCue – where finding your next property is
            easy!
          </p>
          <img
            className="mx-auto"
            src="./smiley-face.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
