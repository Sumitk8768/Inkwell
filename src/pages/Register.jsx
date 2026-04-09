import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { Auth } from "../context/AuthContext";
import { toast } from "react-toastify";
import { useState } from "react";
import { useEffect } from "react";

const Register = () => {
  let navigate = useNavigate();
const [selectedRole, setSelectedRole] = useState('Reader');


  let { setRegisterUsers, registerUsers, setLoggedInUser } = useContext(Auth);

  let {
    register,
    handleSubmit,
    reset,
    watch,
    setValue,
    formState: { errors, isValid },
  } = useForm();

  useEffect(() => {
  setValue('role', selectedRole);
}, [selectedRole, setValue]);

  const password = watch("password");

  let handleFormSubmit = (data) => {
  
    let newUser = [...registerUsers, data];
    setLoggedInUser(data);
    localStorage.setItem("log user", JSON.stringify(data));
    setRegisterUsers(newUser);
    localStorage.setItem("reg users", JSON.stringify(newUser));
    toast.success("User registered successfully");
    reset();
    navigate("/");
  };

  return (
    <div>
      <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
        <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm w-full max-w-120 flex flex-col items-center">
          <div className="bg-[#0056A4] w-14 h-14 rounded-full flex items-center justify-center mb-6 shadow-inner">
            <i className="ri-quill-pen-line text-white text-3xl"></i>
          </div>

          <h1 className="text-2xl font-bold text-gray-900 mb-1">
            Create an Account
          </h1>
          <p className="text-gray-500 text-sm mb-8">
            Join Inkwell to start reading or writing
          </p>

          <form
            className="w-full space-y-4"
            onSubmit={handleSubmit(handleFormSubmit)}
          >
            {/* Name */}
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-semibold">Name</label>
              <input
                {...register("name", {
                  required: "name is required",
                })}
                id="name"
                type="text"
                placeholder="Sumit kumar"
                className="w-full border rounded-lg px-4 py-2.5 outline-none focus:border-[#0056A4] "
              />
              {errors.name && (
                <p className="text-red-600">{errors.name.message}</p>
              )}
            </div>
{/* Email */}
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-semibold ">Email</label>
              <input
                {...register("email", {
                  required: "Email is required",
                })}
                id="email"
                type="email"
                placeholder="Sumit@gmail.com"
                className="w-full border rounded-lg px-4 py-2.5 outline-none focus:border-[#0056A4] "
              />
              {errors.email && (
                <p className="text-red-600">{errors.email.message}</p>
              )}
            </div>
{/* Password */}
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-semibold ">Password</label>
              <input
                {...register("password", {
                  required: "Password is required",
                })}
                id="password"
                type="password"
                placeholder="Create a password"
                className="w-full border rounded-lg px-4 py-2.5 outline-none focus:border-[#0056A4] "
              />
              {errors.password && (
                <p className="text-red-600">{errors.password.message}</p>
              )}
            </div>

            {/* Confirm password */}

            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-semibold ">Confirm Password</label>
              <input
                {...register("confirmPassword", {
                  required: "Password is required",
                  validate: (value) =>
                    value === password || "Passwords do not match",
                })}
                id="password"
                type="password"
                placeholder="Confirm your password"
                className="w-full border rounded-lg px-4 py-2.5 outline-none focus:border-[#0056A4] "
              />
              {errors.confirmPassword && (
                <p className="text-red-600">{errors.confirmPassword.message}</p>
              )}
            </div>

            {/* {Account Type} */}
         
        <div className="mt-4">
  <h3 className="text-left font-bold mb-3">Account Type</h3>
  <div className="flex gap-4">
    
    {/* Reader Card */}
    <div 
      onClick={() => setSelectedRole('Reader')}
      className={`flex-1 cursor-pointer p-4 rounded-xl border-2 transition-all text-center
        ${selectedRole === 'Reader' 
          ? 'border-[#0056A4] bg-blue-50' 
          : 'border-gray-100 bg-white'}`}
    >
      <h4 className="font-semibold text-lg">Reader</h4>
      <p className="text-gray-400 text-sm">Read articles</p>
    </div>

    {/* Author Card */}
    <div 
      onClick={() => setSelectedRole('Author')}
      className={`flex-1 cursor-pointer p-4 rounded-xl border-2 transition-all text-center
        ${selectedRole === 'Author' 
          ? 'border-[#0056A4] bg-blue-50' 
          : 'border-gray-100 bg-white'}`}
    >
      <h4 className="font-semibold text-lg">Author</h4>
      <p className="text-gray-400 text-sm">Write & publish</p>
    </div>

  </div>
</div>

            <button
              type="submit"
              className="w-full bg-[#0056A4] text-white font-semibold py-3 rounded-lg hover:bg-blue-800 transition-colors mt-4 text-sm"
            >
              Create Account
            </button>
          </form>

          <p className="mt-6 text-gray-500 text-[13px]">
            Already have an account?{" "}
            <span
              className="text-[#0056A4] font-medium cursor-pointer hover:underline"
              onClick={() => {
                navigate("/auth");
              }}
            >
              Sign in
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
