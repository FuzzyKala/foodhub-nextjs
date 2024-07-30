export default function getPasswordStrength(password: string): string {
  const specialChars = "!@#$%^&*()_+~`\\-=\\[\\]{};':\"\\\\|,.<>\\/?";
  const specialCharsRegex = `[${specialChars}]`;
  // Only number, alphabets, or symbols
  const weakRegex = new RegExp(`^[0-9]+$|^[A-Za-z]+$|^${specialCharsRegex}+$`);

  // Only two out of three
  const goodRegex = new RegExp(
    `^((?=.*[A-Za-z])(?=.*[0-9])|(?=.*[0-9])(?=.*${specialCharsRegex})|(?=.*${specialCharsRegex})(?=.*[A-Za-z]))[A-Za-z0-9${specialChars}]+$`
  );

  const strongRegex = new RegExp(
    `^(?=.*[0-9])(?=.*[A-Za-z])(?=.*[${specialChars}])[A-Za-z0-9${specialChars}]+$`
  );
  const numbersAndSpecialCharsRegex = new RegExp(
    `^(?=.*[0-9])(?=.*[${specialChars}])[0-9${specialChars}]+$`
  );

  if (strongRegex.test(password)) {
    return "Strong";
  } else if (goodRegex.test(password)) {
    return "Good";
  } else if (weakRegex.test(password)) {
    return "Weak";
  } else {
    return "";
  }
}
