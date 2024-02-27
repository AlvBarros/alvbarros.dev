"use client";

import { CaseIntroduction } from "cases/CaseIntroduction";
import { cases } from "./Cases";

export const CasesList = () => {
  return (
    <>
      <div className="w-full p-4 text-center text-md italic text-slate-400">
        {"some cases that I've written about:"}
      </div>
      <div className="w-max-full flex flex-wrap flex-col gap-8 justify-between">
        {cases.map((item, index) => (
          <CaseIntroduction
            isMirrored={index % 2 == 0}
            key={item.title}
            data={item}
          />
        ))}
      </div>
    </>
  );
};
