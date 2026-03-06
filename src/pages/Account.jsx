import { Camera, Home as HomeIcon, ChevronLeft, ChevronRight  } from "lucide-react";
import Pagination from "../components/Pagination";
import MobileFrame from "../components/MobileFrame";

const Account = () => {
  return (
    <MobileFrame>
      <div className="h-full flex flex-col bg-gray-100">

        <div className="px-6 py-5 border-b border-gray-200">
          <h1 className="text-[18px] font-medium text-gray-900">
            Account Settings
          </h1>
        </div>

        <div className="px-6 py-6 flex items-start gap-4">
          <div className="relative">
            <img
              src="/max-verstappen-red-bull-racing.jpeg"
              alt="profile"
              className="w-18 h-18 rounded-full object-cover"
            />
            <div className="absolute -bottom-1 -right-1 w-5.5 h-5.5 bg-purple-600 rounded-full flex items-center justify-center shadow-sm">
              <Camera size={12} className="text-white" />
            </div>
          </div>

          <div>
            <h2 className="text-[15px] font-bold text-gray-900">Aditya Maurya</h2>
            <p className="text-gray-500 mt-0.5 text-xs font-bold">Adi@gmail.Com</p>
          </div>
        </div>

        <div className="px-6 text-sm text-gray-600 leading-5 mt-2 font-medium">
          Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam
          Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam
          Erat, Sed Diam
        </div>

        <div className="px-6 my-6">
          <div className="border-t border-dashed border-gray-300"></div>
        </div>

        <div className="flex-1"></div>

        <div className="px-6 mb-8">
          <div className="border-t border-dashed border-gray-300"></div>
        </div>

        <div className="mt-2"></div>

         <div className="px-6 pb-7">
          <Pagination />
        </div>

      </div>
    </MobileFrame>
  );
};

export default Account;
