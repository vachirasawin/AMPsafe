import mongoose, { Schema } from "mongoose";

const devicesLogSchema = new Schema(
    {
        name: {
            type: String,
            required: true
        },
        value: {
            type: Number,
            required: true
        },
        status: {
            type: String, 
            enum: ['safe', 'warning', 'dangerous'],
            required: true
        }
    }, { timestamps: true }
)

const DevicesLog = mongoose.models.DevicesLog || mongoose.model("DevicesLog", devicesLogSchema);

export default DevicesLog;