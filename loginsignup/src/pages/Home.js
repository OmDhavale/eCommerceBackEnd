import React,{ useEffect } from 'react'
import axios from 'axios'
import {useState} from 'react'
function Home() {
  const [categdata,setdata] = useState([
    { name: "Electronics", image: "https://tse1.mm.bing.net/th?id=OIG3.0bwtcjaDguDKveUfgV6I&pid=ImgGn" },
    { name: "Mens wear", image: "https://tse3.mm.bing.net/th?id=OIG1.IXbRk.6px7Qa7CnZ4Xps&pid=ImgGn" },
    { name: "Household", image: "https://tse4.mm.bing.net/th?id=OIG3.J9OJwDLGhNYya4bmd0Eb&pid=ImgGn" },
  ]);

  useEffect(()=>{
    axios.get("https://ecommercebackend-8lcw.onrender.com/get/categories")//for deploying
    //axios.get("http://localhost:4444/get/categories")
    .then((resp)=>{
      console.log(resp)
      setdata(resp.data)
    })
  },{})
  return (
    // <div>
    //   <h1>Home Page</h1>
    //   {categdata.map((data)=>{
    //     return <div>{data.name}</div>
    //   })}
    // </div>
    <div style={styles.container}>
      <h1>Home Page</h1>
      <div style={styles.grid}>
        {categdata.map((data, index) => (
          <div key={index} style={styles.card}>
            <img 
              src={data.image} 
              alt={data.name} 
              style={styles.image} 
            />
            <div style={styles.name}>{data.name}</div>
          </div>
        ))}
      </div>
    </div>


  )
}
const styles = {
  container: {
    padding: '20px',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
    gap: '20px',
  },
  card: {
    border: '1px solid #ccc',
    borderRadius: '8px',
    padding: '10px',
    textAlign: 'center',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#fff',
  },
  image: {
    width: '100%',
    height: '150px',
    objectFit: 'cover',
    borderRadius: '4px',
  },
  name: {
    marginTop: '10px',
    fontSize: '16px',
    fontWeight: 'bold',
  },
};



export default Home