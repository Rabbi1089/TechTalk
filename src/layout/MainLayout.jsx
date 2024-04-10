import Nav from "../Components/Nav";
import Footer from "../Components/Footer";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className=" overflow-hidden">
      <div className="h-16">
        <Nav />
      </div>
      <div className="min-h-[calc(100vh-117px)]">
        <Outlet />
      </div>
      <div className="h-10">
        <Footer />
      </div>
    </div>
  );
};

export default MainLayout;
