import { Link } from "react-router-dom";
import MobileFrame from "../components/MobileFrame";
import Pagination from "../components/Pagination";

const Home=()=> {
  return (
    <MobileFrame>
      <div className=" h-full flex flex-col px-6 py-8 bg-gray-100 ">

        <div className="mb-6 flex flex-col justify-center flex-1">
          <h1 className="text-xl font-sans font-bold text-neutral-800">
            Welcome to PopX
          </h1>

          <p className="text-sm text-gray-500 mt-2 font-medium">
            Lorem ipsum dolor sit amet,
            <br />
            consectetur adipiscing elit.
          </p>

          <div className="mt-8 space-y-4">
            <Link
              to="/signup"
              className="block w-full text-center bg-violet-600 text-white py-3 rounded-lg font-medium"
            >
              Create Account
            </Link>

            <Link
              to="/login"
              className="block w-full text-center bg-violet-300 text-black py-3 rounded-lg font-medium"
            >
              Already Registered? Login
            </Link>
          </div>
        </div>
      <Pagination />

      </div>
    </MobileFrame>
  );
}
export default Home
