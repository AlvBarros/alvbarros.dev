import { ReactNode } from "react";

type DividerProps = {
  onClick?: () => void;
  children?: ReactNode | undefined;
};

export const Divider = ({ onClick, children }: DividerProps) => {
  return (
    <div
      onClick={() => onClick && onClick()}
      className="w-full px-12 py-4 text-center flex"
    >
      <span className="grow mt-2.5 border-t"></span>
      <span className="w-fit px-4 text-slate-300 cursor-pointer text-sm">
        {children}
      </span>
      <span className="grow mt-2.5 border-t"></span>
    </div>
  );
};
