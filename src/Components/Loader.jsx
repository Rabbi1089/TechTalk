import { RingLoader } from "react-spinners";

const Loader = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-[calc(100vh-116px)]">
      <RingLoader color="blue"></RingLoader>
    </div>
  );
};

export default Loader;
