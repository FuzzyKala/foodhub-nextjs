import React, { RefObject } from "react";
import styles from "@/components/form/FormControl.module.css";

interface FormFieldsProps {
  email: string;
  setEmail: (email: string) => void;
  password: string;
  setPassword: (password: string) => void;
  passwordStrength: string;
  forgetPasswordRef: RefObject<HTMLAnchorElement>;
  passwordStrengthRef: RefObject<HTMLParagraphElement>;
}

export default function FormFields({
  email,
  setEmail,
  password,
  setPassword,
  passwordStrength,
  forgetPasswordRef,
  passwordStrengthRef,
}: FormFieldsProps) {
  return (
    <>
      <div className={styles.inputContainer}>
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
      <div className={styles.inputContainer}>
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
        <p ref={passwordStrengthRef}>Password Strength: {passwordStrength}</p>
      </div>
    </>
  );
}
