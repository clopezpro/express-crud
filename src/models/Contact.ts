import { Schema, model } from 'mongoose';

const contactSchema = new Schema({
    username: String,
    name: {
        type: String,
        required: true
    },
    number: {
        type: String,
        required: true,
        unique: true,
    },
    email: String,
}, {
    timestamps: true,
    versionKey: false
})
export const M_contact = model("Contacts", contactSchema);

