import mongoose, { model } from "mongoose";

const todoSchema = new mongoose.Schema(
  {
    content: {
      type: String,
      required: true,
    },
    complete: {
      //complete for checked mark if all the todo tag completelly executed
      type: String,
      default: false,
    },
    createBy: {
      // Ho skta hai ki big project ho to big project me kisne entity create kiya
      type: mongoose.Schema.Types.ObjectId, // jaise hi mongoose ko ye type dikhta hai vo jaan jata hai ki aap koi na koi reference dene vale ho
      ref: "User",
    },
    subTodo: [{ type: mongoose.Schema.Types.ObjectId, ref: "SubTodo" }] //Array of subtodos
  },
  { timestamps }
);

export const Todo = mongoose.model("Todo", todoSchema);
