import styles from "./LoginForm.module.css";
import { useRef, useEffect } from "react";

interface LoginFormProps {
  loginFormOpen: boolean;
  setLoginFormOpen: Function;
}
export default function LoginForm({
  loginFormOpen,
  setLoginFormOpen,
}: LoginFormProps) {
  const loginFormRef = useRef<HTMLDivElement>(null);
  console.log("loginFormRef:", loginFormRef);
  console.log("loginFormOpen", loginFormOpen);
  const handleClickOutsideOfForm = (e: MouseEvent) => {
    if (
      loginFormRef.current &&
      !loginFormRef.current.contains(e.target as Node)
    ) {
      setLoginFormOpen(false);
    }
  };
  useEffect(() => {
    if (loginFormOpen) {
      document.addEventListener("mousedown", handleClickOutsideOfForm);
    } else {
      document.removeEventListener("mousedown", handleClickOutsideOfForm);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutsideOfForm);
    };
  }, [loginFormOpen]);
  return (
    <div className={`${loginFormOpen ? "visible" : "invisible"}`}>
      <div className={styles.overlay}>
        <div id="loginForm" className={styles.loginForm} ref={loginFormRef}>
          <h2 className="text-3xl font-semibold mb-8 text-center">
            Login to your account
          </h2>
          <form action="#" method="POST" className="grid justify-items-center">
            <div id="emailContainer" className={`${styles.inputContainer}`}>
              <div className="mb-1">
                <label htmlFor="emailInput" className="font-semibold">
                  Email address
                </label>
              </div>

              <div>
                <input
                  id="emailInput"
                  type="email"
                  autoComplete="email"
                  className={styles.inputBlock}
                />
              </div>
            </div>
            <div id="passwordContainer" className={`${styles.inputContainer}`}>
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
                  id="passwordInput"
                  type="password"
                  autoComplete="current-password"
                  className={styles.inputBlock}
                />
              </div>
            </div>
            <div
              id="loginFormSubmit"
              className={`${styles.inputContainer} mt-5`}
            >
              <button className="border-slate-400 border rounded-md h-10 w-96 px-2 bg-gray-900 text-white font-semibold">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
