import React, { RefObject, useState } from "react";
import styles from "@/components/form/FormControl.module.css";
import { PiEyeClosedThin, PiEye } from "react-icons/pi";
import { XCircleIcon } from "@heroicons/react/24/outline";

interface FormFieldsProps {
  email: string;
  setEmail: (email: string) => void;
  password: string;
  setPassword: (password: string) => void;
  passwordVisible: boolean;
  setPasswordVisible: (passwordVisible: boolean) => void;
  passwordVisibleRef: RefObject<HTMLDivElement>;
  passwordStrength: string;
  forgetPasswordRef: RefObject<HTMLAnchorElement>;
  passwordStrengthRef: RefObject<HTMLParagraphElement>;
}

export default function FormFields({
  email,
  setEmail,
  password,
  setPassword,
  passwordVisible,
  setPasswordVisible,
  passwordVisibleRef,
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
        <div className={styles.inputWrapper}>
          <input
            id="emailInput"
            type="email"
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className={styles.inputBlock}
          />
          <div className="absolute pr-1 inset-y-0 right-1 flex items-center">
            {email && (
              <button type="button" onClick={() => setEmail("")}>
                <XCircleIcon className="w-5 h-5 text-gray-600" />
              </button>
            )}
          </div>
        </div>
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
        <div className="flex justify-center items-center">
          <div className={styles.inputWrapper}>
            <input
              id="passwordInput"
              type={passwordVisible ? "text" : "password"}
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className={styles.inputBlock}
            />

            <div className="absolute pr-1 inset-y-0 right-1 flex items-center">
              {password && (
                <button type="button" onClick={() => setPassword("")}>
                  <XCircleIcon className="w-5 h-5 text-gray-600" />
                </button>
              )}
            </div>
          </div>
          <div
            className="absolute right-32 cursor-pointer"
            onClick={() => setPasswordVisible(!passwordVisible)}
            ref={passwordVisibleRef}
          >
            {passwordVisible ? <PiEye /> : <PiEyeClosedThin />}
          </div>
        </div>

        <p ref={passwordStrengthRef}>Password Strength: {passwordStrength}</p>
      </div>
    </>
  );
}
