import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from '../../../public/Images/logo.png';
import Swal from 'sweetalert2';


function ForgetPassword() {
 
  return (
    <div>
      <div className="container-fluid login_container d-flex justify-content-center align-items-center">
        <div className="login_form border bg-white rounded-5 border shadow-sm p-4">
          <div>
            <div className="image_section text-center mb-3">
              <img
                src={Logo}
                height={80}
                width={80}
                alt="Logo"
              />
            </div>
            <form>
              <div className="login_text text-center mb-5">
                <div className="h3 fw-bold">Forget Password</div>
              </div>
              <div className="input_fields px-3">
                <input
                  className="form-control rounded-5 w-100 py-2 px-3 mb-4"
                  type="email"
                  placeholder="Enter your email"
                  
                  required
                />
                <div className="login_btn my-4">
                  <button
                    className="btn btn-warning fw-bold w-100 rounded-4 shadow-sm"
                    type="submit"
                  >
                    Genarate Link
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ForgetPassword;
