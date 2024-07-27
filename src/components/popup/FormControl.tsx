import styles from "@/components/popup/FormControl.module.css";
import RegisteredForm from "@/components/popup/RegisteredForm";
import LoginForm from "@/components/popup/LoginForm";

import { useEffect, useState, useRef } from "react";

interface FormProps {
  FormOpen: boolean;
  setFormOpen: Function;
}

export default function FormControl({ FormOpen, setFormOpen }: FormProps) {
  const registeredFormRef = useRef<HTMLDivElement>(null);
  // close register form after click outside of form.
  const handleClickOutsideOfForm = (e: MouseEvent) => {
    const registeredForm = registeredFormRef.current;
    const currentClickedDOM = e.target as HTMLElement;

    if (registeredForm && !registeredForm.contains(currentClickedDOM as Node)) {
      setFormOpen(false);
    } else {
      if (
        currentClickedDOM.id === "regTabBtn" &&
        regTabBtnRef.current &&
        loginTabBtnRef.current
      ) {
        regTabBtnRef.current.className = styles.activeForm;
        loginTabBtnRef.current.className = styles.inactiveForm;
      }
      if (
        currentClickedDOM.id === "loginTabBtn" &&
        regTabBtnRef.current &&
        loginTabBtnRef.current
      ) {
        loginTabBtnRef.current.className = styles.activeForm;
        regTabBtnRef.current.className = styles.inactiveForm;
      }
    }
  };

  useEffect(() => {
    if (FormOpen) {
      document.addEventListener("mousedown", handleClickOutsideOfForm);
    } else {
      document.removeEventListener("mousedown", handleClickOutsideOfForm);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutsideOfForm);
    };
  }, [FormOpen]);

  return (
    <div className={`${FormOpen ? "visible" : "invisible"}`}>
      <RegisteredForm
        registeredFormRef={registeredFormRef}
        FormOpen={FormOpen}
      />
    </div>
  );
}
