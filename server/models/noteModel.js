import mongoose from "mongoose";

const noteModel = mongoose.Schema(
  {
    content: {
      type: String,
      require: true,
      trim: true,
    },
    groupId: {
      type: mongoose.Schema.ObjectId,
      ref: "Group",
    },
  },
  {
    timestamps: true,
  }
);

const Note = mongoose.model("Note", noteModel);
export default Note;
