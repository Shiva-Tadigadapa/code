import React from "react";
import { useDropzone } from "react-dropzone";
import { IoMdCloudUpload } from "react-icons/io";

function ReactDrag(props) {
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone();

  const files = acceptedFiles.map((file) => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));
  console.log(files);

  return (
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
  );
}

export default ReactDrag;
