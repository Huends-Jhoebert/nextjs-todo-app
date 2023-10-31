import Todo from "../../../models/todo";
import { NextResponse, NextRequest } from "next/server";
import connectDB from "../../../lib/mongodb";

export async function POST(request) {
  const { title, description } = await request.json();

  await connectDB();

  const todo = await Todo.create({ title, description });

  if (todo) {
    return NextResponse.json({ status: 200 });
  } else {
    return NextResponse.json({ status: 400 });
  }
}

export async function GET() {
  await connectDB();

  const todo = await Todo.find({})
    .limit(5)
    .sort({ createdAt: -1 })
    .select("_id title description")
    .exec();

  if (todo) {
    return NextResponse.json({ status: 200, todo });
  }

  return NextResponse.json({ status: 400 });
}
