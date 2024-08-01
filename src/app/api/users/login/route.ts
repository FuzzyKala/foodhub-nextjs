import { NextRequest, NextResponse } from "next/server";
import { sql } from "@vercel/postgres";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

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
        // token expired time
        const expiresIn = 60 * 60; // 1 hour
        const token = jwt.sign(
          { email: email },
          process.env.JWT_SECRET ?? "defaultSecret",
          {
            expiresIn: expiresIn,
          }
        );
        // console.log(token);
        return NextResponse.json({
          message: "Login successfully.",
          token: token,
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
        { message: "Email can not be found." },
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
