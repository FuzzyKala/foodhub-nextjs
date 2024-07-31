import { NextRequest, NextResponse } from "next/server";
import { sql } from "@vercel/postgres";

// Handle GET request
export async function GET(req: NextRequest) {
  try {
    const result = await sql`SELECT id FROM account`;
    return NextResponse.json({
      message: "Data fetched successfully.",
      data: result.rows,
    });
  } catch (error) {
    return NextResponse.json(
      {
        message: "Error fetching data",
        error,
      },
      { status: 500 }
    );
  }
}
