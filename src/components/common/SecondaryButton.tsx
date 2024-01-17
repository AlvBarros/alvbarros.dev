import { motion } from "framer-motion";
import { ReactNode } from "react";

type SecondaryButtonProps = {
  onClick: () => void;
  children?: ReactNode | undefined;
};

export const SecondaryButton = ({
  onClick,
  children,
}: SecondaryButtonProps) => {
  return (
    <motion.div whileTap={{ scale: 0.95 }}>
      <button
        className="flex-shrink-0 border p-2 bg-white hover:bg-teal-100 text-teal-600 border-teal-600 rounded transition"
        type="button"
        onClick={() => onClick()}
      >
        {children}
      </button>
    </motion.div>
  );
};
