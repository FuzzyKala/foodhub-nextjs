"use client";
import { useState, FormEvent } from "react";
import { MagnifyingGlassIcon, XCircleIcon } from "@heroicons/react/24/outline";

export default function SearchBar() {
  const [query, setQuery] = useState<string>("");
  const placeholder = "Type to search...";
  const handleSearch = (e: FormEvent) => {
    e.preventDefault();
    console.log("Searching for:", query);
  };
  const clearInput = () => {
    setQuery("");
  };

  return (
    <form onSubmit={handleSearch} className="flex items-center p-2 relative">
      <div className="relative w-full flex">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={placeholder}
          className="w-128 p-2 px-10 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 searchbar-bg"
        />
        <div className="absolute pl-3 inset-y-0 flex items-center pointer-events-none">
          <MagnifyingGlassIcon className="w-5 h-5 text-gray-400" />
        </div>
        <div className="absolute pr-3 inset-y-0 right-1 flex items-center">
          {query && (
            <button type="button" onClick={clearInput}>
              <XCircleIcon className="w-6 h-6 text-gray-400" />
            </button>
          )}
        </div>
      </div>
    </form>
  );
}
