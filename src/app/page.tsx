"use client";
import SearchBar from "../components/SearchBar";
import Dropdown from "@/components/Dropdown";
import Logo from "@/components/Logo";
import MenuIcon from "@/components/MenuIcon";
import Card from "@/components/Card";

export default function Home() {
  return (
    <div>
      <header>
        <div
          id="navBar"
          className="font-mono border-b-2 border-slate-700 flex justify-between bg-gray-800"
        >
          <div id="navBar-left" className="flex items-center">
            <Logo />
            {/* <MenuIcon /> */}
          </div>
          <div id="navBar-middle" className="flex items-center">
            <SearchBar />
          </div>
          <div id="navBar-right" className="flex items-center">
            <Dropdown />
          </div>
        </div>
      </header>
      <main className="flex flex-row">
        <div id="cardSection" className="basis-3/4 bg-lime-950">
          <Card />
        </div>
        <div id="commentSection" className="basis-1/4 bg-amber-950">
          text
        </div>
      </main>
    </div>
  );
}
