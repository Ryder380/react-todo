import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from '../../../public/Images/logo.png';
import Swal from 'sweetalert2';


function index() {

  const [input_username, setInput_Username] = useState('');
  const [input_useremail, setInput_Useremail] = useState('');
  const [input_password, setInput_Password] = useState('');
  const [input_confirmation_password, setInput_Confirmation_Password] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

const RegisterHandle = (event) => {
  event.preventDefault();

  if(input_password === input_confirmation_password ){
    setLoading(true)
   

    setTimeout(() =>{
      setLoading(false);
      
      localStorage.setItem("username", input_username);
      localStorage.setItem("useremail", input_useremail);
      localStorage.setItem("password", input_password);

      navigate('/');

    },2000)
    const Toast = Swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 1500,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.onmouseenter = Swal.stopTimer;
        toast.onmouseleave = Swal.resumeTimer;
      }
    });
    Toast.fire({
      icon: "success",
      title: "Signed in successfully"
    });
    
  }else{
    setError("Password does not match")
  }
}
if(loading){
  return <div className="loading">Loading&#8230;</div>;
}

  return (
    <div>
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
            <form onSubmit={RegisterHandle}>
              <div className="login_text text-center mb-5">
                <div className="h3 fw-bold">Register</div>
              </div>
              <div className="input_fields px-3">
                <input
                  className="form-control rounded-5 w-100 py-2 px-3 mb-4"
                  type="name"
                  placeholder="Username"
                  onChange={(e) =>setInput_Username(e.target.value) }
                  required
                />
                <input
                  className="form-control rounded-5 w-100 py-2 px-3 mb-4"
                  type="email"
                  placeholder="Enter your email"
                  onChange={(e) =>setInput_Useremail(e.target.value) }
                  required
                />
                <input
                  className="form-control rounded-5 w-100 py-2 px-3 mb-4"
                  type="password"
                  placeholder="Password"
                  onChange={(e) =>setInput_Password(e.target.value) }
                  required
                />
                <p className="text-danger px-2 py-0">{error}</p>
                <input
                  className="form-control rounded-5 w-100 py-2 px-3 mb-4"
                  type="password"
                  placeholder="Confirm Password"
                  onChange={(e) =>setInput_Confirmation_Password(e.target.value) }
                  required
                />
                <div className="login_btn my-4">
                  <button
                    className="btn btn-warning fw-bold w-100 rounded-4 shadow-sm"
                    type="submit"
                  >
                    Register
                  </button>
                </div>
                <div className="register_link d-flex justify-content-around">
                  <p>Have an Account?</p>
                  <Link to="/">Sign in</Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default index
