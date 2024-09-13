import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from '../../../public/Images/logo.png';
import Swal from 'sweetalert2';


function login() {

  const [input_useremail, setInput_Useremail] = useState('');
  const [input_password, setInput_Password] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const useremail = 'admin@admin.com';
  const password = 'password';
  const username = 'Admin';

  const LoginHandle = (event) =>{
    event.preventDefault();
    const localStorage_useremail = localStorage.getItem("useremail");
    const localStorage_password = localStorage.getItem("password");
    const localStorage_username = localStorage.getItem("username");
    
    if(useremail === input_useremail && password === input_password){
      setLoading(true)

      setTimeout(() =>{
        setLoading(false);
        navigate('/home');
        localStorage.setItem("useremail", useremail);
        localStorage.setItem("username", username);
        sessionStorage.setItem("username",username );
      },2000)
      const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
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

      // for registered users

    }else if(input_password === localStorage_password && input_useremail === localStorage_useremail ){ 
      setLoading(true)
      sessionStorage.setItem("username",localStorage_username );
      sessionStorage.setItem("useremail", localStorage_useremail);
      setTimeout(() =>{
        setLoading(false);
        navigate('/home');
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
        icon: "error",
        title: "Signed in successfully"
      });
      setError('Invalid Username or Password!!')
    }
    // console.log(username,password)
  }

  if(loading){
    return <div className="loading">Loading&#8230;</div>;
  }
 
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
            <form onSubmit={LoginHandle}>
              <div className="login_text text-center mb-5">
                <div className="h3 fw-bold">Login</div>
              </div>
              <div className="input_fields px-3">
                <input
                  className="form-control rounded-5 w-100 py-2 px-3 mb-4"
                  type="email"
                  placeholder="Username"
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
                <div className=" d-flex justify-content-between px-3">
                  <div className="remember_check_box d-flex align-items-center">
                    <input className="me-2 form-check-input" type="checkbox" name="remember" id="remember" />{" "}
                    <label htmlFor="remember" className="form-check-label">Remember me</label>
                  </div>
                  <div className="forget_password">
                    <small>
                      <Link to="/forget-password" className="text-black">Forget Password?</Link>
                    </small>
                  </div>
                </div>
                <div className="login_btn my-4">
                  <button
                    className="btn btn-warning fw-bold w-100 rounded-4 shadow-sm"
                    type="submit"
                  >
                    Login
                  </button>
                </div>
                <div className="register_link d-flex justify-content-around">
                  <p>Don't Have an Account?</p>
                  <Link to="/register">Register Now</Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default login;
