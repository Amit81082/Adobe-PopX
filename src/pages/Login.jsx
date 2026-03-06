import Pagination from "../components/Pagination";
import MobileFrame from "../components/MobileFrame";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <MobileFrame>
      <div className="h-full flex flex-col justify-between px-6 py-8 bg-gray-100">
        <div className="mt-10">
          <h1 className="text-[22px] font-semibold font-sans text-gray-900">
            Signin to your <br /> PopX account
          </h1>
          <p className="text-sm text-gray-500 mt-3 font-medium">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          </p>

          <div className="mt-8 space-y-5">
            <div className="relative">
              <label className="text-violet-600 block mb-1 absolute -top-2 left-3  bg-gray-100 px-1 font-bold text-[13px] ">
                Email Address
              </label>
              <input
                type="email"
                placeholder="Enter email address"
                className="w-full px-4 py-3 border rounded-lg text-sm   focus:outline-none"
              />
            </div>
            <div className="relative">
              <label className=" text-violet-600 block mb-1 absolute -top-2 left-3  bg-gray-100 px-1 font-bold text-[13px]">
                Password
              </label>
              <input
                type="password"
                placeholder="Enter password"
                className="w-full px-4 py-3 border rounded-lg text-sm focus:outline-none"
              />
            </div>
            <Link to="/account">
              <button className="w-full py-3 bg-gray-300 text-white rounded-lg font-medium cursor-not-allowed">
                Login
              </button>
            </Link>
          </div>
        </div>

        <Pagination />
      </div>
    </MobileFrame>
  );
};

export default Login;
