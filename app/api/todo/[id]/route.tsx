import { NextRequest, NextResponse } from "next/server";
import Todo from "../../../../models/todo";
import connectDB from "../../../../lib/mongodb";

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const id = params.id;

  await connectDB();

  const findTodoDetails = await Todo.findOne({ _id: id })
    .select("_id title description")
    .exec();

  if (findTodoDetails) {
    return NextResponse.json({ status: 200, findTodoDetails });
  }
  return NextResponse.json({ status: 400 });
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const id = params.id;
  const { newDescription } = await request.json();

  await connectDB();

  const updateTodo = await Todo.findOneAndUpdate(
    { _id: id },
    { description: newDescription },
    { new: true }
  );

  if (updateTodo) {
    return NextResponse.json({ status: 200 });
  }
  return NextResponse.json({ status: 400 });
}

export async function DELETE({ params }: { params: { id: string } }) {
  const id = params.id;

  await connectDB();

  const RemoveTodo = await Todo.deleteOne({ _id: id });

  if (RemoveTodo) {
    return NextResponse.json({ status: 200 });
  }
  return NextResponse.json({ status: 400 });
}
