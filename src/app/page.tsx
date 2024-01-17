"use client";

import { Introduction } from "@/components/landing/Introduction";
import { ArticlesList } from "articles/ArticlesList";

import { CasesList } from "cases/CasesList";

export default function Home() {
  return (
    <>
      <Introduction />
      <CasesList />
      <ArticlesList />
    </>
  );
}
