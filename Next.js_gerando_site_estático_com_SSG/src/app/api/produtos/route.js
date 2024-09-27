import { getTodosProdutos } from "@/lib/api";
import { NextResponse } from "next/server";

export async function GET() {
    const produtos = getTodosProdutos();
    return NextResponse.json({produtos});
}
