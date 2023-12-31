import mongoose, { Schema, models } from "mongoose";

const todoSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    // isDone: {
    //     type: Boolean,
    //     default: false
    // }
  },
  {
    timestamps: true,
  }
);

const Todos = mongoose.models.Todos || mongoose.model("Todos", todoSchema);

export default Todos;
