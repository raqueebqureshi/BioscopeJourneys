import Image from "next/image";
import { useRouter } from "next/router";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const data = [{}];

export default function Header({ initialValues }) {
  const router = useRouter();
  const [OpenSearch, setOpenSearch] = useState(false);
  const [OpenMenu, setOpenMenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const acitive_class_slug = (slug) => {
    if (router.asPath === slug) {
      return router.asPath === slug ? "active" : "";
    } else if (
      router.asPath === "/faq" ||
      router.asPath === "/gallery" ||
      router.asPath === "/gallery-masonry" ||
      router.asPath === "/forgot-password" ||
      router.asPath === "/portfolio" ||
      router.asPath === "/testimonial" ||
      router.asPath === "/sitemap" ||
      router.asPath === "/team" ||
      router.asPath === "/team-detail" ||
      router.asPath === "/login" ||
      router.asPath === "/sign-in" ||
      router.asPath === "/404"
    ) {
      return slug === "/page" ? "active" : "";
    } else if (
      router.asPath === "/destination-two" ||
      router.asPath === "/destination-detail"
    ) {
      return slug === "/destination" ? "active" : "";
    } else if (router.asPath === "/home-2" || router.asPath === "/home-3") {
      return slug === "/" ? "active" : "";
    } else if (router.asPath === "/hotels-detail") {
      return slug === "/hotels" ? "active" : "";
    } else if (
      router.asPath === "/tour-detail" ||
      router.asPath === "/tour-detail-2" ||
      router.asPath === "/tour-detail-3" ||
      router.asPath === "/tour-list" ||
      router.asPath === "/tour-detail#detail" ||
      router.asPath === "/tour-detail#photos" ||
      router.asPath === "/tour-detail#itinerary" ||
      router.asPath === "/tour-detail#map" ||
      router.asPath === "/tour-detail#faq" ||
      router.asPath === "/tour-grid"
    ) {
      return slug === "/tour" ? "active" : "";
    } else if (
      router.asPath === "/blog-detail-1" ||
      router.asPath === "/blog-detail-2" ||
      router.asPath === "/blog-detail-3" ||
      router.asPath === "/standard-blog"
    ) {
      return slug === "/blog" ? "active" : "";
    }
  };

  const handelOpenSearch = (e) => {
    e.preventDefault();
    setOpenSearch((prevClass) => !prevClass);
  };

  const logout = () => {
    localStorage.removeItem("email");
    localStorage.removeItem("password");
  };

  const handelOpenMenu = (e) => {
    e.preventDefault();
    setOpenMenu((prevClass) => !prevClass);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const headerClasses = isScrolled ? "sticky-header" : "";

  return (
    initialValues &&
    initialValues.map((data, index) => {
      return (
        <React.Fragment key={index}>
          <header
            className={`header relative z-20 ${headerClasses} ${
              OpenMenu ? "header-open" : ""
            }`}
          >
            <div className="overlay lg:hidden" aria-expanded="false"></div>
            {/* {data.top_bar &&
              data.top_bar.map((top_bar_data, index) => {
                return (
                  <div
                    className="bg-primary-800 text-dark-900 text-sm font-medium py-2"
                    key={index}
                  >
                    <div className="container flex justify-between items-center">
                      <div className="flex items-center gap-5 md:gap-2">
                        <label className="hidden sm:block">
                          {top_bar_data.title}
                        </label>
                        {top_bar_data.email && (
                          <Link
                            href={`mailto:${top_bar_data.email.address}`}
                            className="hover:text-primary-900 flex items-center gap-2"
                          >
                            <i className="fa-solid fa-envelope"></i>
                            <span>{top_bar_data.email.label}</span>
                          </Link>
                        )}
                        {top_bar_data.phone_numbers && (
                          <div className="flex items-center gap-4">
                            {top_bar_data.phone_numbers.map(
                              (phone, index) => (
                                <Link
                                  key={index}
                                  href={`tel:${phone.number}`}
                                  className="hover:text-primary-900 flex items-center gap-2"
                                >
                                  <i className={top_bar_data.call_icon}></i>
                                  <span>{phone.label}</span>
                                </Link>
                              )
                            )}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })} */}
{data.top_bar &&
  data.top_bar.map((top_bar_data, index) => {
    return (
      <div
        className="bg-primary-800 text-dark-900 text-xs sm:text-sm font-medium py-2"
        key={index}
      >
        <div className="container px-4 sm:px-6 flex flex-col sm:flex-row justify-between items-center">
          <div className="flex items-center gap-2 sm:gap-5 md:gap-2 flex-wrap">
            {/* Title, visible only on larger screens */}
            <label className="hidden sm:block">{top_bar_data.title}</label>

            {/* Email Section */}
            {top_bar_data.email && (
              <Link
                href={`mailto:${top_bar_data.email.address}`}
                className="hover:text-primary-900 flex items-center gap-1 sm:gap-2 text-xs sm:text-sm"
              >
                <i className="fa-solid fa-envelope"></i>
                <span>{top_bar_data.email.label}</span>
              </Link>
            )}

            {/* Phone Numbers */}
            {top_bar_data.phone_numbers && (
              <div className="flex items-center gap-2 sm:gap-4 flex-wrap">
                {top_bar_data.phone_numbers.map((phone, index) => (
                  <Link
                    key={index}
                    href={`tel:${phone.number}`}
                    className="hover:text-primary-900 flex items-center gap-1 sm:gap-2 text-xs sm:text-sm"
                  >
                    <i className={top_bar_data.call_icon}></i>
                    <span>{phone.label}</span>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    );
  })}

            <div className="main-navigation py-3">
              {data.mid_bar &&
                data.mid_bar.map((mid_bar_data, index) => {
                  return (
                    <div
                      className="container w-full flex items-center justify-between"
                      key={index}
                    >
                      {mid_bar_data.logo &&
                        mid_bar_data.logo.map(
                          (mid_bar_logo_data, index) => {
                            return (
                              <div className="logo" key={index}>
                                <Link
                                  href={mid_bar_logo_data.slug}
                                  className="max-w-[250px] sm:max-w-auto block"
                                >
                                  <img
                                    src={mid_bar_logo_data.img}
                                    alt={mid_bar_logo_data.alt}
                                  />
                                </Link>
                              </div>
                            );
                          }
                        )}
                      <div className="flex items-center justify-end gap-5 lg:gap-10">
                        <button
                          onClick={handelOpenMenu}
                          className="lg:hidden text-3xl"
                        >
                          ☰
                        </button>
                        <div
                          className={`main-menu lg:block ${
                            OpenMenu ? "block" : "hidden"
                          }`}
                        >
                          <button
                            type="button"
                            className="absolute top-0 right-0 lg:hidden p-1"
                            onClick={handelOpenMenu}
                            aria-expanded={OpenMenu ? "true" : "false"}
                          >
                            <img
                              src="/assets/images/close-dark.svg"
                              alt="menu-close-icon"
                            />
                          </button>
                          <ul className="lg:flex items-center lg:gap-1 text-sm lg:text-md text-dark-900 font-semibold">
                            {data.mega_menu &&
                              data.mega_menu.map((mega_menu_data, index) => {
                                return (
                                  <li
                                    key={index}
                                    className={acitive_class_slug(
                                      mega_menu_data.slug
                                    )}
                                  >
                                    <Link
                                      href={mega_menu_data.slug}
                                      className="hover:text-primary-900"
                                    >
                                      {mega_menu_data.label}
                                    </Link>
                                  </li>
                                );
                              })}
                          </ul>
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>
          </header>
        </React.Fragment>
      );
    })
  );
}
