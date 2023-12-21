import axios from 'axios'
import React, { useEffect } from 'react'

const Details = () => {

  const [data, setData] = React.useState([])

  useEffect(() => {
    console.log("Details")
    const data=axios.get("http://localhost:3000/api/club").then((res) => {
      console.log(res);
      setData(res.data);
    } )
  } , [])

  return (
    <div>
      <h1>Details</h1>
      <div>
        {data.map((item) => {
          return (
            <div>
              {/* <h1>{item.name}</h1>
              <h1>{item.description}</h1>
              <h1>{item.image}</h1> */}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Details