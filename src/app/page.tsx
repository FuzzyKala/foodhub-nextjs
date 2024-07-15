"use client";
import Image from "next/image";
import SearchBar from "../components/searchBar";

export default function Home() {
  const handleSearch = (query: string) => {
    console.log("Searching for:", query);
    // Add your search logic here
  };
  return (
    <main>
      <div
        id="navbar-container"
        className="font-mono border-b-2 border-slate-700 flex"
      >
        <div id="navbar-left" className="flex">
          <div className="m-2 border-2 rounded-lg">
            <Image
              src="/logo.png"
              alt="FoodHub Icon"
              width={80}
              height={60}
              className="w-auto"
            />
          </div>
          <div className="border-2 rounded-lg p-2 m-2">
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
        <div id="navbar-middle">
          <div className="container mx-auto p-4">
            <SearchBar
              onSearch={handleSearch}
              placeholder="Type to search..."
              buttonText="Go"
            />
          </div>
        </div>
        <div id="navbar-right"></div>
        {/* <Image src="/logo.png" alt="FoodHub Icon" width="100" height="100" /> */}
      </div>
    </main>
  );
}
