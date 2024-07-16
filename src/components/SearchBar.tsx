"use client";
import { useState, FormEvent } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { XCircleIcon } from "@heroicons/react/24/outline";

interface SearchBarProps {
  onSearch: (query: string) => void;
  placeholder?: string;
  buttonText?: string;
}

export default function SearchBar({
  onSearch,
  placeholder = "Search...",
  buttonText = "Search",
}: SearchBarProps) {
  const [query, setQuery] = useState<string>("");

  const handleSearch = (e: FormEvent) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <form onSubmit={handleSearch} className="flex items-center p-2 relative">
      <div className="relative w-full flex">
        <input
          type="text"
          value={query}
          onChange={e => setQuery(e.target.value)}
          placeholder={placeholder}
          className="p-2 px-10 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 searchbar-bg"
        />
        <div className=" absolute pl-3 inset-y-0 flex items-center pointer-events-none">
          <MagnifyingGlassIcon className="w-5 h-5 text-gray-400" />
        </div>
        {/* <div className="">
          <XCircleIcon className="w-6 h-6 text-gray-400" />
        </div> */}
      </div>
      {/* {query && (
        <button
          type="button"
          onClick={() => setQuery("")}
          className="absolute right-0 p-2 bg-red-500 text-white rounded-r-lg hover:bg-red-600 focus:outline-none"
        >
          Clear
        </button>
      )} */}
      {/* <button
        type="submit"
        className="ml-2 p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none"
      >
        {buttonText}
      </button> */}
    </form>
  );
}