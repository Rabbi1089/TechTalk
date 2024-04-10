import { Link } from "react-router-dom";
import palaceHolderImage from "../assets/404.jpg";

const BlogCart = ({ blogs }) => {
  const { cover_image, title, description, published_timestamp, id } = blogs;

  return (
    <Link
      to={`/BlogDetail/${id}`}
      rel="noopener noreferrer"
      href="#"
      className="max-w-sm mx-auto group border-primary hover:border-secondary border-opacity-30 border-r-2 shadow-md transition border-2 hover:scale-105 hover:no-underline focus:no-underline bg-gray-900 dark:bg-gray-50"
    >
      <img
        role="presentation"
        className="object-cover w-full rounded h-44 bg-gray-500 dark:bg-gray-500"
        src={cover_image || palaceHolderImage}
      />
      <div className="p-6 space-y-2">
        <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
          {title}
        </h3>
        <span className="text-xs text-gray-400 dark:text-gray-600">
          {new Date(published_timestamp).toLocaleDateString()}
        </span>
        <p>{description}</p>
      </div>
    </Link>
  );
};

export default BlogCart;
