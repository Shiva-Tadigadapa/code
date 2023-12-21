import React from 'react';
import Sidebar from './Sidebar';
import Form from './Form';

function Dash() {
  const gradient = `background: rgb(87,25,43);
   background: linear-gradient(0deg, rgba(87,25,43,1) 0%, rgba(15,21,73,0.9332107843137255) 100%, rgba(75,38,72,1) 100%);`;

  return (
    <div
      className=" px-4    justify-center  gap-16   h-[100vh] flex items-center"
      style={{
        background: `linear-gradient(0deg, rgba(87,25,43,1) 0%, rgba(15,21,73,0.9332107843137255) 100%, rgba(75,38,72,1) 100%)`,
      }}
    >
      <Sidebar />
      <Form />
    </div>
  );
}

export default Dash;