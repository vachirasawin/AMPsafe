import mongoose, { Schema } from "mongoose";

const createCard = new Schema(
    {
        symbol: String,
        title: {
            type: String,
            required: true
        },
        detail: {
            type: String,
            required: true
        },
        url: {
            type: [String],
            required: true
        },
        width: {
            type: String,
            required: true
        },
        height: {
            type: String,
            required: true
        }
    },
    {
        timestamps: true
    }
)

const CreateCard = mongoose.models.CreateCard || mongoose.model("CreateCard", createCard);

export default CreateCard;