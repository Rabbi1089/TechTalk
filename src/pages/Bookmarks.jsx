import { useEffect, useState } from "react";
import { DeleteBlogs, getBlogs } from "../utlit";
import BlogCart from "../Components/BlogCart";
import EmptyState from "../Components/EmptyState";

const Bookmarks = () => {
  const [blogs, setBlogs] = useState([]);
  console.log(blogs);
  useEffect(() => {
    const stroedBlogs = getBlogs();
    setBlogs(stroedBlogs);
  }, []);

  const handleDelete = (id) => {
    DeleteBlogs(id);
    const stroedBlogs = getBlogs();
    setBlogs(stroedBlogs);
  };
  if (blogs.length < 1) {
    return (
      <EmptyState
        message={"No Bookmark Found"}
        address={"/blog"}
        label={"Read Blog"}
      ></EmptyState>
    );
  }
  return (
    <div>
      <div className="grid justify-center grid-cols-1 gap-6 sm:gap-3 lg:gap-3 md:grid-cols-3  lg:grid-cols-4 mt-10 text-white h-auto mx-5">
        {blogs &&
          blogs.map((blogs) => (
            <BlogCart
              handleDelete={handleDelete}
              deletable={true}
              key={blogs.id}
              blogs={blogs}
            ></BlogCart>
          ))}
        ;
      </div>
    </div>
  );
};

export default Bookmarks;
