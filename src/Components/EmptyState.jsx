import { Link } from "react-router-dom";

const EmptyState = ({ message, address, label }) => {
  return (
    <div className="min-h-[calc(100vh-116px)] flex flex-col justify-center items-center pb-16 gap-5">
      <p>{message}</p>
      <Link
        to={address}
        className="relative items-center justify-start inline-block px-5 py-3 overflow-hidden font-medium transition-all bg-primary rounded-full hover:bg-white group"
      >
        <span className="absolute inset-0 border-0 group-hover:border-[25px] ease-linear duration-100 transition-all border-white rounded-full"></span>
        <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-primary">
          {label}
        </span>
      </Link>
    </div>
  );
};

export default EmptyState;
