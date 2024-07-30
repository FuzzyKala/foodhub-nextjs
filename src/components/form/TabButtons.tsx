import React, { RefObject } from "react";
import styles from "@/components/form/FormControl.module.css";

interface TabButtonsProps {
  currentTab: string;
  handleTabClick: (tab: string) => void;
  regTabBtnRef: RefObject<HTMLButtonElement>;
  loginTabBtnRef: RefObject<HTMLButtonElement>;
}

export default function TabButtons({
  currentTab,
  handleTabClick,
  regTabBtnRef,
  loginTabBtnRef,
}: TabButtonsProps) {
  return (
    <div className="text-gray-800 items-center z-60 justify-between border-b-2 border-gray-900 grid grid-cols-2 p-3 mb-3">
      <button
        className={
          currentTab === "regTab" ? styles.activeForm : styles.inactiveForm
        }
        ref={regTabBtnRef}
        onClick={() => handleTabClick("regTab")}
      >
        Registered
      </button>
      <div className="absolute rounded border border-gray-900 h-10 top-2 left-1/2"></div>
      <button
        className={
          currentTab === "loginTab" ? styles.activeForm : styles.inactiveForm
        }
        ref={loginTabBtnRef}
        onClick={() => handleTabClick("loginTab")}
      >
        Login
      </button>
    </div>
  );
}
