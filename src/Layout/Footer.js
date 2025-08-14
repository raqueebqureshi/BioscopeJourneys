// import Image from "next/image";
// import Link from "next/link";
// import React, { useState } from "react";

// export default function Footer({ initialValues }) {
//   const [address_save_errors, setaddress_save_errors] = useState({});
//   const save_account_details = event => {
//     event.preventDefault();
//     const formElement = document.querySelector("#account_details_form");
//     const formData = new FormData(formElement);

//     let email = formData.get("email");

//     const error = {};

//     if (!email || email.trim() === "") {
//       error.email = "Email is required*";
//     } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
//       error.email = "Invalid email address";
//     }

//     if (Object.keys(error).length > 0) {
//       setaddress_save_errors(error);
//     } else {
//       setaddress_save_errors({});
//     let data = {
//       email: email,
//     };
//     console.log(data);
//     }

//   };

//   return (
//     <>
//       {initialValues &&
//         initialValues.map((data, index) => {
//           return (
//             <footer className="footer-part relative" key={index}>
//               <div className="container relative z-1">
//                 {/* {data.sign_up_mail &&
//                   data.sign_up_mail.map((sign_up_mail_data, index) => {
//                     return (
//                       <div
//                         className="text-center mb-10 md:mb-14 max-w-[590px] mx-auto"
//                         key={index}>
//                         <h2>{sign_up_mail_data.title}</h2>
//                         <p className="mb-5 md:mb-12">
//                           {sign_up_mail_data.label}
//                         </p>

//                         <form
//                           className="flex items-center justify-center bg-white shadow-input rounded-full p-1.5 border border-white hover:border-primary-900"
//                           id="account_details_form"
//                           onSubmit={save_account_details}>
//                           <input
//                             type="email"
//                             placeholder="Your email address"
//                             name="email"
//                             className="text-dark-900 text-md md:text-lg w-full py-3 bg-transparent px-3 outline-none"
//                           />
//                           <button
//                             type="submit"
//                             className="btn btn-primary w-full max-w-[130px] shrink-0">
//                             {sign_up_mail_data.btn_label}
//                           </button>
//                         </form>
//                         {address_save_errors.email && (
//                           <span className="error text-red-800 ">
//                             {address_save_errors.email}
//                           </span>
//                         )}
//                       </div>
//                     );
//                   })} */}

