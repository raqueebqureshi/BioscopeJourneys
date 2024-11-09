import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const Hero = ({ initialValues }) => {
  const [keyword, setKeyword] = useState("");
  const [destination, setDestination] = useState("Where to?");
  const [duration, setDuration] = useState("Check in - Check out");

  const option = [
    { value: "Where to?" },
    { value: "Destination 1" },
    { value: "Destination 2" },
  ];
  const option2 = [
    { value: "Check in - Check out" },
    { value: "1 day" },
    { value: "1 day" },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000
  };
  return (
    initialValues &&
    initialValues.map((data, index) => {
      return (
        <section
          className="hero-section min-h-[calc(100vh-1121px)] md:min-h-[calc(100vh-116px)] bg-[#FFFFFF] relative grid content-end pt-24 pb-5 md:py-20 lg:py-28"
          key={index}
        >
          {" "}
          <div className="absolute top-0 left-0 w-full h-full before:absolute before:top-0 before:left-0 before:h-full before:w-full before:bg-[#FFFFFF] before:opacity-[0.62]">
          <div className="relative w-full h-full overflow-hidden  object-cover">
      <Slider {...settings}>
        {data.images.map((imageData, index) => (
          <div key={index} className="w-full h-full relative">
            <Image
              src={imageData.src}
              alt={imageData.alt}
              width={1835}
              height={549}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </Slider>
      <div className="absolute inset-0 bg-black opacity-40"></div>
    </div>
    
          </div>{" "}
          <div className="hero-content-slider relative z-1">
            {" "}
                       <div className="container text-center">
              <h1 className="text-white ">{data.title}</h1>
              <p className="mb-6 md:mb-9 text-white text-md md:text-2xl md:leading-2xl">
                {data.label}
              </p>
              </div>
            
          </div>
        </section>
      );
    })
  );
};

export default Hero;


{/* <div className="container text-center">
              <h1 className="text-white">{data.title}</h1>
              <p className="mb-6 md:mb-9 text-white text-md md:text-2xl md:leading-2xl">
                {data.label}
              </p>
              <div className="booking-form bg-white rounded-xl md:rounded-7xl px-6 py-3 md:pr-3 md:pl-10 text-left w-full md:flex gap-0 lg:gap-10 xl:gap-20 items-center">
                <div className="w-full md:px-3 text-dark-900 font-semibold text-lg border-b md:border-0 border-primary-800 mb-7 md:mb-0">
                  <label className="block">{data.search_title}</label>
                  <input
                    type="text"
                    placeholder="Type your keyword here...."
                    name=""
                    className="form-control"
                    value={keyword}
                    onChange={(e) => setKeyword(e.target.value)}
                  />
                </div>
                <div className="w-full md:px-3 text-dark-900 font-semibold text-lg border-b md:border-0 border-primary-800 mb-7 md:mb-0">
                  <label className="block">{data.destination_title}</label>
                  <select
                    className="form-control bg-transparent"
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                    option={option.value}
                  >
                    {option.map((opt, index) => (
                      <option key={index} value={opt.value}>
                        {opt.value}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="w-full md:px-3 text-dark-900 font-semibold text-lg mb-7 md:mb-0">
                  <label className="block">{data.duration_title}</label>
                  <select
                    className="form-control bg-transparent"
                    value={duration}
                    onChange={(e) => setDuration(e.target.value)}
                  >
                    {option2.map((opt, index) => (
                      <option key={index} value={opt.value}>
                        {opt.value}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="fl">
                  <button
                    type="button"
                    className="bg-primary-900 rounded-7xl w-full md:w-[110px] h-[50px] md:h-[77px] flex items-center justify-center text-white text-xl md:text-3xl hover:bg-dark-900"
                  >
                    <i className="fa-regular fa-magnifying-glass"></i>
                  </button>
                </div>
              </div>
            </div> */}