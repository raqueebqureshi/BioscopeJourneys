import Image from "next/image";
import Link from "next/link";
import ReactPaginate from "react-paginate";
import { useState } from "react";
import { Modal, ModalContent, useDisclosure } from "@nextui-org/react";
import { Add_To_Cart_Model } from "@/component/comman";

const All_Tour = ({ initialValues }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [single_cart_data, setsingle_cart_data] = useState({});

  const open_model = (e, data) => {
    setsingle_cart_data(data);
    onOpen();
    e.preventDefault();
  };

  const close_model = e => {
    onClose();
    e.preventDefault();
    setsingle_cart_data({});
  };

  const itemsPerPage = 9;
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageClick = selectedPage => {
    setCurrentPage(selectedPage.selected + 1);
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  return (
    <section className="">
      {initialValues &&
        initialValues.map((data, index) => {
          return (
            <div className="container" key={index}>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {data.product &&
                  data.product
                    .slice(startIndex, endIndex)
                    .map((product_data, index) => {
                      return (
                        <div
                          className="group relative bg-white shadow-box-1 rounded-xl overflow-hidden"
                          key={index}>
                          <div className="">
                            <div className=" w-full overflow-hidden rounded-t-xl before:pt-[65%] before:block relative group-hover:opacity-75">
                              <Link
                                href={product_data.slug}
                                className="tour-popup-link absolute top-0 left-0 h-full w-full">
                                <img
                                  src={product_data.image}
                                  alt={product_data.alt}
                                  className="h-full w-full object-cover object-center"
                                />
                              </Link>
                            </div>
                            <div className="mt-5">
                              <h3 className="text-1xl text-dark-700 leading-2xl mb-2 group-hover:text-primary-900 text-center">
                                <Link href={product_data.slug}>
                                  {product_data.title}
                                </Link>
                              </h3>
                              <p className="text-center mb-0 text-md">
                                {product_data.short_des}
                              </p>
                              <div className="px-5 py-5 flex justify-between">
                                <div className="flex items-center gap-2 text-sm">
                                  <img
                                    src="/assets/images/calendar-icon.svg"
                                    alt="calendar-icon"
                                  />
                                  {product_data.date}
                                </div>
                                <div className="flex items-center gap-2 text-sm">
                                  <img
                                    src="/assets/images/clock-icon.svg"
                                    alt="calendar-icon"
                                  />
                                  {product_data.day} Days
                                </div>
                                <div className="flex items-center gap-2 text-sm">
                                  <img
                                    src="/assets/images/star-icon.svg"
                                    alt="calendar-icon"
                                  />
                                  {product_data.rating}
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="flex justify-between bg-primary-800">
                            <div className="text-right flex items-right justify-right gap-3  py-2 px-3 rounded-b-xl">
                              <span className="text-xl md:text-2xl pl-5 font-bold text-dark-900 block">
                                <sup>$</sup>
                                {product_data.price}
                              </span>
                              <span className="text-sm font-semibold text-primary-900 line-through block">
                                <sup>$</sup>
                                {product_data.old_price}
                              </span>
                            </div>
                            <div className="flex items-end justify-end">
                              <button
                                className="btn btn-primary rounded-[3px] w-full h-full px-3 py-2"
                                onClick={e => open_model(e, product_data)}>
                                Add to{" "}
                                <img
                                  src="/assets/images/Cart.svg"
                                  alt="material-symbols_card-travel"
                                  width={22}
                                  height={22}
                                  className="ml-1"
                                />
                              </button>
                            </div>
                          </div>
                        </div>
                      );
                    })}
              </div>

              <div className="mt-12">
                <nav aria-label="Pagination">
                  <ReactPaginate
                    breakLabel="..."
                    nextLabel=">"
                    pageLinkClassName="w-10 h-10 border border-primary-900 rounded-full flex items-center justify-center text-dark-900 hover:bg-primary-900 hover:text-white"
                    activeLinkClassName="w-10 h-10 border border-primary-900 rounded-full flex items-center justify-center bg-primary-900 text-white hover:bg-primary-900 hover:text-white"
                    containerClassName="isolate flex justify-center gap-2 text-md font-bold"
                    previousLinkClassName="w-10 h-10 border border-primary-900 rounded-full flex items-center justify-center text-dark-900 hover:bg-primary-900 hover:text-white"
                    nextLinkClassName="w-10 h-10 border border-primary-900 rounded-full flex items-center justify-center text-dark-900 hover:bg-primary-900 hover:text-white"
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={5}
                    pageCount={Math.ceil(data.product.length / itemsPerPage)}
                    previousClassName=""
                    previousLabel="<"
                    renderOnZeroPageCount={null}
                  />
                </nav>
              </div>

              <Modal
                classNames="bg-gray-900"
                isOpen={isOpen}
                onClose={onClose}
                size="3xl">
                <ModalContent className="pt-0 pb-0">
                  <div className="bg-white rounded-1xl relative overflow-hidden">
                    <div className="bg-primary-800 border-b border-[#C6BCDA] py-2 px-5 flex items-center justify-between">
                      <h2 className="text-xl font-bold m-0">Add to cart</h2>
                      <button
                        className="mfp-close xl:text-3xl xl:leading-5"
                        title="Close (Esc)"
                        onClick={e => close_model(e)}
                        type="button">
                        ×
                      </button>
                    </div>

                    <Add_To_Cart_Model Data={single_cart_data} />
                  </div>
                  {/* </div> */}
                </ModalContent>
              </Modal>
            </div>
          );
        })}
    </section>
  );
};

export default All_Tour;
