import { NextRequest, NextResponse } from "next/server";
import { sql } from "@vercel/postgres";

// Handle login request
export async function POST(req: NextRequest) {
  const data = await req.json();
  const { email, password } = data;

  try {
    const result =
      await sql`SELECT id FROM account WHERE email = ${email} AND password = ${password}`;
    if (result.rows.length > 0) {
      return NextResponse.json({
        message: "Login successfully.",
        data: result.rows[0],
      });
    } else {
      return NextResponse.json(
        { message: "Invalid email or password." },
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
