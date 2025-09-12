import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

// Validation schema
const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  college: yup.string().required("College Name is required"),
  passingYear: yup.string().required("Please select your passing year"),
  trainingType: yup.string().required("Please select a training type"),
  course: yup.string().required("Please select a course"),
  mobile: yup.string()
    .required("Mobile number is required")
    .matches(/^[0-9]{10}$/, "Enter a valid 10-digit number"),
});

function Registration() {
  const navigate = useNavigate();

  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: yupResolver(schema),
    defaultValues: { pay: 500 }
  });

  const onSubmit = async (data) => {
    try {
      const res = await axios.post("http://localhost:5000/register", {
        name: data.name,
        emailID: data.email,
        collegeName: data.college,
        passingYear: data.passingYear,
        trainingType: data.trainingType,
        course: data.course,
        mobileNo: data.mobile,
        pay: data.pay
      });

      alert(`Registration successful!\nUserId: ${res.data.userId}\nPassword: ${res.data.password}`);

      // Reset form
      reset({ pay: 500 });

      // Redirect to login page
      navigate('/login');
    } catch (err) {
      console.error(err);
      alert(err.response?.data?.message || "Something went wrong!");
    }
  };

  return (
    <div className="bg-body-tertiary min-vh-100 py-5 d-flex align-items-center">
      <div className="container">
        <h1 className='text-center'>
          Register <span className='text-success'>with Us</span>
        </h1>
        <p className='text-center mb-4'>
          Join DevPath and take your skills to next level.
        </p>

        <div className="row">
          <div className="col-sm-6 mx-auto">
            <form onSubmit={handleSubmit(onSubmit)} className="p-4 bg-white rounded shadow">
              
              <span>Name</span>
              <input type="text" {...register("name")} className="form-control mb-2" placeholder="Enter Your Name" />
              {errors.name && <p className="text-danger mb-2">{errors.name.message}</p>}

              <span>Email</span>
              <input type="text" {...register("email")} className="form-control mb-2" placeholder="Enter Your Email" />
              {errors.email && <p className="text-danger mb-2">{errors.email.message}</p>}

              <span>College Name</span>
              <input type="text" {...register("college")} className="form-control mb-2" placeholder="Enter Your College Name" />
              {errors.college && <p className="text-danger mb-2">{errors.college.message}</p>}

              <span>Passing Year</span>
              <select {...register("passingYear")} className="form-control mb-2">
                <option value="">Select Year</option>
                <option value="1st Year">1st Year</option>
                <option value="2nd Year">2nd Year</option>
                <option value="3rd Year">3rd Year</option>
                <option value="4th Year">4th Year</option>
              </select>
              {errors.passingYear && <p className="text-danger mb-2">{errors.passingYear.message}</p>}

              <span>Training Type</span>
              <select {...register("trainingType")} className="form-control mb-2">
                <option value="">Select Training</option>
                <option value="Summer Training (CS/IT)">Summer Training (CS/IT)</option>
                <option value="Winter Training (CS/IT)">Winter Training (CS/IT)</option>
              </select>
              {errors.trainingType && <p className="text-danger mb-2">{errors.trainingType.message}</p>}

              <span>Course</span>
              <select {...register("course")} className="form-control mb-2">
                <option value="">Select Course</option>
                <option value="Diploma (CS/IT)">Diploma (CS/IT)</option>
                <option value="B.Tech (CS/IT)">B.Tech (CS/IT)</option>
                <option value="BCA">BCA</option>
                <option value="MCA">MCA</option>
              </select>
              {errors.course && <p className="text-danger mb-2">{errors.course.message}</p>}

              <span>Mobile No</span>
              <input type="text" {...register("mobile")} className="form-control mb-2" placeholder="Enter Your Mobile Number" />
              {errors.mobile && <p className="text-danger mb-2">{errors.mobile.message}</p>}

              <input type="submit" value="Register" className="w-100 my-2 form-control btn btn-warning text-white" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Registration;
