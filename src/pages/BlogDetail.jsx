import { Link, useLoaderData, Outlet } from "react-router-dom";
import { useState } from "react";
import { MdBookmarkAdd } from "react-icons/md";
import { saveBlog } from "../utlit";

const BlogDetail = () => {
  const [tabIndex, setTabIndex] = useState(0);
  //console.log(tabIndex);
  const blogDetail = useLoaderData();
  const {
    title,
    published_timestamp,
    reading_time_minutes,
    comments_count,
    public_reactions_count,
  } = blogDetail;

  const handleBookmark = (blogDetail) => {
    //console.log(blogDetail);
    saveBlog(blogDetail);
  };
  return (
    <div>
      <div className="max-w-3xl px-6 py-16 mx-auto space-y-12">
        <article className="space-y-8  text-gray-800">
          <div className="space-y-6">
            <h1 className="text-4xl font-bold md:tracking-tight md:text-5xl">
              {title}
            </h1>
            <div className="flex flex-col items-start justify-between w-full md:flex-row md:items-center text-gray-900">
              <p className="text-sm">
                {reading_time_minutes} min read • Published at &nbsp;
                {new Date(published_timestamp).toLocaleDateString()}
              </p>
              <p className="flex-shrink-0 mt-3 text-sm md:mt-0">
                {comments_count} Comments • {public_reactions_count} views
              </p>
            </div>
          </div>
          <div className="text-gray-900">
            {/* tab will start here */}
            <div className="flex items-center m-0 overflow-x-auto overflow-y-hidden sm:justify-start flex-nowrap dark:bg-gray-100 dark:text-gray-800">
              <Link
                to=""
                onClick={() => setTabIndex(0)}
                rel="noopener noreferrer"
                href="#"
                className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${
                  tabIndex === 0
                    ? "border border-b-0 scale-105 font-bold"
                    : "border-b"
                }  rounded-t-lg dark:border-gray-600 dark:text-gray-900`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-4 h-4"
                >
                  <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
                </svg>
                <span>Content</span>
              </Link>
              <Link
                to={"Author"}
                onClick={() => setTabIndex(1)}
                rel="noopener noreferrer"
                href="#"
                className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${
                  tabIndex === 1
                    ? "border border-b-0 scale-105 font-bold"
                    : "border-b"
                }  rounded-t-lg dark:border-gray-600 dark:text-gray-900`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-4 h-4"
                >
                  <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                  <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                </svg>
                <span>Author</span>
              </Link>
              <div
                onClick={() => handleBookmark(blogDetail)}
                className=" bg-pink-500 px-2 py-2 ml-4 opacity-40 rounded-md hover:scale-110 hover:opacity-80 shadow-sm cursor-pointer overflow-hidden"
              >
                <MdBookmarkAdd size={30} className="text-primary" />
              </div>
            </div>
          </div>
          <Outlet />
        </article>
      </div>
    </div>
  );
};

export default BlogDetail;
