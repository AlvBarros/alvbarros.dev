import { IoSearch } from "react-icons/io5";

type FilterProps = {
  onChange: (value: string) => void;
  placeholder: string;
};

export const Filter = ({ onChange, placeholder }: FilterProps) => {
  // TODO Fix vertical-align on IoSearch
  return (
    <span className="w-full flex justify-center text-center p-4">
      <span className="bg-white flex rounded-lg lg:w-1/2 md:w-1/2 w-full relative shadow-xl border">
        <IoSearch className="text-gray-300 absolute left-1 top-1" />
        <input
          className="px-8 w-full rounded-lg text-center bg-transparent focus:outline-none focus:outline-teal-400"
          type="text"
          placeholder={placeholder}
          onChange={(event) => onChange(event.target.value)}
        />
      </span>
    </span>
  );
};
