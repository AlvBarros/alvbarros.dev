import { format } from "date-fns";
import BlogPost from "types/BlogPost";
import { ArticleTag } from "articles/ArticleTag";

type ArticleProps = {
  post: BlogPost;
  filters?: string[];
  onClickTag?: Function;
  onClickTitle?: Function;
};

export const Article = ({
  post,
  filters,
  onClickTag,
  onClickTitle,
}: ArticleProps) => {
  return (
    <article className="max-w-full p-8 border border-slate-100 rounded-lg shadow-xl flex-shrink-0 grow">
      <span
        className="text-3xl font-bold hover:text-teal-400 cursor-pointer transition block mb-4"
        onClick={() => onClickTitle && onClickTitle(post.title)}
      >
        {post.title}
      </span>
      <span key={post.id + "-tags"} className="flex gap-3 flex-wrap">
        {post.tags.map((tag: string) => (
          <ArticleTag
            key={tag}
            active={filters?.includes(tag)}
            name={tag}
            onClick={() => onClickTag && onClickTag(tag)}
          />
        ))}
      </span>
      <span className="flex sm:justify-between flex-wrap text-slate-600 sm:flex-row flex-col">
        <span className="flex-shrink-0 sm:w-fit w-full">
          Estimated reading time: {post.readingTimeMinutes} min
        </span>
        <span className="flex-shrink-0 sm:w-fit w-full">
          {format(post.publishDate, "MMM do, yyyy")}
        </span>
      </span>
    </article>
  );
};
