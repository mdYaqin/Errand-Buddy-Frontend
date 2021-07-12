import React, { useState } from "react";
import Layout from "../../Layout";
// import { isAuthenticated } from "../../auth";
import { Link } from "react-router-dom";
import Errand_request from "./Errand_request";

const AddErrands = () => {
  //   const [{values, setValues}] = useState({
  //     itemName: "",
  //     description: "",
  //     price: "",
  //     categories: [],
  //     category: "",
  //     quantity: "",
  //     photo: "",
  //     address: "",
  //     createdErrand: "",
  //     FormData: "",
  //   });

  //  const { user, token } = isAuthenticated();
  //   const {
  //     itemName,
  //     description,
  //     price,
  //     categories,
  //     category,
  //     quantity,
  //     address,
  //     createdErrand,
  //     FormData,
  //   } = values;

  //   //load categories and set form data
  //   const init = () => {
  //        getCategories().then(data => {
  //            if(data.error) {
  //                 setValues({...values, error: data.error})
  //            } else {
  //                 setValues({...values, categories: data, formData: new FormData()})
  //            }
  //        })
  //   }

  //   useEffect (() => {
  //        init()
  //      //   setValues({...values, formData: new FormData()});
  //   }, [])

  //   const handleChange = name => event => {
  //        const value = name === 'photo' ? event.target.files[0] : event.target.value
  //        formData.set(name,value)
  //        setValues({...values, [name]: value})
  //   }

  //   const clickSubmit = (event) => {
  //        event.preventDefault()
  //        setValues({...values, error: ''})

  //        Errand_request(user._id, token, formData )
  //        .then(data => {
  //             if(data.error) {
  //                  setValues({...values, error:data.error})
  //             } else {
  //                  setValues ({
  //                       ...values,
  //                       name: '',
  //                       description: '',
  //                       photo: '',
  //                       price:'',
  //                       quantity:'',
  //                       createdErrand: data.name,
  //                  })
  //             }
  //        })

  //   }

  //   const newPostForm = () => {
  //     <form className="mb-3" onSubmit={clickSubmit}>
  //       <h4>Post Image</h4>
  //       <div className="form-group">
  //         <label className="btn btn-secondary">
  //           <input onChange={handleChange('image')} type="file" name="image" accept="image/*" />
  //         </label>
  //       </div>

  //       <div className="form-group">
  //       <label className="text-muted">Item name</label>
  //       <input onChange={handleChange('itemName')} type="text" className="form-control" value={itemName}/>

  //       </div>

  //       <div className="form-group">
  //       <label className="text-muted">Description</label>
  //       <textarea onChange={handleChange('description')} type="text" className="form-control" value={description}/>

  //       </div>

  //       <div className="form-group">
  //       <label className="text-muted">Price</label>
  //       <input onChange={handleChange('price')} type="number" className="form-control" value={price}/>

  //       </div>

  //       <div className="form-group">
  //       <label className="text-muted">Category</label>
  //       <select onChange={handleChange('category')}  className="form-control">
  //       <option>Select your Errands</option>
  //       {/* categories && categories.map((c, i) => {
  //           (<option key={i}
  //                value={c._id}>
  //                {c.name}
  //                </option>
  //                ))}

  //       }) */}
  //       <option value="Grocery">Grocery</option>
  //       <option value="Pickup">Pickup</option>
  //       <option value="Queue">Queue</option>
  //       <option value="Pet Sit">Pet-sit</option>
  //       <option value="Others">Others</option>

  //       </select>

  //       </div>

  //       <div className="form-group">
  //       <label className="text-muted">Quantity</label>
  //       <input onChange={handleChange('quantity')} type="number" className="form-control" value={quantity}/>

  //       </div>

  //       <div className="form-group">
  //       <label className="text-muted">Address</label>
  //       <input onChange={handleChange('address')} type="text" className="form-control" value={address}/>

  //       </div>

  //       <button className="btn btn-outline-primary">
  //            Create Errand
  //       </button>
  //     </form>;
  //   };

  //   const showError = () => {
  //        <div className="alert alert-danger"
  //         style={{display: error ? '' : 'none'}}>
  //             {error}
  //        </div>
  //   }

  //   const showSuccess = () => {
  //      <div className="alert alert-danger"
  //       style={{display: createdErrand ? '' : 'none'}}>
  //           <h2>{`${createdErrand}`} is created</h2>
  //      </div>
  // }

  return (
    <>
      <Layout title="Add a new product" description=" {Hi user!} ">
        {" "}
      </Layout>
      <div className="row">
        <div className="container">

             
          <form method="POST" action="">

        
            <select className="form-select-lg mb-3" aria-label=".form-select-lg example">
              <option selected> Select Categories</option>
              <option value="1">Grocery</option>
              <option value="2">Queue</option>
              <option value="3">Pet-sit</option>
              <option value="3">Others</option>
            </select>
           

            <div className="mb-3">
              <label for="item_name" className="form-label">
                Item Name
              </label>
              <input
                required
                type="text"
                className="form-control"
                id="item_name"
                name="item_name"
              />
            </div>
            <div className="mb-3">
              <label for="description" className="form-label">
                Description
              </label>
              <input
                required
                type="text"
                className="form-control"
                id="description"
                name="description"
              />
            </div>
            <div className="mb-3">
              <label for="formFileSm" className="form-label">
                Upload Image (Optional)
              </label>
              <input
                className="form-control form-control"
                id="form-control"
                type="file"
              />
            </div>

            <div className="mb-3">
              <label for="price" className="form-label">
                Price
              </label>
              <input
                required
                type="number"
                className="form-control"
                id="price"
                name="price"
              />
            </div>
            <div className="mb-3">
              <label for="quantity" className="form-label">
                Quantity
              </label>
              <input
                required
                type="number"
                className="form-control"
                id="quantity"
                name="quantity"
              />
            </div>

            <div className="mb-3">
              <label for="address" className="form-label">
                Address
              </label>
              <input
                required
                type="text"
                className="form-control"
                id="address"
                name="address"
              />
            </div>

            <br />

            <button className="btn btn-outline-primary mb-5">
              <Link to={`/user/payment`} className="navbar-item" href="">
                Add Errand
              </Link>
            </button>
          </form>
        </div>

        {/* <div className="col-md-8 offset-md-2">{newPostForm()}</div>
        <div className="col-md-8 offset-md-2">Hello</div> */}
      </div>
    </>
  );
};

export default AddErrands;
