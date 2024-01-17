import { parseISO } from "date-fns";
import BlogPost from "types/BlogPost";

const apiUrl = "https://dev.to/api/";
const articlesUrl = (username: string): string => {
  return "articles?username=" + username.toLowerCase();
};

const getArticles = async (username: string): Promise<BlogPost[]> => {
  const url = [apiUrl, articlesUrl(username)].join("");
  return fetch(url).then(async (result) => {
    const articles = await result.json();
    return articles.map(
      (a: any) =>
        ({
          id: a["id"],
          title: a["title"],
          description: a["description"],
          publishDate: parseISO(a["published_at"]),
          coverImage: a["scover_image"],
          tags: a["tag_list"].sort(),
          readingTimeMinutes: a["reading_time_minutes"],
          postUrl: a["canonical_url"],
          author: username,
        } as BlogPost)
    );
  });
};

export { getArticles };
