import { NextRequest, NextResponse } from "next/server";
import { sql } from "@vercel/postgres";
const moment = require("moment");
const bcrypt = require("bcrypt");

// Registering as an user
export async function POST(req: NextRequest) {
  const data = await req.json();
  const { email, password } = data;

  // Generate current timestamp
  const timestamp = moment().format();

  try {
    // check if user's been registered already
    const checkUser =
      await sql`SELECT id FROM account WHERE email = (${email})`;
    if (checkUser.rows.length > 0) {
      return NextResponse.json(
        { message: "Email is already registered." },
        { status: 400 }
      );
    }
    const saltRounds = parseInt(process.env.SALT_ROUNDS || "10", 10);
    const hashedPassword = await bcrypt.hash(password, Number(saltRounds));
    // Try to insert user information
    const result =
      await sql`INSERT INTO account (email, password, date) VALUES (${email}, ${hashedPassword},${timestamp}) RETURNING *`;
    return NextResponse.json({
      message: "Form submitted successfully!",
      data: result.rows[0],
    });
  } catch (error) {
    return NextResponse.json(
      { message: "Error submitting form", error },
      { status: 500 }
    );
  }
}
