import { useLoaderData } from "react-router-dom";
import Markdown from "react-markdown";
import rehypeRaw from "rehype-raw";
const Content = () => {
  const blogs = useLoaderData();
  console.log(blogs);
  const {
    cover_image,
    title,
    description,
    published_timestamp,
    tags,
    body_html,
  } = blogs;
  return (
    <div>
      <div
        rel="noopener noreferrer"
        href="#"
        className="mx-auto group border-primary p-2 border-opacity-30 border-r-2 shadow-md border-2  hover:no-underline focus:no-underline "
      >
        <img
          role="presentation"
          className="object-cover w-full rounded h-44 text-white"
          src={cover_image || palaceHolderImage}
        />
        {/* tab will end here */}
        <div className="flex flex-wrap py-6 gap-2">
          {tags.map((tag) => (
            <a
              key={tag}
              rel="noopener noreferrer"
              href="#"
              className="px-3 py-1 rounded-sm hover:underline bg-slate-50 text-gray-900"
            >
              #{tag}
            </a>
          ))}
        </div>
        <div className="p-6 space-y-2">
          <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
            {title}
          </h3>
          <span className="text-xs text-gray-900">
            {new Date(published_timestamp).toLocaleDateString()}
          </span>
          <p>{description}</p>
        </div>
        {/* <Markdown rehypePlugins={rehypeRaw}> {body_html}</Markdown> */}
        <p className="wrap">
          <Markdown rehypePlugins={rehypeRaw}>{body_html}</Markdown>
        </p>
      </div>
    </div>
  );
};

export default Content;
