import { useContext } from "react";
import { useNavigate } from "react-router";
import Auth from "./Auth";
import { useForm } from "react-hook-form";

const Login = () => {
  let navigate = useNavigate();

  // let {registerUsers,loggedInUser,setLoggedInUser} = useContext(Auth)
  

  let {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm();

  let handleFormSubmit = (data) => {
     let user = registerUsers.find(
      (elem) => elem.email === data.email && elem.password === data.password
     )
     if(!user){
      toast.error("user not found")
      reset()
      return
     }
     else{
      setLoggedInUser(user)
      navigate("/home")
      console.log("log-in-page wala",loggedInUser)
      localStorage.setItem("log user",JSON.stringify(user))
     toast.success("user logged in succsessfully") 
     reset()
    }

  };

  return (
    <div className="flex  justify-center bg-gray-50 p-5">
      <div className="bg-white p-10 rounded-2xl border border-gray-200 shadow-sm w-full max-w-110 flex flex-col items-center">
        <div className="bg-[#0056A4] w-14 h-14 rounded-full flex items-center justify-center mb-6">
          <i className="ri-edit-2-line text-white text-3xl"></i>
        </div>

        <h1 className="text-2xl font-bold text-gray-900 mb-2">Welcome Back</h1>
        <p className="text-gray-500 text-[15px] mb-8 text-center">
          Sign in to your account to continue
        </p>

        <form
          className="w-full space-y-6"
          onSubmit={handleSubmit(handleFormSubmit)}
        >
          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold">Email</label>

            <input
              {...register("email", {
                required: "Email is required",
              })}
              id="email"
              type="email"
              placeholder="you@example.com"
              className="w-full border  rounded-lg px-4 py-2 outline-none focus:border-[#0056A4]"
            />
            {errors.email && (
              <p className="text-red-600">{errors.email.message}</p>
            )}
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold">Password</label>
            <input
              {...register("password", {
                required: "password is required",
              })}
              id="password"
              type="password"
              placeholder="Enter your password"
              className="w-full border  rounded-lg px-4 py-2 outline-none focus:border-[#0056A4]"
            />
            {errors.password && (
              <p className="text-red-600">{errors.password.message}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-[#0056A4] text-white font-medium py-2.5 rounded-lg hover:bg-blue-800 transition-colors mt-2"
          >
            Sign In
          </button>
        </form>

        <p className="mt-8 text-gray-600 text-sm">
          Don't have an account?
          <span
            className="text-[#0056A4] font-medium cursor-pointer hover:underline"
            onClick={() => {
              navigate("/auth/register");
            }}
          >
            Sign up
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
