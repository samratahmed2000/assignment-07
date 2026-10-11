// "use client";

// import { useState } from "react";
// import Link from "next/link";
// import { GiHamburgerMenu } from "react-icons/gi";
// import { IoClose } from "react-icons/io5";

// const ToggleButton = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <section>
//       <button
//         onClick={() => toggleMenu()}
//         className="lg:hidden p-2 text-gray-700 hover:bg-gray-100 rounded-md focus:outline-none transition-colors"
//         aria-label="Toggle Menu"
//       >
//         {isOpen ? (
//           <IoClose className="h-6 w-6 text-xl text-center" />
//         ) : (
//           <GiHamburgerMenu className="h-6 w-6 text-xl text-center" />
//         )}
//       </button>

//       <div
//         className={`${
//           isOpen ? "block" : "hidden"
//         } lg:flex flex-col lg:flex-row items-center w-full lg:w-auto gap-4 mt-4 lg:mt-0 text-sm`}
//       >
        
//       </div>
//     </section>
//   );
// };

// export default ToggleButton;


