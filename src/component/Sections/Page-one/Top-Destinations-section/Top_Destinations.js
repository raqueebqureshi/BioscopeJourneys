import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {  useFetchData } from "@/component/comman";


const Top_Destinations = ({ initialValues }) => {

  const { data: destination_product_data } = useFetchData(
    "json/data/destination_product.json"
  );
  return (
    <section className="">
      {initialValues &&
        initialValues.map((data, index) => {
          return (
            <div className="container" key={index}>
              <div className="text-center mb-8 md:mb-14">
                <h2>{data.title}</h2>
                <p className="max-w-[650px] mx-auto">{data.label}</p>
                <p className="max-w-[950px] mx-auto">{data.label2}</p>
                <p className="max-w-[950px] mx-auto">{data.l3}</p>
                <p className="max-w-[950px] mx-auto">{data.l4}</p>
                <p className="max-w-[950px] mx-auto">{data.l5}</p>
                <p className="max-w-[950px] mx-auto font-bold">{data.l6}</p>
              </div>

              {destination_product_data &&
        destination_product_data.map((data, index) => {
          return (
            <div className="container" key={index}>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {data.product &&
                  data.product.map((product_data, index) => {
                    return (
                      <div className="relative group" key={index}>
                        <div className="relative overflow-hidden before:pt-[95%] before:block after:w-full after:transition-all after:h-full after:absolute after:top-0 after:left-0 after:bg-dark-900 after:opacity-20 group-hover:after:opacity-40">
                          <Image
                            src={product_data.image}
                            alt={product_data.alt}
                            width={379}
                            height={360}
                            className="transition-all group-hover:scale-105 absolute top-0 left-0 w-full h-full object-cover duration-300"
                          />
                        </div>
                        <div className="absolute top-0 left-0 w-full p-5 xl:p-8 text-white">
                          <div className="">
                            <h3 className="text-xl xl:text-3xl xl:leading-normal text-white mb-2">
                              {product_data.title}
                            </h3>
                            <div className="opacity-0 mt-10 transition-all group-hover:mt-0 group-hover:opacity-100 duration-500">
                              {/* <span className="bg-white/80 rounded-md px-2 text-md text-dark-900 mb-3 block max-w-fit">
                                {product_data.count} Tours
                              </span> */}
                              <p className="text-md leading-normal mb-3">
                                {product_data.short_des}
                              </p>
                              {/* <Link
                                href={product_data.slug}
                                className="flex items-center border-b border-white max-w-fit transition-all hover:border-0">
                                {product_data.btn_label}{" "}
                                <i className="fa-regular fa-arrow-right ml-2 transition-all"></i>
                              </Link> */}
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
              </div>
            
            </div>
          );
        })}
              {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 md:gap-7">
                {data.product &&
                  data.product.map((product_data, index) => {
                    return (
                      <div
                        className="category-box overflow-hidden group rounded-1xl relative"
                        key={index}
                      >
                        <Image
                          src={product_data.image}
                          alt={product_data.alt}
                          width={361}
                          height={252}
                          className="transition-all group-hover:scale-105"
                        />
                        <div className="categories-detail">
                          <Link href={product_data.slug}>
                            <h4>{product_data.title}</h4>
                            <div className="tours-btn">
                              {product_data.count} Tours
                            </div>
                          </Link>
                        </div>
                      </div>
                    );
                  })}
              </div> */}

              {/* <div className="mt-12">
                <Link href="" className="btn btn-primary mx-auto">
                  Explore all <i className="fa-regular fa-arrow-right ml-3"></i>
                </Link>
              </div> */}
            </div>
          );
        })}
    </section>
  );
};

export default Top_Destinations;
