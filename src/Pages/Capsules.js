import { useState, useEffect } from "react"
import { Loading } from "../components"
import { Link } from "react-router-dom"
//import Capsulepopup from "./Capsulepopup"


function Capsules() {
  const [capsules, setCapsules] = useState([])
  

  useEffect(() => {
    const fetchCapsules = async () => {
      const res = await fetch("https://api.spacexdata.com/v4/capsules")
      const data = await res.json()
      setCapsules(data)
    }

    fetchCapsules()
  }, [])

  return (
    <>
      {!capsules ? (
        <Loading />
      ) : (
        <section className="py-32">
          <h1 className="heading text-center mb-10">Capsules</h1>
          
          <div className="max-width grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 px-5">
            {capsules.map(
              ({
                id,
                type,
                // status,
                serial,
                // launches,
                // last_update,
                // land_landings,
                // water_landings,
                // reuse_count,
              }) => (
                // <Link key={id} to={`/capsules/${id}`}>
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
                // </Link>
              )
            )}
          </div>
        </section>
      )}
    </>
  )
}

export default Capsules;