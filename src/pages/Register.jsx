import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { Auth } from "../context/AuthContext";
import { toast } from "react-toastify";

const Register = () => {
  let navigate = useNavigate();
  
 let {setRegisterUsers, registerUsers} = useContext(Auth);

  let {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors, isValid },
  } = useForm();

    const password = watch("password");

  let handleFormSubmit = (data) => {
    
    let newUser = [...(registerUsers), data]
    console.log(newUser)
    setRegisterUsers(newUser)
    localStorage.setItem("reg users", JSON.stringify(newUser))
    toast.success("User registered successfully")
    reset()
    navigate('/')
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

          <form className="w-full space-y-4"
          onSubmit={handleSubmit(handleFormSubmit)}
          >
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
              {errors.name && <p className="text-red-600">{errors.name.message}</p>}
            </div>

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
              {errors.email && <p className="text-red-600">{errors.email.message}</p>}
            </div>

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
              {errors.password && <p className="text-red-600">{errors.password.message}</p>}
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-semibold ">Confirm Password</label>
              <input
                 {...register("confirmPassword", {
                required: "Password is required",
                validate: (value) => value === password || "Passwords do not match"
              })}
                id="password"
                type="password"
                placeholder="Confirm your password"
                className="w-full border rounded-lg px-4 py-2.5 outline-none focus:border-[#0056A4] "
              />
              {errors.confirmPassword && <p className="text-red-600">{errors.confirmPassword.message}</p>}
            </div>

            <div className="pt-2">
              <label className="text-sm font-semibold  block mb-3">
                Account Type
              </label>
              <div className="grid grid-cols-2 gap-4">
                <div className="border-2 border-[#0056A4] bg-blue-50 rounded-xl p-4 text-center cursor-pointer">
                  <p className="font-bold text-gray-900 text-sm">Reader</p>
                  <p className="text-[11px] text-gray-500">Read articles</p>
                </div>
                <div className="border border-gray-200 rounded-xl p-4 text-center cursor-pointer hover:border-[#0056A4] transition-colors">
                  <p className="font-bold text-gray-900 text-sm">Author</p>
                  <p className="text-[11px] text-gray-500">Write & publish</p>
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
