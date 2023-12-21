import axios from 'axios'
import React, { useEffect } from 'react'
import Sidebar from './Sidebar'
import Form from './Form'

const Details = () => {

  const [data, setData] = React.useState([])

  useEffect(() => {
    console.log("Details")
    const data=axios.get("http://localhost:3000/api/club").then((res) => {
      console.log(res);
      setData(res.data);
    } )
  },[] )

  return (
    <div
    className=" px-4    justify-center  gap-16   h-[100vh] flex items-center"
    style={{
      background: `linear-gradient(0deg, rgba(87,25,43,1) 0%, rgba(15,21,73,0.9332107843137255) 100%, rgba(75,38,72,1) 100%)`,
    }}
  >
    <Sidebar />
    <div className="bg-[#9A94EB]/30  w-[75%] h-[90%] rounded-3xl  py-4 flex">

      {
        data && data.map((item, index) => (
          <div key={index}>
            {/* Render your data here. For example: */}
            <h1>{item.ClubName}</h1>
            <p>{item.fullName}</p>
            <p>{item.email}</p>
            {/* Add more fields as needed */}
          </div>
        ))
      }
      </div>

  </div>
  )
}

export default Details