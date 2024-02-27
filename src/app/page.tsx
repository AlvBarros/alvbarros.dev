"use client";

import { Introduction } from "@/components/landing/Introduction";
import { ArticlesList } from "articles/ArticlesList";
// TODO Finish writing cases
// import { CasesList } from "cases/CasesList";

export default function Home() {
  return (
    <>
      <Introduction />
      {/* <CasesList /> */}
      <ArticlesList />
    </>
  );
}
