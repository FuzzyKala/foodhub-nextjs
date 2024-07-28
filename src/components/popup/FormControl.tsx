import styles from "@/components/popup/FormControl.module.css";
import { useEffect, useState, useRef } from "react";

interface FormProps {
  FormOpen: boolean;
  setFormOpen: Function;
}

export default function FormControl({ FormOpen, setFormOpen }: FormProps) {
  const formRef = useRef<HTMLDivElement>(null);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [feedbackMessage, setFeedbackMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  const [currentTab, setCurrentTab] = useState("regTab");
  const regTabBtnRef = useRef<HTMLButtonElement>(null);
  const loginTabBtnRef = useRef<HTMLButtonElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const forgetPasswordRef = useRef<HTMLAnchorElement>(null);
  const submitBtnRef = useRef<HTMLButtonElement>(null);

  const handleTabClick = (tab: string) => {
    setCurrentTab(tab);
    if (tab === "regTab") {
      titleRef.current!.innerHTML = "Register an account";
      regTabBtnRef.current!.className = styles.activeForm;
      loginTabBtnRef.current!.className = styles.inactiveForm;
      forgetPasswordRef.current!.classList.add("invisible");
    } else {
      titleRef.current!.innerHTML = "Login to your account";
      regTabBtnRef.current!.className = styles.inactiveForm;
      loginTabBtnRef.current!.className = styles.activeForm;
      forgetPasswordRef.current!.classList.remove("invisible");
    }
  };

  // Register info validation
  const validateForm = (): boolean => {
    if (!email || !password) {
      setIsSuccess(false);
      setFeedbackMessage("Email and password are required.");
      return false;
    }
    if (!email.includes("@")) {
      setIsSuccess(false);
      setFeedbackMessage("Invalide Email address format.");
      return false;
    }
    if (password.length < 6) {
      setIsSuccess(false);
      setFeedbackMessage("Password must be at least 6 characters long.");
      return false;
    }
    return true;
  };

  // handle submitting login and registered info
  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFeedbackMessage("");

    if (!validateForm()) {
      return;
    }
    if (currentTab == "regTab") {
      try {
        const Response = await fetch("/api/users/register", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        });
        if (Response.ok) {
          setIsSuccess(true);
          setFeedbackMessage("Registration successful!");
        } else {
          setIsSuccess(false);
          const error = await Response.json();
          setFeedbackMessage(`Error: ${error.message}`);
        }
      } catch (error) {
        console.error("Error submitting form:", error);
        setIsSuccess(false);
        setFeedbackMessage("An error occurred. Please try again.");
      }
    } else {
      try {
        const Response = await fetch("/api/users/login", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (Response.ok) {
          const result = await Response.json();
          console.log(result);
        } else {
          setFeedbackMessage("Login failed.");
        }
      } catch (error) {
        console.error("Error submitting form:", error);
        setFeedbackMessage("An error occurred. Please try again.");
      }
    }
  };

  // Add eventlistener to close the form
  useEffect(() => {
    const handleClickOutsideOfForm = (e: MouseEvent) => {
      if (formRef.current && !formRef.current.contains(e.target as Node)) {
        setFormOpen(false);
      }
    };
    if (FormOpen) {
      document.addEventListener("mousedown", handleClickOutsideOfForm);
    } else {
      document.removeEventListener("mousedown", handleClickOutsideOfForm);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutsideOfForm);
    };
  }, [FormOpen, setFormOpen]);

  // Control the visibility of "Forget password?"
  useEffect(() => {
    if (FormOpen && currentTab === "loginTab") {
      forgetPasswordRef.current!.classList.remove("invisible");
    } else {
      forgetPasswordRef.current!.classList.add("invisible");
    }
  }, [FormOpen, currentTab]);

  return (
    <div className={`${FormOpen ? "visible" : "invisible"}`}>
      <div className={styles.overlay}>
        <div id="form" className={styles.form} ref={formRef}>
          <div
            id="switchTabContainer"
            className="text-gray-800 items-center z-60 justify-between border-b-2 border-gray-900 grid grid-cols-2 p-3 mb-3"
          >
            <button
              id="regTabBtn"
              className="text-center text-2xl font-semibold"
              ref={regTabBtnRef}
              onClick={() => handleTabClick("regTab")}
            >
              Registered
            </button>
            <div className="absolute rounded border border-gray-900 h-10 top-2 left-1/2"></div>
            <button
              id="loginTabBtn"
              className="text-center text-2xl font-thin"
              ref={loginTabBtnRef}
              onClick={() => handleTabClick("loginTab")}
            >
              Login
            </button>
          </div>
          <h2
            className="text-3xl font-semibold mb-8 text-center"
            ref={titleRef}
          >
            Register an account
          </h2>
          <form
            className="grid justify-items-center"
            onSubmit={handleFormSubmit}
          >
            <div className={`${styles.inputContainer}`}>
              <label htmlFor="emailInput" className="font-semibold mb-1 block">
                Email address
              </label>
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
            <div className={`${styles.inputContainer}`}>
              <label
                htmlFor="passwordInput"
                className="font-semibold flex justify-between mb-1"
              >
                Password
                <a
                  href="/passwordrecover"
                  className="font-semibold invisible"
                  ref={forgetPasswordRef}
                >
                  Forget password?
                </a>
              </label>
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
            <div className={`${styles.inputContainer} mt-5`}>
              <button
                className="border-slate-400 border rounded-md h-10 w-96 px-2 bg-gray-900 text-white font-semibold"
                type="submit"
                ref={submitBtnRef}
              >
                {currentTab === "regTab" ? "Register" : "Login"}
              </button>
            </div>
          </form>
          {feedbackMessage && (
            <div
              className={`mt-4 p-4 rounded text-center font-bold ${
                isSuccess
                  ? "text-green-500 border-t border-b border-green-500"
                  : "text-red-500 border-t border-b border-red-500"
              }`}
            >
              {feedbackMessage}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
