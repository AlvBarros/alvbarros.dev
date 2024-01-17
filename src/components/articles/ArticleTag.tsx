type ArticleTagProps = {
  active?: boolean;
  name: string;
  onClick?: Function;
};

export const ArticleTag = ({ active, name, onClick }: ArticleTagProps) => {
  return (
    <span
      className={[
        "p-1 rounded-lg border bg-slate-100 border-slate-200 transition",
        active
          ? "text-teal-400 cursor-pointer"
          : "hover:text-teal-400 hover:border-teal-400 cursor-pointer",
      ].join(" ")}
      onClick={() => onClick && onClick()}
    >
      #{name}
    </span>
  );
};
