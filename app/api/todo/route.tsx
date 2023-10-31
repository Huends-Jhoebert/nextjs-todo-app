import Todo from "../../../models/todo";
import { NextResponse } from "next/server";
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
