import { Schema, model, models, Document } from "mongoose";

// typescript representation of our question model
export interface IQuestion extends Document {
    title: string;
    content: string;
    tags: Schema.Types.ObjectId[]; // refrence to another model
    views: number;
    upvotes: Schema.Types.ObjectId[]; // refrence to another model
    downvotes: Schema.Types.ObjectId[]; // refrence to another model
    author: Schema.Types.ObjectId; // refrence to another model
    answers: Schema.Types.ObjectId[]; // refrence to another model
    createdAt: Date;
}

const QuestionSchema = new Schema<IQuestion>({
    title: { type: String, required: true },
    content: { type: String, required: true },
    tags: [{ type: Schema.Types.ObjectId, ref: 'Tag' }],
    views: { type: Number, default: 0 },
    upvotes: [{ type: Schema.Types.ObjectId, ref: 'User' }],
    downvotes: [{ type: Schema.Types.ObjectId, ref: 'User' }],
    author: { type: Schema.Types.ObjectId,ref:'User'},
    answers: [{ type: Schema.Types.ObjectId, ref: 'Answer' }],
    createdAt: {type: Date, default: Date.now}
})

// creating the model here. First checking if it exists in models if not then create new.
const Question = models.Question || model<IQuestion>('Question', QuestionSchema);

export default Question;