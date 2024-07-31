import styles from "@/components/form/FormControl.module.css";
import { useEffect, useState, useRef } from "react";
import getPasswordStrength from "@/utils/passwordStrength";
import TabButtons from "@/components/form/TabButtons";
import FormFields from "@/components//form/FormFields";
interface FormProps {
  FormOpen: boolean;
  setFormOpen: (open: boolean) => void;
}

export default function FormControl({ FormOpen, setFormOpen }: FormProps) {
  const formRef = useRef<HTMLDivElement>(null);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordStrength, setPasswordStrength] = useState("");

  const [feedbackMessage, setFeedbackMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  const [currentTab, setCurrentTab] = useState("regTab");

  const regTabBtnRef = useRef<HTMLButtonElement>(null);
  const loginTabBtnRef = useRef<HTMLButtonElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const forgetPasswordRef = useRef<HTMLAnchorElement>(null);
  const submitBtnRef = useRef<HTMLButtonElement>(null);
  const passwordStrengthRef = useRef<HTMLParagraphElement>(null);

  const handleTabClick = (tab: string) => {
    setCurrentTab(tab);
    if (tab === "regTab") {
      titleRef.current!.innerHTML = "Register an account";
      regTabBtnRef.current!.className = styles.activeForm;
      loginTabBtnRef.current!.className = styles.inactiveForm;
      forgetPasswordRef.current!.classList.add("invisible");
      submitBtnRef.current!.innerHTML = "Register";
    } else {
      titleRef.current!.innerHTML = "Login to your account";
      regTabBtnRef.current!.className = styles.inactiveForm;
      loginTabBtnRef.current!.className = styles.activeForm;
      forgetPasswordRef.current!.classList.remove("invisible");
      submitBtnRef.current!.innerHTML = "Login";
    }
  };

  // Register info validation
  const validateForm = (): boolean => {
    if (!email || !password) {
      setIsSuccess(false);
      setFeedbackMessage("Email and password are required.");
      return false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setIsSuccess(false);
      setFeedbackMessage("Invalid Email address format.");
      return false;
    }
    if (password.length < 6) {
      setIsSuccess(false);
      setFeedbackMessage("Password must be at least 6 characters long.");
      return false;
    }
    return true;
  };

  // Update and display passwordStrength when the password on changeing
  useEffect(() => {
    setPasswordStrength(getPasswordStrength(password));
    if (password && currentTab == "regTab") {
      passwordStrengthRef.current!.classList.remove("invisible");
    } else {
      passwordStrengthRef.current!.classList.add("invisible");
    }
  }, [password, currentTab]);

  // handle submitting login and registered info
  const handleFormSubmit = async (e: React.FormEvent) => {
    // prevent page reload
    e.preventDefault();

    setFeedbackMessage("");

    if (!validateForm()) {
      return;
    }

    const endpoint = `/api/users/${
      currentTab === "regTab" ? "register" : "login"
    }`;

    try {
      const Response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      if (Response.ok) {
        setIsSuccess(true);
        setFeedbackMessage(
          currentTab === "regTab"
            ? "Registration successful!"
            : "Login successful!"
        );
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
  };

  // Add an eventlistener to close the form
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
      setPassword("");
      setEmail("");
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
          <TabButtons
            currentTab={currentTab}
            handleTabClick={handleTabClick}
            regTabBtnRef={regTabBtnRef}
            loginTabBtnRef={loginTabBtnRef}
          />
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
            <FormFields
              email={email}
              setEmail={setEmail}
              password={password}
              setPassword={setPassword}
              passwordStrength={passwordStrength}
              forgetPasswordRef={forgetPasswordRef}
              passwordStrengthRef={passwordStrengthRef}
            />
            <div className={`${styles.inputContainer} mt-5`}>
              <button
                className="border-slate-400 border rounded-md h-10 w-96 px-2 bg-gray-900 text-white font-semibold"
                type="submit"
                ref={submitBtnRef}
              >
                Register
                {/* {currentTab === "regTab" ? "Register" : "Login"} */}
              </button>
            </div>
          </form>
          {feedbackMessage && (
            <div
              className={`mt-4 p-4 text-center font-bold ${
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
