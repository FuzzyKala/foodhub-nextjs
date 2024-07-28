import { NextRequest, NextResponse } from "next/server";
import { sql } from "@vercel/postgres";

const checkInfoValid = (email: string, password: string) => {
  if (!email || !password) {
    return NextResponse.json(
      { message: "Email and password are required." },
      { status: 400 }
    );
  }
  if (!email.includes("@")) {
    // const emailCharArr = email.split("@");
    // console.log(emailCharArr);
    return NextResponse.json(
      { message: "Invalid Email format." },
      { status: 400 }
    );
  }
};
// Registering as an user
export async function POST(req: NextRequest) {
  const data = await req.json();
  const { email, password } = data;

  // Make sure the information isn't empty.
  const validationResponse = checkInfoValid(email, password);
  if (validationResponse) {
    return validationResponse;
  }

  // Try to insert user information
  try {
    const result =
      await sql`INSERT INTO account (email, password) VALUES (${email}, ${password}) RETURNING *`;
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
