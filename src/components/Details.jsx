import axios from 'axios'
import React, { useEffect } from 'react'
import Sidebar from './Sidebar'
import Form from './Form'

const Details = () => {

  const [data, setData] = React.useState([])

  useEffect(() => {
    console.log("Details")
    const data=axios.get("https://kokokokoko-d299.onrender.com/api/club").then((res) => {
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
          <div key={index} className=" p-3 bg-black/50   flex flex-col items-center justify-between   text-white text-xl font-bold   ">
            {/* <div className='bg-black/50 flex'> */}
            {index+1}
            {/* Render your data here. For example: */}
            <p>{item.fullName}</p>
            <p>{item.email}</p>
            <p>{item.rollNo}</p>
            <p>{item.year}</p>
            <h1>{item.ClubName}</h1>
            <h1>{item.link}</h1>
            {/* </div> */}
            {/* Add more fields as needed */}
          </div>
        ))
      }
      </div>

  </div>
  )
}

export default Details