// import React, { useState } from "react";
// import { Dropdown } from "primereact/dropdown";

// export default function AnimatedDropdown() {
//   const [selectedCountry, setSelectedCountry] = useState(null);
//   const countries = [
//     { name: "Australia", code: "AU" },
//     { name: "Brazil", code: "BR" },
//     { name: "China", code: "CN" },
//     { name: "Egypt", code: "EG" },
//     { name: "France", code: "FR" },
//     { name: "Germany", code: "DE" },
//     { name: "India", code: "IN" },
//     { name: "Japan", code: "JP" },
//     { name: "Spain", code: "ES" },
//     { name: "United States", code: "US" },
//     { name: "United Kingdom", code: "GB" },
//   ];

//   const selectedCountryTemplate = (option, props) => {
//     if (option) {
//       return (
//         <div className="flex  bg-white  px-4  ">
//           <div className=" ">{option.name}</div>
//         </div>
//       );
//     }

//     return <span>{props.placeholder}</span>;
//   };

//   const countryOptionTemplate = (option) => {
//     return (
//       <div className="   w-[18rem]  h-full bg-white hover:bg-slate-400    px-4 py-3  ">
//         <div className="">{option.name}</div>
//       </div>
//     );
//   };

//   return (
//     <div className=" w-[19rem]  rounded-md bg-white px-4 py-3 ">
//       <Dropdown
//         value={selectedCountry}
//         onChange={(e) => setSelectedCountry(e.value)}
//         options={countries}
//         optionLabel="name"
//         placeholder="Select a Country"
//         valueTemplate={selectedCountryTemplate}
//         itemTemplate={countryOptionTemplate}
//         className="w-full -ml-8 rounded-md"
//       />
//     </div>
//   );
// }