//                 <div className="flex flex-wrap -mx-4 pt-10 border-t border-gray-100">
//                   <div className="w-full lg:w-1/3 px-3">
//                     {data.mid_data &&
//                       data.mid_data.map((mid_data_data, index) => {
//                         return (
//                           <React.Fragment key={index}>
//                             <div className="mb-10 lg:mb-6 text-left lg:max-w-[260px]">
//                               {mid_data_data.logo &&
//                                 mid_data_data.logo.map((logo_data, index) => {
//                                   return (
//                                     <div className="mb-3 lg:mb-6" key={index}>
//                                       <Link
//                                         href={logo_data.slug}
//                                         className="inline-block">
//                                         <Image
//                                           src={logo_data.img}
//                                           alt={logo_data.alt}
//                                           width={181}
//                                           height={56}
//                                         />
//                                       </Link>
//                                     </div>
//                                   );
//                                 })}
//                               <p className="mb-5 font-normal text-15">
//                                 {mid_data_data.details}
//                               </p>
//                               <ul className="flex items-center justify-start space-x-4 text-md text-primary-900">
//                                 {mid_data_data.icons &&
//                                   mid_data_data.icons.map(
//                                     (icons_data, index) => {
//                                       return (
//                                         <li key={index}>
//                                           <Link
//                                             href={icons_data.slug}
//                                             target="_blank"
//                                             className="w-8 h-8 rounded-full flex items-center justify-center transition-all bg-primary-800 hover:bg-primary-900 hover:text-white">
//                                             <i className={icons_data.icon}></i>
//                                           </Link>
//                                         </li>
//                                       );
//                                     }
//                                   )}
//                               </ul>
//                             </div>
//                           </React.Fragment>
//                         );
//                       })}
//                   </div>
//                   <div className="w-full lg:w-2/3 px-3">
//                     <div className="grid grid-cols-1 sm:grid-cols-3">
//                       {data.page_list &&
//                         data.page_list.quick_links &&
//                         data.page_list.quick_links.map(
//                           (quick_links_data, index) => {
//                             return (
//                               <div className="mb-6" key={index}>
//                                 <h4 className="footer-title">
//                                   {quick_links_data.title}
//                                 </h4>
//                                 <ul className="space-y-2 text-15 text-dark-800">
//                                   {quick_links_data.menu &&
//                                     quick_links_data.menu.map(
//                                       (menu_data, index) => {
//                                         return (
//                                           <li key={index}>
//                                             <Link
//                                               href={menu_data.slug}
//                                               className="text-dark-800 hover:text-primary-900 ">
//                                               {menu_data.label}
//                                             </Link>
//                                           </li>
//                                         );
//                                       }
//                                     )}
//                                 </ul>
//                               </div>
//                             );
//                           }
//                         )}
//                       {data.page_list &&
//                         data.page_list.contact_us &&
//                         data.page_list.contact_us.map(
//                           (contact_us_data, index) => {
//                             return (
//                               <div className="mb-6 " key={index}>
//                                 <h4 className="footer-title">
//                                   {contact_us_data.title}
//                                 </h4>
//                                 {contact_us_data.menu &&
//                                   contact_us_data.menu.map(
//                                     (menu_data, index) => {
//                                       return menu_data.slug ? (
//                                         <p
//                                           className="pl-7 relative text-15 mb-3"
//                                           key={index}>
//                                           <span className="absolute top-2 left-0">
//                                             <Image
//                                               src={menu_data.img}
//                                               alt={menu_data.alt}
//                                               width={index === 0 ? 11 : 16}
//                                               height={index === 0 ? 16 : 16}
//                                             />
//                                           </span>
//                                           <Link
//                                             href={menu_data.slug}
//                                             className="hover:text-primary-900">
//                                             {menu_data.label}
//                                           </Link>
//                                         </p>
//                                       ) : (
//                                         <p
//                                           className="pl-7 relative text-15 mb-3"
//                                           key={index}>
//                                           <span className="absolute top-2 left-0">
//                                             <img
//                                               src={menu_data.img}
//                                               alt={menu_data.alt}
//                                             />
//                                           </span>
//                                           {menu_data.label}
//                                         </p>
//                                       );
//                                     }
//                                   )}
//                               </div>
//                             );
//                           }
//                         )}
//                       {/* {data.page_list &&
//                         data.page_list.gallery &&
//                         data.page_list.gallery.map((gallery_data, index) => {
//                           return (
//                             <div className="mb-6" key={index}>
//                               <h4 className="footer-title">
//                                 {gallery_data.title}
//                               </h4>
//                               <div className="grid grid-cols-4 gap-3">
//                                 {gallery_data.menu &&
//                                   gallery_data.menu.map((menu_data, index) => {
//                                     return (
//                                       <div
//                                         className="overflow-hidden relative group rounded-xl before:block before:pt-full"
//                                         key={index}>
//                                         <Link
//                                           href={menu_data.slug}
//                                           className="absolute top-0 left-0 h-full w-full block">
//                                           <Image
//                                             src={menu_data.img}
//                                             alt={menu_data.alt}
//                                             width={54}
//                                             height={54}
//                                             className="transition-all group-hover:scale-105 w-full h-full object-cover duration-300"
//                                           />
//                                         </Link>
//                                       </div>
//                                     );
//                                   })}
//                               </div>
//                             </div>
//                           );
//                         })} */}
//                     </div>
//                   </div>
//                 </div>

//                 <div className="border-t border-gray-100 py-4 text-center md:text-left md:flex items-center justify-between">
//                   {data.last_data &&
//                     data.last_data.map((last_d, index) => {
//                       return (
//                         <p className="text-dark-900 text-md mb-0" key={index}>
//                           {last_d.label}{" "}
//                           <Link
//                             href="/"
//                             className="text-dark-900 hover:text-primary-900">
//                             {last_d.label1}
//                           </Link>
//                           {last_d.label2}
//                         </p>
//                       );
//                     })}
//                 </div>
//               </div>

//               <div className="footer-bg absolute bottom-0 top-10 left-0 w-full">
//                 <img src={data.bg_image} alt={data.bg_alt} />
//               </div>
//             </footer>
//           );
//         })}
//     </>
//   );
// }

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

