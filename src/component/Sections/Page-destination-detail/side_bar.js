import React, { useState } from "react";
import Link from "next/link";

// Define the Side_Bar component
const Side_Bar = ({ active, onGridChange }) => {
  return (
    <ul className="flex items-center bg-primary-800 rounded-md p-1.5 md:gap-4 mb-10">
      <li className="w-full text-center md:w-auto">
        <Link
          href="#"
          className={`block py-1 md:py-2 px-3 md:px-7 rounded-md text-dark-900 hover:bg-primary-900 hover:text-white ${
            active === 0 ? "bg-primary-900 text-white" : ""
          }`}
          onClick={(e) => {
            e.preventDefault();
            onGridChange(0);
          }}
        >
          Activities
        </Link>
      </li>
      <li className="w-full text-center md:w-auto">
        <Link
          href="#"
          className={`block py-1 md:py-2 px-3 md:px-7 rounded-md text-dark-900 hover:bg-primary-900 hover:text-white ${
            active === 1 ? "bg-primary-900 text-white" : ""
          }`}
          onClick={(e) => {
            e.preventDefault();
            onGridChange(1);
          }}
        >
          Flights
        </Link>
      </li>
      <li className="w-full text-center md:w-auto">
        <Link
          href="#"
          className={`block py-1 md:py-2 px-3 md:px-7 rounded-md text-dark-900 hover:bg-primary-900 hover:text-white ${
            active === 2 ? "bg-primary-900 text-white" : ""
          }`}
          onClick={(e) => {
            e.preventDefault();
            onGridChange(2);
          }}
        >
          Hotels
        </Link>
      </li>
      <li className="w-full text-center md:w-auto">
        <Link
          href="#"
          className={`block py-1 md:py-2 px-3 md:px-7 rounded-md text-dark-900 hover:bg-primary-900 hover:text-white ${
            active === 3 ? "bg-primary-900 text-white" : ""
          }`}
          onClick={(e) => {
            e.preventDefault();
            onGridChange(3);
          }}
        >
          Tours
        </Link>
      </li>
    </ul>
  );
};

export default Side_Bar;

// <li
//   className={`${active === 0 ? "active" : ""}`}
//   onClick={() => onGridChange(0)}
// >
//   <Link href="/account-dashboard">
//     <span className="menu-icon">
//       <svg
//         width="25"
//         height="25"
//         viewBox="0 0 25 25"
//         fill="none"
//         xmlns="http://www.w3.org/2000/svg"
//       >
//         <path
//           d="M14.582 10.4167V22.9167H4.16536C3.61283 22.9167 3.08293 22.6972 2.69223 22.3065C2.30152 21.9158 2.08203 21.3859 2.08203 20.8333V10.4167H14.582Z"
//           fill="currentColor"
//         />
//         <path
//           d="M22.918 10.4167V20.8333C22.918 21.3859 22.6985 21.9158 22.3078 22.3065C21.9171 22.6972 21.3872 22.9167 20.8346 22.9167H16.668V10.4167H22.918Z"
//           fill="currentColor"
//         />
//         <path
//           d="M22.9154 4.16666V8.33333H2.08203V4.16666C2.08203 3.61413 2.30152 3.08422 2.69223 2.69352C3.08293 2.30282 3.61283 2.08333 4.16536 2.08333H20.832C21.3846 2.08333 21.9145 2.30282 22.3052 2.69352C22.6959 3.08422 22.9154 3.61413 22.9154 4.16666Z"
//           fill="currentColor"
//         />
//       </svg>
//     </span>
//     Dashboard
//   </Link>
// </li>;
