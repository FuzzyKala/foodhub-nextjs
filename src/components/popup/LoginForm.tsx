import styles from "./LoginForm.module.css";
import { useState, useRef, useEffect } from "react";

interface registerFormProps {
  loginFormOpen: boolean;
  setLoginFormOpen: Function;
}
export default function LoginForm({
  loginFormOpen,
  setLoginFormOpen,
}: registerFormProps) {
  const loginFormRef = useRef<HTMLDivElement>(null);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // close register form after click outside of form.
  const handleClickOutsideOfForm = (e: MouseEvent) => {
    if (
      loginFormRef.current &&
      !loginFormRef.current.contains(e.target as Node)
    ) {
      setLoginFormOpen(false);
    }
  };

  // collect logi information and send it to the server
  const handleLoginSubmit = async (e: React.FormEvent) => {
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
            Register an account
          </h2>
          <form
            className="grid justify-items-center"
            onSubmit={handleLoginSubmit}
          >
            <div
              id="loginEmailContainer"
              className={`${styles.inputContainer}`}
            >
              <div className="mb-1">
                <label htmlFor="emailInput" className="font-semibold">
                  Email address
                </label>
              </div>

              <div>
                <input
                  id="loginEmailInput"
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
              id="loginPasswordContainer"
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
                  id="loginPasswordInput"
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
              id="loginFormSubmit"
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