export default function Footer({ initialValues }) {
  const [address_save_errors, setaddress_save_errors] = useState({});
  const save_account_details = event => {
    event.preventDefault();
    const formElement = document.querySelector("#account_details_form");
    const formData = new FormData(formElement);
    let email = formData.get("email");
    const error = {};
    if (!email || email.trim() === "") {
      error.email = "Email is required*";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
      error.email = "Invalid email address";
    }
    if (Object.keys(error).length > 0) {
      setaddress_save_errors(error);
    } else {
      setaddress_save_errors({});
      let data = {
        email: email,
      };
      console.log(data);
    }
  };

  return (
    <>
      {initialValues &&
        initialValues.map((data, index) => {
          return (
            <footer className="footer-part relative" key={index}>
              <div className="container relative z-1">
                <div className="flex flex-wrap -mx-4 pt-10 border-t border-gray-100">
                  <div className="w-full lg:w-1/3 px-3">
                    {data.mid_data &&
                      data.mid_data.map((mid_data_data, index) => {
                        return (
                          <React.Fragment key={index}>
                            <div className="mb-10 lg:mb-6 text-left lg:max-w-[360px]">
                              {mid_data_data.logo &&
                                mid_data_data.logo.map((logo_data, index) => {
                                  return (
                                    <div className="mb-3 lg:mb-3 flex justify-start" key={index}>
                                      <Link
                                        href={logo_data.slug}
                                        className="inline-block">
                                        <Image
                                          src={logo_data.img}
                                          alt={logo_data.alt}
                                          width={201}
                                          height={76}
                                        />
                                      </Link>
                                    </div>
                                  );
                                })}
                              <p className="mb-5 font-normal text-sm lg:text-base">
                                {mid_data_data.details}
                              </p>
                              <ul className="flex items-center justify-start space-x-4 text-sm lg:text-md text-primary-900">
                                {mid_data_data.icons &&
                                  mid_data_data.icons.map(
                                    (icons_data, index) => {
                                      return (
                                        <li key={index}>
                                          <Link
                                            href={icons_data.slug}
                                            target="_blank"
                                            className="w-8 h-8 rounded-full flex items-center justify-center transition-all bg-primary-800 hover:bg-primary-900 hover:text-white">
                                            <i className={icons_data.icon}></i>
                                          </Link>
                                        </li>
                                      );
                                    }
                                  )}
                              </ul>
                            </div>
                          </React.Fragment>
                        );
                      })}
                  </div>
                  <div className="w-full lg:w-2/3 px-3">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                      {data.page_list &&
                        data.page_list.quick_links &&
                        data.page_list.quick_links.map(
                          (quick_links_data, index) => {
                            return (
                              <div className="mb-6" key={index}>
                                <h4 className="footer-title text-sm lg:text-base font-semibold">
                                  {quick_links_data.title}
                                </h4>
                                <ul className="space-y-2 text-sm lg:text-md text-dark-800">
                                  {quick_links_data.menu &&
                                    quick_links_data.menu.map(
                                      (menu_data, index) => {
                                        return (
                                          <li key={index}>
                                            <Link
                                              href={menu_data.slug}
                                              className="text-dark-800 hover:text-primary-900">
                                              {menu_data.label}
                                            </Link>
                                          </li>
                                        );
                                      }
                                    )}
                                </ul>
                              </div>
                            );
                          }
                        )}
                      {data.page_list &&
                        data.page_list.contact_us &&
                        data.page_list.contact_us.map(
                          (contact_us_data, index) => {
                            return (
                              <div className="mb-6" key={index}>
                                <h4 className="footer-title text-sm lg:text-base font-semibold">
                                  {contact_us_data.title}
                                </h4>
                                {contact_us_data.menu &&
                                  contact_us_data.menu.map(
                                    (menu_data, index) => {
                                      return menu_data.slug ? (
                                        <p
                                          className="pl-7 relative text-sm lg:text-md mb-3"
                                          key={index}>
                                          <span className="absolute top-2 left-0">
                                            <Image
                                              src={menu_data.img}
                                              alt={menu_data.alt}
                                              width={index === 0 ? 11 : 16}
                                              height={index === 0 ? 16 : 16}
                                            />
                                          </span>
                                          <Link
                                            href={menu_data.slug}
                                            className="hover:text-primary-900">
                                            {menu_data.label}
                                          </Link>
                                        </p>
                                      ) : (
                                        <p
                                          className="pl-7 relative text-sm lg:text-md mb-3"
                                          key={index}>
                                          <span className="absolute top-2 left-0">
                                            <img
                                              src={menu_data.img}
                                              alt={menu_data.alt}
                                            />
                                          </span>
                                          {menu_data.label}
                                        </p>
                                      );
                                    }
                                  )}
                              </div>
                            );
                          }
                        )}
                    </div>
                  </div>
                </div>

                <div className="border-t border-gray-100 py-4 text-center md:text-left md:flex items-center justify-between">
                  {data.last_data &&
                    data.last_data.map((last_d, index) => {
                      return (
                        <p className="text-dark-900 text-sm lg:text-md mb-0" key={index}>
                          {last_d.label}{" "}
                          <Link
                            href="/"
                            className="text-dark-900 hover:text-primary-900">
                            {last_d.label1}
                          </Link>
                          {last_d.label2}
                        </p>
                      );
                    })}
                </div>
              </div>

              <div className="footer-bg absolute bottom-0 top-10 left-0 w-full hidden md:block">
                <img src={data.bg_image} alt={data.bg_alt} />
              </div>
            </footer>
          );
        })}
    </>
  );
}
