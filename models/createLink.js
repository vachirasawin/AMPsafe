import mongoose, { Schema } from "mongoose";

const createLink = new Schema(
    {
        url: {
            type: [String],
            required: true
        },
        access: {
            type: String,
            required: true
        }
    },
    {
        timestamps: true
    }
)

const CreateLink = mongoose.models.CreateLink || mongoose.model("CreateLink", createLink);

export default CreateLink;