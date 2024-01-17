import { motion } from "framer-motion";
import { ReactNode } from "react";

type PrimaryButtonProps = {
  onClick: () => void;
  children?: ReactNode | undefined;
};

export const PrimaryButton = ({ onClick, children }: PrimaryButtonProps) => {
  return (
    <motion.div whileTap={{ scale: 0.95 }}>
      <button
        className="flex-shrink-0 border p-2 bg-teal-400 hover:bg-teal-600 text-white border-teal-600 rounded transition"
        type="button"
        onClick={() => onClick()}
      >
        {children}
      </button>
    </motion.div>
  );
};
