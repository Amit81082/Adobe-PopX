import { useNavigate, useLocation } from "react-router-dom";
import { Home as HomeIcon, ChevronLeft, ChevronRight } from "lucide-react";

const pages = ["/", "/login", "/signup", "/account"];

export default function Pagination() {
  const navigate = useNavigate();
  const location = useLocation();

  const currentIndex = pages.indexOf(location.pathname);

    const pageNumber = currentIndex + 1;
    const totalPages = pages.length;

  const goLeft = () => {
    if (currentIndex > 0) {
      navigate(pages[currentIndex - 1]);
    }
  };

  const goRight = () => {
    if (currentIndex < pages.length - 1) {
      navigate(pages[currentIndex + 1]);
    }
  };

  return (
    <div className="flex items-center justify-between text-gray-400 mt-6">
      {/* LEFT */}
      <ChevronLeft size={22} className="cursor-pointer" onClick={goLeft} />

      {/* HOME */}
      <div className="flex flex-col items-center mt-7 gap-2">
        <HomeIcon
          size={22}
          className="cursor-pointer"
          onClick={() => navigate("/")}
        />

        {/* 👇 PAGE INDICATOR */}
        <span className="text-xs text-gray-500 font-bold">
          {pageNumber} / {totalPages}
        </span>
      </div>

      {/* RIGHT */}
      <ChevronRight size={22} className="cursor-pointer" onClick={goRight} />
    </div>
  );
}
