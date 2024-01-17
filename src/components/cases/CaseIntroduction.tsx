"use client";

import { motion } from "framer-motion";
import Case from "types/Case";
import { PrimaryButton } from "../common/PrimaryButton";

import Image from "next/image";

type CaseIntroductionProps = {
  data: Case;
  imageOnLeft: boolean;
};

export const CaseIntroduction = ({
  data,
  imageOnLeft,
}: CaseIntroductionProps) => {
  const navigateToCase = () => window.open("/cases/" + data.page);

  return (
    <article
      className={[
        imageOnLeft ? "" : "flex-row-reverse",
        "p-4 w-full flex border border-slate-100 rounded-lg shadow-xl max-h-fit",
      ].join(" ")}
    >
      <div className="hidden sm:flex flex-col p-2 justify-between">
        <motion.div whileTap={{ scale: 0.95 }}>
          <Image
            className="mt-auto rounded-lg aspect-square object-scale-down cursor-pointer"
            src={data.coverImage}
            alt="Black and white image of my cat, Ravena, with her eyes made Teal color to match the website"
          />
        </motion.div>
      </div>
      <div className="flex flex-col p-4 justify-around flex-grow gap-1">
        <span
          className="text-3xl font-bold hover:text-teal-400 transition block mb-4 cursor-pointer"
          onClick={navigateToCase}
        >
          {data.title}
        </span>
        {data.introduction.map((p, i) => (
          <span key={i}>{p}</span>
        ))}
        <div className={(imageOnLeft ? "text-right" : "text-left") + " mt-1"}>
          <PrimaryButton onClick={navigateToCase}>Read more</PrimaryButton>
        </div>
      </div>
    </article>
  );
};
