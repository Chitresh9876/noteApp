import Group from "../models/groupModel.js";
import { failtureResponse, successResponse } from "../services/response.js";
// import Group from "../models/groupModel.js";

export const createGroup = async (req, res) => {
    const { groupName, color } = req.body;

    if (!groupName || !color) {
        res.status(400).json(failtureResponse("Enter all the fields."));
    }


    const noteGroupExists = await Group.findOne({ groupName });

    if (noteGroupExists) {
        res.status(400).json(failtureResponse("Group with same name already exists."))
    }


    const noteGroup = await Group.create({
        groupName,
        color
    });

    if (!noteGroup) {
        res.status(400).json(failtureResponse("Failed to create note group."));
    }

    res.status(200).json(successResponse("Note group created successfully."))
}


export const fetchAllGroup = async (req, res) => {
    const allGroups = await Group.find();

    res.status(200).json({
        success: true,
        allGroups
    });
}