"use client";
import SearchBar from "../components/SearchBar";
import Dropdown from "@/components/Dropdown";
import Logo from "@/components/Logo";
import MenuIcon from "@/components/MenuIcon";

export default function Home() {
  return (
    <div>
      <header>
        <div
          id="navbar-container"
          className="font-mono border-b-2 border-slate-700 flex justify-between bg-gray-800"
        >
          <div id="navbar-left" className="flex items-center">
            <Logo />
            {/* <MenuIcon /> */}
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
