import { NextRequest, NextResponse } from "next/server";
import { sql } from "@vercel/postgres";

// Registering as an user
export async function POST(req: NextRequest) {
  const data = await req.json();
  const { email, password } = data;

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
