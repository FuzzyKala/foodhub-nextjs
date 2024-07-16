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
          className="font-mono border-b-2 border-slate-700 flex justify-between"
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
            <div
              id="menu"
              className="border-2 rounded-lg p-1 m-3 flex items-center"
            >
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
          <div id="navbar-right" className="flex items-center">
            <div id="userBtn" className="flex items-center m-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-10"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
              </svg>
            </div>
          </div>
        </div>
      </header>
      <main></main>
    </div>
  );
}
