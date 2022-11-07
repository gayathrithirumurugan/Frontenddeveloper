import { useState, useEffect } from "react"
import { Loading } from "../components"
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"
import "../components/Popup.css"
 function Capsulepopup(props)
 {
    
    const [capsulePopup, setCapsulePopup] = useState([])
    const { id } = useParams()
  
    useEffect(() => {
      const fetchCapsulePopup = async () => {
        const res = await fetch(`https://api.spacexdata.com/v4/capsules/${id}`)
        const data = await res.json()
        setCapsulePopup(data)
      }
  
      fetchCapsulePopup()
    }, [id])
    
    return(
        <>
        {!capsulePopup ? (
        <Loading />
        
      ) : (
        
        
        <div className="popup"> 
        <div className="popup-inner">
                  <ul>
                    <li className="text-xl font-bold mb-5 text-black">Type : {capsulePopup.type} </li>
                    <li className="text-xl font-bold mb-5 text-black">land landings : {capsulePopup.land_landings} </li>
                    <li className="text-xl font-bold mb-5 text-black">water landings : { capsulePopup.water_landings} </li>
                    <li className="text-xl font-bold mb-5 text-black">Reused {capsulePopup.reuse_count} times</li>
                    { capsulePopup.status === "active" ? (
                      <li className="text-emerald-500 mb-5 text-xl">Status : Active</li>
                    ) : (
                      <li className="text-rose-500 mb-5 text-xl">Status : Retired</li>
                    )}
                    <li className="mt-5 opacity-75 text-xl text-black">Last update : {capsulePopup.last_update}</li>
                  </ul><br></br>
                  <Link  to={`/capsules`}>
                  <button className="close-btn ">Close</button>
                  </Link>
                  </div>
                  </div>
              )}
        </>
    )
 }
 export default Capsulepopup;