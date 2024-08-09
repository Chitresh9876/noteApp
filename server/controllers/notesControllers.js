import Note from "../models/noteModel.js";
import { failtureResponse, successResponse } from "../services/response.js";

export const createNote = async (req, res) => {
  const { content, groupId } = req.body;
  if (!content || !groupId) {
    res.status(400).json(failtureResponse("Enter all the details"));
  }

  const note = await Note.create({
    content,
    groupId,
  });

  if (!note) {
    res.status(400).json(failtureResponse("Failed to add note."));
  }

  res.status(200).json(successResponse("Note added successfully."));
};


        //Way 1:
export const fetchAllNotes = async (req, res) => {
  const groupId = req.params.groupId;

  await Note.find({ groupId: { $eq: groupId } })
    .sort({ updatedAt: -1 })
    .then((result) => {
      res.status(200).json({
        success: true,
        result,
      });
    })
    .catch((error) => {
      res.status(400).json(failtureResponse(error?.message));
    });

    


        // Way 2
  // const notes = await Note.find({ groupId: groupId });

  // if (!notes) {
  //     res.status(400).json(failtureResponse("Server Error"));
  // }

  // res.status(200).json({
  //     success: true,
  //     notes
  // });
};
