"use client";
import SearchBar from "@/components/SearchBar";
import Dropdown from "@/components/Dropdown";
import Logo from "@/components/Logo";
import MenuIcon from "@/components/MenuIcon";
import Card from "@/components/Card";
import DivideLine from "@/components/DivideLine";

export default function Home() {
  return (
    <div>
      <header
        id="navBar"
        className="border-b-2 border-slate-500 flex justify-between bg-gray-900"
      >
        <div id="navBar-left" className="flex basis-1/3 pl-20 items-center">
          <Logo />
          {/* <MenuIcon /> */}
        </div>
        <div id="navBar-middle" className="flex basis-1/3 items-center">
          <SearchBar />
        </div>
        <div
          id="navBar-right"
          className="flex basis-1/3 justify-end pr-10 items-center"
        >
          <Dropdown />
        </div>
      </header>
      <main className="flex flex-row">
        <div
          id="cardSection"
          className="basis-3/4 bg-gray-900 py-10 px-60 border-r-2 border-slate-500"
        >
          <Card />
          <DivideLine />
          <Card />
          <DivideLine />
          <Card />
          <DivideLine />
        </div>
        <div id="commentSection" className="basis-1/4 bg-gray-900">
          text
        </div>
      </main>
    </div>
  );
}
