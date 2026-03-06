import Pagination from "../components/Pagination";
import MobileFrame from "../components/MobileFrame";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <MobileFrame>
      <div className="h-full flex flex-col justify-between px-6 py-8 bg-gray-100">
        <div className="mt-2">
          <h1 className="text-[22px] font-semibold text-gray-900">
            Create your <br /> PopX account
          </h1>

          <div className="mt-6 space-y-4">
            <div className="relative">
              <label className="absolute -top-2 left-3 bg-gray-100 px-1 text-[13px] text-violet-600 font-bold">
                Full Name<span className="text-red-400">*</span>
              </label>
              <input
                type="text"
                placeholder="Enter Your Name"
                className="w-full px-3 py-3 border border-gray-300 rounded-md text-[14px] focus:outline-none"
              />
            </div>

            <div className="relative">
              <label className="absolute -top-2 left-3 bg-gray-100 px-1 text-[13px] text-violet-600 font-bold">
                Phone number<span className="text-red-400">*</span>
              </label>
              <input
                type="text"
                placeholder="Enter Your Phone Number"
                className="w-full px-3 py-3 border border-gray-300 rounded-md text-[14px] focus:outline-none"
              />
            </div>

            <div className="relative">
              <label className="absolute -top-2 left-3 bg-gray-100 px-1 text-[13px] text-violet-600 font-bold">
                Email address<span className="text-red-400">*</span>
              </label>
              <input
                type="email"
                placeholder="Enter Your Email"
                className="w-full px-3 py-3 border border-gray-300 rounded-md text-[14px] focus:outline-none"
              />
            </div>

            <div className="relative">
              <label className="absolute -top-2 left-3 bg-gray-100 px-1 text-[13px] text-violet-600 font-bold">
                Password<span className="text-red-400">*</span>
              </label>
              <input
                type="password"
                placeholder="Enter Your Password"
                className="w-full px-3 py-3 border border-gray-300 rounded-md text-[14px] focus:outline-none"
              />
            </div>

            <div className="relative">
              <label className="absolute -top-2 left-3 bg-gray-100 px-1 text-[13px] text-violet-600 font-bold">
                Company name
              </label>
              <input
                type="text"
                placeholder="Enter Your Company Name"
                className="w-full px-3 py-3 border border-gray-300 rounded-md text-[14px] focus:outline-none text-xs"
              />
            </div>

            <div className="mt-2">
              <p className="text-sm text-gray-900 mb-2">
                Are you an Agency?<span className="text-red-400">*</span>
              </p>
              <div className="flex gap-6">
                <label className="flex items-center gap-2 text-sm">
                  <input
                    type="radio"
                    name="agency"
                    defaultChecked
                    className="accent-violet-600"
                  />
                  Yes
                </label>
                <label className="flex items-center gap-2 text-sm">
                  <input
                    type="radio"
                    name="agency"
                    className="accent-violet-600"
                  />
                  No
                </label>
              </div>
            </div>
          </div>
        </div>

        <Link to="/account">
          <button className="w-full py-3 bg-violet-600 text-white rounded-lg font-medium mt-14 cursor-pointer">
            Create Account
          </button>
        </Link>

        <Pagination />
      </div>
    </MobileFrame>
  );
};

export default Signup;
