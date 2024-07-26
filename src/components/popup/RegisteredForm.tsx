import styles from "./RegisteredForm.module.css";
import { useState, useRef, useEffect, use } from "react";

interface registerFormProps {
  registeredFormOpen: boolean;
  setRegisteredFormOpen: Function;
}
export default function RegisteredForm({
  registeredFormOpen,
  setRegisteredFormOpen,
}: registerFormProps) {
  const registeredFormRef = useRef<HTMLDivElement>(null);
  console.log("registeredFormRef.current", registeredFormRef.current);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [currentTab, setCurrentTab] = useState("regTab");
  const regTabBtnRef = useRef(null);
  const loginTabBtnRef = useRef(null);

  // close register form after click outside of form.
  const handleClickOutsideOfForm = (e: MouseEvent) => {
    if (
      registeredFormRef.current &&
      !registeredFormRef.current.contains(e.target as Node)
    ) {
      setRegisteredFormOpen(false);
    } else {
      console.log("registeredFormRef.current", registeredFormRef.current);
    }
  };

  // collect logi information and send it to the server
  const handleRegSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch("/api/submitForm", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
    const result = await res.json();
    console.log(result);
  };

  const switchTab = () => {
    // if (currentTab == "regTab" && loginTabBtnRef.current) {
    // }
    console.log("regTabBtnRef.current", regTabBtnRef.current.className);
    console.log("loginTabBtnRef.current", loginTabBtnRef.current.className);
  };
  useEffect(() => {});

  useEffect(() => {
    if (registeredFormOpen) {
      document.addEventListener("mousedown", handleClickOutsideOfForm);
    } else {
      document.removeEventListener("mousedown", handleClickOutsideOfForm);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutsideOfForm);
    };
  }, [registeredFormOpen]);

  return (
    <div className={`${registeredFormOpen ? "visible" : "invisible"}`}>
      <div className={styles.overlay}>
        <div
          id="registeredForm"
          className={styles.registeredForm}
          ref={registeredFormRef}
        >
          <div
            id="switchTabContainer"
            className="text-gray-800 items-center z-60 justify-between border-b-2 border-black grid grid-cols-2 p-3 mb-3"
          >
            <button
              // id="regTabBtn"
              className="text-center text-2xl font-semibold border-r-2 border-gray-900"
              onClick={switchTab}
              ref={regTabBtnRef}
            >
              Registered
            </button>
            <button
              // id="loginTabBtn"
              className="text-center text-2xl font-thin"
              onClick={switchTab}
              ref={loginTabBtnRef}
            >
              Login
            </button>
          </div>
          <h2 className="text-3xl font-semibold mb-8 text-center">
            Register an account
          </h2>
          <form
            className="grid justify-items-center"
            onSubmit={handleRegSubmit}
          >
            <div id="regEmailContainer" className={`${styles.inputContainer}`}>
              <div className="mb-1">
                <label htmlFor="emailInput" className="font-semibold">
                  Email address
                </label>
              </div>

              <div>
                <input
                  id="regEmailInput"
                  type="email"
                  autoComplete="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                  className={styles.inputBlock}
                />
              </div>
            </div>
            <div
              id="regPasswordContainer"
              className={`${styles.inputContainer}`}
            >
              <div className="flex justify-between mb-1">
                <label htmlFor="passwordInput" className="font-semibold">
                  Password
                </label>
                <a href="/passwordrecovery" className="font-semibold">
                  Forget password?
                </a>
              </div>
              <div>
                <input
                  id="regPasswordInput"
                  type="password"
                  autoComplete="current-password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                  className={styles.inputBlock}
                />
              </div>
            </div>
            <div
              id="registeredFormSubmit"
              className={`${styles.inputContainer} mt-5`}
            >
              <button
                className="border-slate-400 border rounded-md h-10 w-96 px-2 bg-gray-900 text-white font-semibold"
                type="submit"
              >
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
