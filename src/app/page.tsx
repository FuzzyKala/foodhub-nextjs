"use client";
import Image from "next/image";
import SearchBar from "../components/SearchBar";
import Dropdown from "@/components/Dropdown";

export default function Home() {
  return (
    <div>
      <header>
        <div
          id="navbar-container"
          className="font-mono border-b-2 border-slate-700 flex justify-between bg-gray-800"
        >
          <div id="navbar-left" className="flex items-center">
            <div className="m-3 bg-transparent">
              <Image
                src="/11.svg"
                alt="FoodHub Icon"
                width={60}
                height={60}
                className="w-auto h-9"
              />
            </div>
            <div id="menu" className="p-1 m-3 flex items-center">
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
            <SearchBar />
          </div>
          <div id="navbar-right" className="flex items-center">
            <Dropdown />
          </div>
        </div>
      </header>
      <main></main>
    </div>
  );
}
