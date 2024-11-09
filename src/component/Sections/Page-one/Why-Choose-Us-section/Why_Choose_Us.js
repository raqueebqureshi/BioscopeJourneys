import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Why_Choose_Us = ({ initialValues }) => {
  return (
    initialValues &&
    initialValues.map((data, index) => {
      return (
        <section
  className="why-choose-us-section  pt-20 md:pt-32 pb-10 md:pb-20 lg:pb-28 lg:-mt-14  relative  "
  key={index}>
  <div className="absolute -top-0 lg:-top-12 left-0 w-full">
    <Image
      src={data.bg_image}
      alt={data.bg_alt}
      width={1835}
      height={655}
      className="w-full block opacity-150" // Added opacity-100 to ensure it's fully opaque
    />
  </div>
  <div className="container relative">
    <div className="text-center  mb-10 md:mb-14">
      <h2 className="text-brown-100 ">{data.title}</h2>
      <p className="max-w-[590px] mx-auto">{data.label}</p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center gap-7">
      {data.service &&
        data.service.map((service_data, index) => {
          return (
            <div
              className="shadow-box-2 group rounded-4xl py-3 md:py-5 px-3 flex items-center gap-5"
              key={index}>
              <div className="bg-primary-800 rounded-2xl w-24 h-24 flex items-center justify-center shrink-0 transition-all">
                <Image
                  src={service_data.image}
                  alt={service_data.alt}
                  width={58}
                  height={61}
                  className=""
                />
              </div>
              <div className="">
                <h5 className="text-lg mb-2 text-brown-100 ">{service_data.title}</h5>
                <p className="text-sm mb-0">{service_data.label}</p>
              </div>
            </div>
          );
        })}
    </div>
  </div>
</section>

      );
    })
  );
};

export default Why_Choose_Us;
