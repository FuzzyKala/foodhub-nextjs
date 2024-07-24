import React, { useState, useRef, useEffect } from "react";
import styles from "./Dropdown.module.css";
import { LuUserCircle2, LuSettings, LuLogOut } from "react-icons/lu";

export default function Dropdown() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);
  const handleClickOutsideOfDropdown = (e: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(e.target as Node)
    ) {
      setDropdownOpen(false);
    }
  };
  useEffect(() => {
    if (dropdownOpen) {
      document.addEventListener("mousedown", handleClickOutsideOfDropdown);
    } else {
      document.removeEventListener("mousedown", handleClickOutsideOfDropdown);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutsideOfDropdown);
    };
  }, [dropdownOpen]);

  return (
    <div className="relative" ref={dropdownRef}>
      <div
        id="userIcon"
        className="flex m-3"
        onClick={toggleDropdown}
        role="button"
      >
        <LuUserCircle2 size={40} stroke-width={1.5} />
      </div>
      <div
        id="dropdownTable"
        className={`${styles.dropdown} ${
          dropdownOpen ? styles.dropdownOpen : ""
        }`}
      >
        <ul>
          <div id="userProfile" className={styles.dropdownItem}>
            <div>
              <LuUserCircle2 size={25} className="ml-1" />
            </div>
            <div>
              <li className="px-3 py-2">Profile</li>
            </div>
          </div>
          <div id="userSettings" className={styles.dropdownItem}>
            <div>
              <LuSettings size={25} className="ml-1" />
            </div>
            <div>
              <li className="px-3 py-2">Settings</li>
            </div>
          </div>
          <div id="userLogout" className={styles.dropdownItem}>
            <div>
              <LuLogOut size={25} className="ml-1" />
            </div>
            <div>
              <li className="px-3 py-2">Logout</li>
            </div>
          </div>
        </ul>
      </div>
    </div>
  );
}
