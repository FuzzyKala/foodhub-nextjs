"use client";

import Logo from "@/components/navBar/Logo";
import SearchBar from "@/components/navBar/SearchBar";
import Dropdown from "@/components/navBar/Dropdown";
import LoginBtn from "@/components/navBar/LoginBtn";

import Card from "@/components/postCard/Card";
import DivideLine from "@/components/postCard/DivideLine";

import PageLink from "@/components/sideBar/PageLink";

export default function HomePage() {
  return (
    <div>
      <header id="navBar">
        <div id="navBar-left" className="navBarBlock pl-20">
          <Logo />
          {/* <MenuIcon /> */}
        </div>
        <div id="navBar-middle" className="navBarBlock">
          <SearchBar />
        </div>
        <div id="navBar-right" className="navBarBlock justify-end pr-10">
          <LoginBtn />
          <Dropdown />
        </div>
      </header>
      <main className="flex flex-row pt-20">
        <div
          id="cardSection"
          className="w-3/4 py-10 px-60 border-r-2 border-slate-500"
        >
          <Card />
          <DivideLine />
          <Card />
          <DivideLine />
          <Card />
          <DivideLine />
        </div>
        <div
          id="sideBar"
          className={`w-1/4 bg-gray-900 p-10 text-xl fixedSideBar`}
        >
          <PageLink />
        </div>
      </main>
    </div>
  );
}
