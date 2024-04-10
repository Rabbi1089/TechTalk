import { useLoaderData } from "react-router-dom";
import palaceHolderImage from "../assets/404.jpg";

const BlogDetail = () => {
  const blogDetail = useLoaderData();
  const {
    cover_image,
    title,
    description,
    published_timestamp,
    id,
    reading_time_minutes,
    comments_count,
    public_reactions_count,
  } = blogDetail;
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
            <img
              role="presentation"
              className="object-cover w-full rounded h-44 bg-gray-500 dark:bg-gray-500"
              src={cover_image || palaceHolderImage}
            />
            <p>Insert the actual text content here...</p>
          </div>
        </article>
        <div>
          <div className="flex flex-wrap py-6 gap-2 border-t border-dashed border-gray-400">
            <a
              rel="noopener noreferrer"
              href="#"
              className="px-3 py-1 rounded-sm hover:underline bg-violet-400 text-gray-900"
            >
              #MambaUI
            </a>
            <a
              rel="noopener noreferrer"
              href="#"
              className="px-3 py-1 rounded-sm hover:underline bg-violet-400 text-gray-900"
            >
              #TailwindCSS
            </a>
            <a
              rel="noopener noreferrer"
              href="#"
              className="px-3 py-1 rounded-sm hover:underline bg-violet-400 text-gray-900"
            >
              #Angular
            </a>
          </div>
          <div className="space-y-2">
            <h4 className="text-lg font-semibold">Related posts</h4>
            <ul className="ml-4 space-y-1 list-disc">
              <li>
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="hover:underline"
                >
                  Nunc id magna mollis
                </a>
              </li>
              <li>
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="hover:underline"
                >
                  Duis molestie, neque eget pretium lobortis
                </a>
              </li>
              <li>
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="hover:underline"
                >
                  Mauris nec urna volutpat, aliquam lectus sit amet
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
