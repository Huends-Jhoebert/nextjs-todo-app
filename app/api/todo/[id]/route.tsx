import { NextRequest, NextResponse } from "next/server";
import Todo from "../../../../models/todo";
import connectDB from "../../../../lib/mongodb";

export async function GET(request, { params }) {
  const { id } = params;
  await connectDB();
  const topic = await Todo.findOne({ _id: id });
  return NextResponse.json({ topic }, { status: 200 });
}

export async function PUT(request, { params }) {

  const { id } = params;
  const { newTitle: title, newDescription: description } = await request.json();
  await connectDB();
  await Todo.findByIdAndUpdate(id, { title, description });
  return NextResponse.json({ message: "Topic Updated" }, { status: 200 });
}


// export async function DELETE({ params }: { params: { id: string } }) {
//   const id = params.id;

//   await connectDB();

//   const RemoveTodo = await Todo.deleteOne({ _id: id });

//   if (RemoveTodo) {
//     return NextResponse.json({ status: 200 });
//   }
//   return NextResponse.json({ status: 400 });
// }
