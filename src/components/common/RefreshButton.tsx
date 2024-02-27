import { motion } from "framer-motion";
import { useState } from "react";
import { IoMdRefresh } from "react-icons/io";

type RefreshButtonProps = {
  onClick: () => Promise<void>;
};

export const RefreshButton = ({ onClick }: RefreshButtonProps) => {
  const [clickable, setClickable] = useState(true);
  const [key, setKey] = useState(0);
  return (
    <span key={key} className="flex gap-1">
      <motion.div
        onClick={() => {
          if (clickable) {
            setKey(key + 1);
            setClickable(false);
            onClick().then((_) => {
              setClickable(true);
            });
          }
        }}
        animate={{
          rotate: 360,
        }}
      >
        <IoMdRefresh size={25} />
      </motion.div>
      <span className="hidden md:block"> Refresh posts </span>
    </span>
  );
};
