import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div>
      <div className="hero -mt-16">
        <div className="hero-content text-center">
          <div className="max-w-lg">
            <h1 className="text-5xl font-bold">
              Welcome to{" "}
              <span className="text-5xl font-bold bg-gradient-to-r from-primary via-blue-500 to-secondary text-transparent bg-clip-text bg-300% animate-gradient">
                TechTalk
              </span>
            </h1>
            <p className="py-6 text-xl text-center">
              Join us on this exciting journey as we explore the ever-evolving
              realm of technology and empower you to harness the power of IT.
            </p>
            <div className="flex justify-center gap-3 border-emerald-300">
              <Link
                to={"/blog"}
                className="relative items-center justify-start inline-block px-5 py-3 overflow-hidden font-medium transition-all bg-primary rounded-full hover:bg-white group"
              >
                <span className="absolute inset-0 border-0 group-hover:border-[25px] ease-linear duration-100 transition-all border-white rounded-full"></span>
                <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-primary">
                  Read Blog
                </span>
              </Link>
              <Link
                to={"/bookmark"}
                className="relative  items-center justify-start inline-block px-5 py-3 overflow-hidden font-medium transition-all bg-primary rounded-full hover:bg-white group"
              >
                <span className="absolute inset-0 border-0 group-hover:border-[25px] ease-linear duration-100 transition-all border-white rounded-full"></span>
                <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-primary">
                  Bookmark
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
