"use client";

import { ChangeEvent, Dispatch, SetStateAction } from "react";


interface SearchInputProps {
  placeholder?: string;
  id: string;
  setSearchBy: Dispatch<SetStateAction<string>>;
}

const SearchInput: React.FC<SearchInputProps> = ({ placeholder, id, setSearchBy }) => {

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchBy(e.target.value);
  };

  return (
    <input
      id={id}
      autoComplete={id}
      placeholder={placeholder}
      onChange={handleSearch}
      className="
          text-black
          font-light
          mb-2
          py-2
          px-4
          bg-neutral-100 
          dark:bg-lightgray
          w-full 
          rounded-full
          focus:outline-none
          dark:text-white
        "
    />
  );
};

export default SearchInput;
