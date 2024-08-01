import crypto from "crypto";
import fs from "fs";
import path from "path";

console.log("Current NODE_ENV:", process.env.NODE_ENV);

export function generateSecret(length: number): string {
  return crypto.randomBytes(length).toString("hex");
}

const envFilePath = path.resolve(".env.development.local");

if (process.env.NODE_ENV === "development") {
  const secret = generateSecret(32);

  // Read the existing content
  let fileContent = "";
  if (fs.existsSync(envFilePath)) {
    fileContent = fs.readFileSync(envFilePath, "utf-8");
  }
  // Check if JWT_SECRET already exists
  const secretRegex = /^JWT_SECRET=.*$/m;
  const newContent = secretRegex.test(fileContent)
    ? fileContent.replace(secretRegex, `JWT_SECRET=${secret}`)
    : `${fileContent}\nJWT_SECRET=${secret}`;

  // Write the updated content
  fs.writeFileSync(envFilePath, newContent.trim() + "\n");
  console.log("JWT secret generated and saved to .env.development.local");
} else {
  console.log("NODE_ENV is not development, skipping secret generation.");
}
