import toast from "react-hot-toast";

export const getBlogs = () => {
  let blogs = [];
  const storedBlogs = localStorage.getItem("blogs");
  if (storedBlogs) {
    blogs = JSON.parse(storedBlogs);
  }
  return blogs;
};

export const saveBlog = (blog) => {
  let blogs = getBlogs();
  const isExits = blogs.find((b) => b.id === blog.id);
  if (isExits) {
    return toast.error("Already Bookmarked !");
  }
  blogs.push(blog);
  localStorage.setItem("blogs", JSON.stringify(blogs));
  toast.success("Bookmark added successfully");
};

export const DeleteBlogs = (id) => {
  let blogs = getBlogs();
  const remaining = blogs.filter((b) => b.id !== id);
  //console.log(remaining);
  localStorage.setItem("blogs", JSON.stringify(remaining));
  toast.success("Bookmark Removed successfully");
};
