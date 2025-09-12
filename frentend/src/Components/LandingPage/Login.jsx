import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // ✅ Import useNavigate

// Validation schema
const loginSchema = yup.object().shape({
  userId: yup.string().required("User ID is required"),
  password: yup.string()
    .length(8, "Password must be 8 characters")
    .required("Password is required"),
});

function Login() {
  const navigate = useNavigate(); // ✅ Navigate hook
  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: yupResolver(loginSchema)
  });

  const onSubmit = async (data) => {
    try {
      const res = await axios.post("http://localhost:5000/login", data);

      alert(`Welcome ${res.data.user.name}!`);
      console.log("Login Response:", res.data); // Debugging
      reset();

      // ✅ Redirect to home page
      navigate('/'); 
      
    } catch (error) {
      if (error.response) {
        alert("Error: " + error.response.data.message);
      } else {
        alert("Something went wrong!");
      }
      console.error(error);
    }
  };

  return (
    <div className="bg-body-tertiary min-vh-100 py-5 d-flex align-items-center">
      <div className="container">
        <h1 className='text-center'>
          User <span className='text-success'>Login</span>
        </h1>
        <p className='text-center mb-4'>
          Enter your UserID and Password to login.
        </p>

        <div className="row">
          <div className="col-sm-6 mx-auto">
            <form onSubmit={handleSubmit(onSubmit)} className="p-4 bg-white rounded shadow">

              <span>User ID</span>
              <input
                type="text"
                {...register("userId")}
                className="form-control mb-2"
                placeholder="Enter Your UserID"
              />
              {errors.userId && <p className="text-danger mb-2">{errors.userId.message}</p>}

              <span>Password</span>
              <input
                type="password"
                {...register("password")}
                className="form-control mb-2"
                placeholder="Enter Your 8-character Password"
                maxLength={8}
              />
              {errors.password && <p className="text-danger mb-2">{errors.password.message}</p>}

              <input
                type="submit"
                value="Login"
                className="w-100 my-2 form-control btn btn-warning text-white"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
