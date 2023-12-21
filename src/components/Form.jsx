import React from "react";
// import AnimatedDropdown from "./AnimatedDropdown";
// import ReactDrag from "./ReactDrag";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";
import { useState } from "react";
import { Dropdown } from "primereact/dropdown";
import { useDropzone } from "react-dropzone";
import { IoMdCloudUpload } from "react-icons/io";

const Form = () => {
  const [ClubName, setclubName] = useState(null);
  // const [toast, setToast] = useState(false);
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    rollNo: "",
    year: "",
    link: "", // Added for the "Enter Link" input
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    console.log(formData);
  };

  const countries = [
    { name: "Australia", code: "AU" },
    { name: "Brazil", code: "BR" },
    { name: "China", code: "CN" },
    { name: "Egypt", code: "EG" },
    { name: "France", code: "FR" },
    { name: "Germany", code: "DE" },
    { name: "India", code: "IN" },
    { name: "Japan", code: "JP" },
    { name: "Spain", code: "ES" },
    { name: "United States", code: "US" },
    { name: "United Kingdom", code: "GB" },
    { name: "Russia", code: "RU" },
  ];
  console.log(ClubName);
  const selectedCountryTemplate = (option) => {
    if (option) {
      return (
        <div className="flex bg-white px-4">
          <div>{option.name}</div>
        </div>
      );
    }

    return <span>Select a Country</span>;
  };

  const countryOptionTemplate = (option, props) => {
    return (
      <div className="    w-[20rem]   h-full bg-white hover:bg-slate-400    px-4 py-3  ">
        <div className="">{option.name}</div>
      </div>
    );
  };

  const files = acceptedFiles.map((file) => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));
  const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const formDataToSend = new FormData();
        formDataToSend.append('file', files);
        formDataToSend.append('ClubName', ClubName.name);
        formDataToSend.append('fullName', formData.fullName);
        formDataToSend.append('email', formData.email);
        formDataToSend.append('rollNo', formData.rollNo);
        formDataToSend.append('year', formData.year);
        formDataToSend.append('link', formData.link);
        
        const response = await axios.post("http://localhost:3000/api/submit", formDataToSend).then((res) => {
          console.log(res);
          toast.success('Form submitted successfully');
        });
    
    
      } catch (error) {
        console.error("Error submitting form", error);
        toast.error('Error submitting form');
      }
  };
  

  return (
    <div className="bg-[#9A94EB]/30  w-[75%] h-[90%] rounded-3xl  py-4 flex">
      <div className=" text-white/90  px-6 flex  flex-col items-start ">
        <h1 className="text-2xl text-center text-white font-bold">
          Personal Details Form
        </h1>
        <div className="flex  justify-center items-center  gap-20 mt-14">
          <div className=" flex  flex-col   gap-10">
            <div className=" flex  gap-10">
              <div className="flex flex-col items-start">
                <h1 className="ml-2 text-xl pb-2 font-semibold">Full Name</h1>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="bg-white  outline-none text-black px-8 py-3 rounded-lg"
                  placeholder="Name"
                />
              </div>
              <div className="flex flex-col items-start">
                <h1 className="ml-2 text-xl pb-2  font-semibold">Email</h1>
                <input
                  type="text"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="bg-white outline-none text-black px-8 py-3 rounded-lg"
                  placeholder="Email"
                />
              </div>
            </div>

            <div className="  flex  gap-10">
              <div className="flex flex-col items-start">
                <h1 className="ml-2 text-xl pb-2 font-semibold">Roll No</h1>
                <input
                  type="text"
                  name="rollNo"
                  value={formData.rollNo}
                  onChange={handleChange}
                  className="bg-white outline-none text-black px-8 py-3 rounded-lg"
                  placeholder="Roll No"
                />
              </div>
              <div className="flex flex-col items-start">
                <h1 className="ml-2 text-xl pb-2 font-semibold">Year</h1>
                <input
                  type="text"
                  name="year"
                  value={formData.year}
                  onChange={handleChange}
                  className="bg-white outline-none text-black px-8 py-3 rounded-lg"
                  placeholder="Year"
                />
              </div>
            </div>

            <div className="  text-black">
              <div className="flex flex-col  items-center justify-center">
                <h1 className="ml-2 text-xl pb-2 text-white/90  font-semibold">
                  Enter Your Club Name
                </h1>
                <div className=" w-[21rem]    rounded-md bg-white  py-3 ">
                  <Dropdown
                    value={ClubName}
                    onChange={(e) => setclubName(e.value)}
                    options={countries}
                    optionLabel="name"
                    placeholder="Select a Country"
                    valueTemplate={selectedCountryTemplate}
                    itemTemplate={countryOptionTemplate}
                    className="w-full px-4   rounded-md"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className=" flex flex-col gap-5">
            <h1 className="text-2xl">Upload Your CV/Resume</h1>
            <section className=" bg-white/20 px-20 py-20 rounded-md  outline-dashed outline-gray-400">
              <div
                {...getRootProps({ className: "dropzone" })}
                className="flex flex-col items-center"
              >
                <input {...getInputProps()} />
                <p>Upload Your CV/Resume</p>
                <IoMdCloudUpload className="  text-4xl mt-2 text-white-600" />
              </div>
              <aside>
                <ul>{files}</ul>
              </aside>
            </section>

            <div>
              <h1 className="text-2xl">OR</h1>
              <input
                type="text"
                name="link"
                value={formData.link}
                onChange={handleChange}
                className="bg-white text-black mt-5 outline-none  w-[20rem] px-6 py-3 rounded-sm"
                placeholder="Enter Link"
              />
            </div>
          </div>
        </div>
          <button className="bg-white text-black px-8 py-3 ml-52 rounded-lg"onClick={handleSubmit}>
            Submit
          </button>
      </div>
      {/* // <ToastContainer /> */}
    </div>
  );
};

export default Form;
