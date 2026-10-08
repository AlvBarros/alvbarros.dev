import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { PrimaryButton } from "common/PrimaryButton";
import { SecondaryButton } from "common/SecondaryButton";
const availablePhotos = 3;

const scheduleCall = () => {
  const link = document.createElement("a");
  link.href = "https://calendly.com/alv-barrosc/30-minutes-meeting";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

const downloadResume = () => {
  const link = document.createElement("a");
  link.href = "/files/Alvaro_Barros.pdf";
  link.setAttribute("download", "Alvaro_Barros.pdf");
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

const hiddenLink = () => {
  const link = document.createElement("a");
  link.href = "https://h5.d9s3x4.com/share/invite/share_page.html?invited_by=183885681&arg=bW92aWVicixwdCxodHRwczovL2FwcC5yMmM3YTAuY29tL3ZlcnNpb24vbW92aWVici9tb3ZpZWJyX3NoXzEwMDAtVjQuMC4wLmFwayxodHRwczovL2g1LmQ5czN4NC5jb20vc2hhcmUvcHRfYnIvaW5kZXhfeS5odG1s";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

export const Introduction = () => {
  const [number, setNumber] = useState(0);

  const nextPhoto = () => {
    if (number === availablePhotos) {
      setNumber(1);
      return;
    }
    setNumber(number + 1);
  };

  useEffect(() => {
    const random = Math.floor(Math.random() * 3 + 1);
    setNumber(random);
  }, []);
  return (
    <div className="p-4 w-full flex border border-slate-100 rounded-lg shadow-xl max-h-fit">
      <div className="flex flex-col p-2 gap-2 justify-around flex-grow">
        <span className="flex w-full justify-center gap-4 flex-wrap text-3xl">
          <span className="font-semibold"> Hello world! </span>
          <motion.div
            className="cursor-pointer"
            whileTap={{ rotate: -180, scale: 0.5 }}
            initial={{ rotate: -180, scale: 0 }}
            animate={{ rotate: 0, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20,
            }}
          >
            👋
          </motion.div>
        </span>
        <div className="flex flex-col xl:gap-4 gap-1">
          <span>
            I{"'"}m a
            <strong className="text-teal-400"> software developer</strong> with
            7+ years of experience in engineering, development and delivery of
            results. My main experience comes from working in banks and
            providing consultancy for software companies.
          </span>
          <span className="md:block hidden">
            Since the beggining, I{"'"}ve worked with a lot of different
            technologies. My main strengths are JavaScript, be it for Frontend
            with
            <strong className="text-teal-400"> React </strong> and
            <strong className="text-teal-400"> Angular </strong> or Backend with
            <strong className="text-teal-400"> Node.js</strong>. However, my
            experience also includes Mobile development, specifically
            <strong className="text-teal-400"> Flutter</strong>.
          </span>
          <span className="lg:block hidden">
            Feel free to navigate through this website to learn more about what
            I{"'"}m up to these days. And if you{"'"}re interested, you can go
            through specific cases in my career that I{"'"}ve felt that are
            worthy talking about.
          </span>
        </div>
        <span className="flex gap-2 flex-wrap">
          <PrimaryButton onClick={() => hiddenLink()}>
            Schedule a call with me
          </PrimaryButton>
          <SecondaryButton onClick={() => downloadResume()}>
            Download resume
          </SecondaryButton>
        </span>
      </div>
      <div
        className="hidden sm:flex flex-col p-2 justify-between"
        onClick={() => nextPhoto()}
      >
        {number >= 1 && (
          <motion.div whileTap={{ scale: 0.95 }}>
            <Image
              className="mt-auto rounded-lg aspect-square object-scale-down cursor-pointer"
              src={`imgs/ravena-${number}.png`}
              alt="Black and white image of my cat, Ravena, with her eyes made Teal color to match the website"
              width={1000}
              height={1000}
            />
            <span className="w-fit mb-auto ml-auto text-sm italic text-slate-400">
              * And this is Ravena
            </span>
          </motion.div>
        )}
      </div>
    </div>
  );
};
