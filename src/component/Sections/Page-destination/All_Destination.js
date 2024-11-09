import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useFetchData } from "@/component/comman";

const All_Destination = ({ initialValues }) => {
  const { data: top_destinations_data } = useFetchData(
    "json/data/top_destinations.json"
  );

  return (
    <section className="">
    {top_destinations_data &&
      top_destinations_data.map((data, index) => {
        return (
          <div key={index}>
            <h3 className="text-xl xl:text-3xl xl:leading-normal text-black text-center mb-10">
              Popular Destinations
            </h3>
  
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 md:gap-7 mx-4 sm:mx-26 md:mx-28">
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
                      {/* Overlay */}
                      <div className="absolute inset-0 bg-black opacity-5 group-hover:opacity-50 transition-all"></div>
                      <div className="absolute inset-0 bg-black opacity-30 group-hover:opacity-0 transition-opacity duration-300"></div>
                      <p className="absolute inset-0 text-white text-center flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-5">
                        {product_data.detail}
                      </p>
  
                      <div className="categories-detail relative z-10">
                        <Link href={product_data.slug}>
                          {/* Title */}
                          <div className="absolute inset-0 text-white text-bottom flex items-center justify-center opacity-100 group-hover:opacity-0 transition-opacity duration-300 z-10">
                            <h4>{product_data.title}</h4>
                          </div>
  
                          {/* <div className="tours-btn">
                            {product_data.count} Tours
                          </div> */}
                        </Link>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        );
      })}
  </section>
  
  );
};

export default All_Destination;


 // <div className="container" key={index}>
            //   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            //     {data.product &&
            //       data.product.map((product_data, index) => {
            //         return (
            //           <div className="relative group" key={index}>
            //             <div className="relative overflow-hidden before:pt-[95%] before:block after:w-full after:transition-all after:h-full after:absolute after:top-0 after:left-0 after:bg-dark-900 after:opacity-20 group-hover:after:opacity-40">
            //               <Image
            //                 src={product_data.image}
            //                 alt={product_data.alt}
            //                 width={379}
            //                 height={360}
            //                 className="transition-all group-hover:scale-105 absolute top-0 left-0 w-full h-full object-cover duration-300"
            //               />
            //             </div>
            //             <div className="absolute top-0 left-0 w-full p-5 xl:p-8 text-white">
            //               <div className="">
            //                 <h3 className="text-xl xl:text-3xl xl:leading-normal text-white mb-2">
            //                   {product_data.title}
            //                 </h3>
            //                 <div className="opacity-0 mt-10 transition-all group-hover:mt-0 group-hover:opacity-100 duration-500">
            //                   <span className="bg-white/80 rounded-md px-2 text-md text-dark-900 mb-3 block max-w-fit">
            //                     {product_data.count} Tours
            //                   </span>
            //                   <p className="text-md leading-normal mb-3">
            //                     {product_data.short_des}
            //                   </p>
            //                   <Link
            //                     href={product_data.slug}
            //                     className="flex items-center border-b border-white max-w-fit transition-all hover:border-0">
            //                     {product_data.btn_label}{" "}
            //                     <i className="fa-regular fa-arrow-right ml-2 transition-all"></i>
            //                   </Link>
            //                 </div>
            //               </div>
            //             </div>
            //           </div>
            //         );
            //       })}
            //   </div>
            //   <div className="mt-16 mb-10 text-center">
            //     <Link
            //       href={data.btn_slug}
            //       className="btn btn-primary mx-auto flex items-center min-w-[190px]">
            //       {data.btn_label}
            //       <span className="ml-1.5">
            //         <svg
            //           className="mx-auto d-block"
            //           width="22"
            //           height="22"
            //           viewBox="0 0 60 60"
            //           fill="none"
            //           xmlns="http://www.w3.org/2000/svg">
            //           <g id="loader_68">
            //             <g className="loader_circle_1" id="loader_68_3">
            //               <g id="Group 125">
            //                 <circle
            //                   id="Ellipse 304"
            //                   cx="30"
            //                   cy="30"
            //                   r="26"
            //                   fill="transparent"
            //                 />
            //                 <path
            //                   id="Intersect"
            //                   fillRule="evenodd"
            //                   clipRule="evenodd"
            //                   d="M4 30H8C8 17.8497 17.8497 8 30 8C42.1503 8 52 17.8497 52 30H56C56 15.6406 44.3594 4 30 4C15.6406 4 4 15.6406 4 30Z"
            //                   fill="currentColor"
            //                 />
            //               </g>
            //             </g>
            //             <g className="loader_circle_2" id="loader_68_2">
            //               <g id="Group 122">
            //                 <circle
            //                   id="Ellipse 302"
            //                   cx="30"
            //                   cy="30"
            //                   r="28"
            //                   fill="transparent"
            //                 />
            //                 <path
            //                   id="Intersect_2"
            //                   fillRule="evenodd"
            //                   clipRule="evenodd"
            //                   d="M10.2009 10.201L15.8578 15.8579C19.4771 12.2386 24.4771 10 29.9999 10C41.0456 10 49.9999 18.9543 49.9999 30H57.9999C57.9999 14.536 45.4639 2 29.9999 2C22.2679 2 15.2679 5.13401 10.2009 10.201Z"
            //                   fill="currentColor"
            //                 />
            //               </g>
            //             </g>
            //             <g className="loader_circle_3" id="loader_68_1">
            //               <circle
            //                 id="Ellipse 301"
            //                 cx="30"
            //                 cy="30"
            //                 r="30"
            //                 fill="transparent"
            //               />
            //               <path
            //                 id="Intersect_3"
            //                 fillRule="evenodd"
            //                 clipRule="evenodd"
            //                 d="M60 30H48C48 20.0589 39.9411 12 30 12V0C46.5685 0 60 13.4315 60 30Z"
            //                 fill="currentColor"
            //               />
            //             </g>
            //           </g>
            //         </svg>
            //       </span>
            //     </Link>
            //   </div>
            // </div>