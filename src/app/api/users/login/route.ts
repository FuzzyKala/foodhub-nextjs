import { NextRequest, NextResponse } from "next/server";
import { sql } from "@vercel/postgres";
const bcrypt = require("bcrypt");

// Handle login request
export async function POST(req: NextRequest) {
  const data = await req.json();
  const { email, password } = data;

  try {
    const result =
      await sql`SELECT email, password FROM account WHERE email = ${email}`;

    // if email were found
    if (result.rows.length > 0) {
      const hashedPassword = result.rows[0].password;
      const isMatch = await bcrypt.compare(password, hashedPassword);

      // if the password matched with the input
      if (isMatch) {
        return NextResponse.json({
          message: "Login successfully.",
        });
      } else {
        return NextResponse.json(
          { message: "Incorrect password" },
          { status: 401 }
        );
      }
      // if email weren't found
    } else {
      return NextResponse.json(
        { message: "Email can no be found." },
        { status: 401 }
      );
    }
  } catch (error) {
    return NextResponse.json(
      { message: "Error logging in", error },
      { status: 500 }
    );
  }
}
