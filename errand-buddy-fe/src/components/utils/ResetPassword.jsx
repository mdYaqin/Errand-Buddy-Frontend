import React, { useState } from 'react';
import { Link, Redirect, useHistory } from "react-router-dom";
import axios from 'axios';

function ResetPassword(props) {

        //     const [values, setValues] = useState({
        //         password: "",
        //         password2: "",
        //     });

        // // const {id} 

        // // const history = useHistory();

        // const { password, password2 } = values;

        // const handleChange = (name) => (event) => {
        //     setValues({ ...values, [name]: event.target.value });
        // };

        // const clickSubmit = (event) => {
        //     event.preventDefault();

        //     if(password !== password2) { 
        //         alert('Passwords do not match') 
        //         return
        //     }

        //     axios
        //     .post("http://localhost:4000/api/users/reset-password/submit", {

        //         id: email,
        //         password: password,
        //         password2: password2,
        //     })
        //     .then((response) => {

        //         if (response.data.success) {
        //             history.push("/login")
        //         }
                
        //     }).catch((error) => {
        //         console.log('error')
        //     })
            
        // };

        // return (
        //     <div className="container mt-5 mb-5">
        //     <div className="row d-flex align-items-center justify-content-center">
        //         <div className="add-container">
        //             <h1 className="register-header mt-3">
        //             Reset Password
        //             </h1>            
        //             <div className="outer registration mb-3">
        //             <i className="fa fa-envelope"/>
        //             <input
        //                 type="email"
        //                 className="input"
        //                 value={email}
        //                 placeholder="Email Address"
        //             />
        //             </div>

        //             <div className="outer registration mb-3">
        //             <i className="fa fa-lock"></i>
        //             <input
        //                 onChange={handleChange("password")}
        //                 type="password"
        //                 className="input"
        //                 value={password}
        //                 placeholder="Password"
        //             />
        //             </div>

        //             <div className="outer registration mb-3">
        //             <i className="fa fa-lock"></i>
        //             <input
        //                 onChange={handleChange("password2")}
        //                 type="password"
        //                 className="input"
        //                 value={password2}
        //                 placeholder="Confirm Password"
        //             />
        //             </div>
        //             <div className="register-button">
        //             <button
        //                 onClick={clickSubmit}
        //                 className="btn btn-primary mt-4 signup"
        //             >
        //                 Reset Password
        //             </button>
        //             </div>
                
        //         </div>
        //     </div>
        //     </div>
        // );
    
}

export default ResetPassword;