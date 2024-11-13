import { parseISO } from "date-fns";
import BlogPost from "types/BlogPost";

const apiUrl = "https://dev.to/api/";
const articlesUrl = (username: string): string => {
  return "articles?username=" + username.toLowerCase();
};

const getArticles = async (username: string): Promise<BlogPost[]> => {
  const url = [apiUrl, articlesUrl(username)].join("");
  return fetch(url, { cache: "no-cache" }).then(async (result) => {
    const articles = await result.json();
    return articles.map(
      (article: any) =>
        ({
          id: article["id"],
          author: username,
          title: article["title"],
          description: article["description"],
          publishDate: parseISO(article["published_at"]),
          coverImage: article["cover_image"],
          tags: article["tag_list"].sort(),
          readingTimeMinutes: article["reading_time_minutes"],
          postUrl: article["canonical_url"],
          positiveReactionsCount: article["positive_reactions_count"],
          commentsCount: article["comments_count"],
        } as BlogPost)
    );
  });
};

export { getArticles };
