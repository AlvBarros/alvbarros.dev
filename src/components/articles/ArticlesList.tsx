import { useEffect, useState } from "react";
import { Article } from "./Article";

import { Divider } from "common/Divider";
import BlogPost from "types/BlogPost";

import { Filter } from "common/Filter";

import { getArticles } from "data/DevtoAPI";

const amountOfPosts = 2;

export const ArticlesList = () => {
  const [articles, setArticles] = useState([] as BlogPost[]);
  const fetchArticles = () => {
    return new Promise<void>((resolve, reject) => {
      getArticles("AlvBarros")
        .then((articles) => {
          setArticles(articles);
          resolve();
        })
        .catch((err) => {
          reject(err);
        });
    });
  };

  useEffect(() => {
    fetchArticles();
  }, []);

  const [showMore, setShowMore] = useState(false);
  const [query, setQuery] = useState("");
  const [filters, setFilters] = useState([] as string[]);

  const toggleFromFilter = (tag: string) => {
    const index = filters.indexOf(tag);
    if (index >= 0) {
      setFilters(
        [...filters.slice(0, index), ...filters.slice(index + 1)].sort()
      );
      return;
    }
    setFilters([...filters, tag].sort());
  };

  const filteredArticles = articles
    .slice(0, showMore ? articles.length : amountOfPosts)
    .filter((article) => {
      return (
        (filters.length === 0 ||
          article.tags.some((tag: string) => filters.includes(tag))) &&
        (!query ||
          article.title.toLowerCase().includes(query.toLowerCase().trim()))
      );
    });

  console.log("filteredArticlesLength: ", filteredArticles.length);

  return (
    <>
      <div className="w-full p-4 text-center text-md italic text-slate-400">
        some blogposts that I've written:
      </div>
      <div key={"articles-list-" + filters.join("-")}>
        <Filter
          onChange={(val) => {
            console.log("Changing query to", val);
            setQuery(val);
          }}
          placeholder={"Search through blog posts"}
        />
        <div className="w-max-full flex flex-wrap flex-col gap-4">
          {filteredArticles.length > 0 &&
            filteredArticles.map((article) => (
              <Article
                key={article.id}
                post={article}
                filters={filters}
                onClickTag={(tag: string) => {
                  toggleFromFilter(tag);
                }}
                onClickTitle={() => {
                  window.open(article.postUrl);
                }}
              />
            ))}
          {filteredArticles.length === 0 && (
            <span className="text-center">
              {" "}
              No articles match the criteria 😅{" "}
            </span>
          )}
        </div>
        {articles.length > amountOfPosts && (
          <Divider onClick={() => setShowMore(!showMore)}>
            {showMore ? "Show less" : "Show more"}
          </Divider>
        )}
      </div>
    </>
  );
};
