"use client";
import Image from "next/image";
import SearchBar from "../components/SearchBar";

export default function Home() {
  const handleSearch = (query: string) => {
    console.log("Searching for:", query);
    // Add your search logic here
  };
  return (
    <div>
      <header>
        <div
          id="navbar-container"
          className="font-mono border-b-2 border-slate-700 flex"
        >
          <div id="navbar-left" className="flex items-center">
            <div className="m-3 border-2 rounded-lg">
              <Image
                src="/logo.svg"
                alt="FoodHub Icon"
                width={60}
                height={60}
                className="w-32 h-9 bg-white"
              />
            </div>
            <div className="border-2 rounded-lg p-1 m-3 flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-7"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
                />
              </svg>
            </div>
          </div>
          <div id="navbar-middle" className="flex items-center">
            <SearchBar
              onSearch={handleSearch}
              placeholder="Type to search..."
              buttonText="Go"
            />
          </div>
          <div id="navbar-right" className="flex items-center"></div>
        </div>
      </header>
      <main></main>
    </div>
  );
}
