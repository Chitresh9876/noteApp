import mongoose, { mongo } from "mongoose";

const groupModel = mongoose.Schema(
  {
    groupName: {
      type: String,
      trim: true,
      require: true,
    },
    color: {
      type: String,
      require: true,
    },
  },
  {
    timestamps: true,
  }
);

const Group = mongoose.model("Group", groupModel);
export default Group;
