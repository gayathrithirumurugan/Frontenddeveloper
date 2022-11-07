//import { render } from '@testing-library/react'
import axios from 'axios'
import React from 'react'
import {useState} from 'react'
import { Link } from "react-router-dom"
import { Loading } from "../components"
function Capsulesearch() {
const [status,setStatus]=useState()
const [type,setType]=useState()
const [capsules,setCapsules]=useState()
const handleSubmit= (e) => {
   e.preventDefault();
   
   let data= new FormData();
  data.append("Status",status);
  data.append("Type",type);
  const url="http://localhost/search.php/";
  axios.post(url,data).then(
    (result)=>{
      setCapsules(result.data);
    }
    ).catch(err=> console.log(err))
   
}


  
  return (
    <div>
    <section className="py-32">
    <h1 className="heading text-center mb-10">Capsules Search</h1>
    <br></br><br></br>
    
     <div className="text-white max-width grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 px-5">
     
      <label> Status <input type="text" value={status}className="text-black px-2 py-2" onChange={e=>{setStatus(e.target.value);setCapsules()}} /> 
         </label>
      <label> Type <input type="text"  value={type}className='text-black px-2 py-2' onChange={e=>{setType(e.target.value);setCapsules()}} />
        </label>
        <button className='btn' value='Searchval' onClick={e => {handleSubmit(e) }}>Search</button> 
    </div>
    {!capsules ? (
        <Loading />
      ) : (
      
    <div className="max-width grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 px-5">
            {capsules.map(
              ({
                id,
                type,
               serial,
              }) => (
                
                <article key={id} className="articles">
                  <h2 className="text-xl font-bold mb-5">
                    {type},{" "}
                    <span className="text-base opacity-75 font-light">
                      {serial}
                    </span>
                  </h2>
                  <Link key={id} to={`/capsules/${id}`}>
                  <button className="btn">Read more</button>
                  </Link>
                  
                </article>
            )
            )}
          </div>
      )}
    
    </section>
    
    
   
    </div>
  );

}
export default Capsulesearch;