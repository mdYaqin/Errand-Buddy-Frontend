import React, {useState} from "react";
import { Link } from "react-router-dom";
import arrData from '../Data'
import Layout from './Layout'

const Home = () => {
    const [data, setData] = useState(arrData)
  return (  
    <>
  <Layout title="Errand Buddy" description="You rest we do"></Layout>
    <div class="container mx-auto mt-4">
      <div class="row">
          {data.map(e => (
              <div class="col-md-4" key={e.id}>
              <div class="card" style={{ width: `18rem` }}>
                <img
                  src={e.image}
                  class="card-img-top"
                  alt="..."
                />
                <div class="card-body">
                  <h5 class="card-title">{e.categories}</h5>
                  <div class="d-flex p-2 bd-highlight justify-content-between">

                  <div>
                    {e.price}
                    </div>
                    <div>
                      {e.createdBy}
                    </div>
</div>
                  <h6 class="card-subtitle mb-2 text-muted">{e.Time}</h6>
                  <p class="card-text">
                    Name : {e.name} <br /> Item : {e.item}
                  </p>
                  <button type="button" class="btn btn-success">
                  <Link to={{pathname:`/buddy/${e.id}`, state:{e}}} className="navbar-item" href="">Click for details</Link>
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
