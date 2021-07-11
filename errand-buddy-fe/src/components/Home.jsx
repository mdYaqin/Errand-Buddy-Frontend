import React, {useState} from "react";
import { Link } from "react-router-dom";
import arrData from '../Data'
import Layout from './Layout'
import {addErrand} from './pages/users/ApiCore'

const Home = () => {

  // const[]= [errandByOffer, setErrandbyOffer] = useState([])
  // const[]= [errandByArrival, setErrandbyArrival] = useState([])


  // const loadErrandByOffer = () => {
  //   addErrand('sold')
  //   .then(data => {
  //     if(data.error) {
  //       setError(data.error)
  //     } else {
  //       setErrandbyOffer(data)
  //     }
  //   })
  // }


  // const loadErrandByArrival = () => {
  //   addErrand('createdAt')
  //   .then(data => {
  //     if(data.error) {
  //       setError(data.error)
  //     } else {
  //       setErrandbyArrival(data)
  //     }
  //   })
  // }

  // useEffect(() => {
  //   loadErrandByArrival()
  //   loadErrandByOffer()

  // }, [])

const [data, setData] = useState(arrData)
  return (  
    <>
  <Layout title="Errand Buddy" 
  description="Let us share your errands today.">
    {/* {JSON.stringify(errandByArrival)}
    <hr/>
    {JSON.stringify{errandByOffer}} */}

  </Layout>

    <div class="container-fluid mt-5 ">
      <h2 className="mb-4">Latest Errand! </h2>
      <div class="row">
          {data.map(e => (
              <div class="col-4 mb-3" key={e.id}>
              <div class="card-header" style={{ width: `25rem` }}>
                <img
                  src={e.image}
                  class="card-img-top"
                  alt="..."
                />
                <div class="card-body" style={{boxShadow: `5px 5px 15px orange`}}> 
                <h4 class="card-subtitle mb-4 text-muted">{e.Time}</h4>
                  <p class="card-header">Category: {e.categories}</p>
                  <p>Fare: {e.price}</p>
                  <p>{e.createdBy}</p>
                  <p>{e.createdAt}</p>
                  <p>
                    Name : {e.name} <br /> Item : {e.item}
                  </p>
                 
                
                  <button className="btn btn-outline-primary mt-2 mb-2">
                  <Link to={{pathname:`/buddy/${e.id}`, state:{e}}} className="" href="">Show Errand</Link>
                  </button>
                </div>
              </div>
            </div>

          ))}

        
        </div>
        </div>
        
        </>
    
  )
};

export default Home;