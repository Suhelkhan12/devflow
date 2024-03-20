import {Schema, models, Document, model} from 'mongoose';

export interface IQuestion extends Document {
    title: string,
    content:string,
    views:number,
    // this type because tags will store a ref to another document in our collection
    tags: Schema.Types.ObjectId[],
    upvotes: Schema.Types.ObjectId[],
    downvotes: Schema.Types.ObjectId[]
    author: Schema.Types.ObjectId,
    answers: Schema.Types.ObjectId[],
    createdAt: Date
}

const questionSchema = new Schema<IQuestion>({
    title: {type: String, required:true,},
    content: {type:String, required:true},
    views: {type:Number, default: 0},
    // this ref will store the refrence to the collection which will have tags
    tags: [{type: Schema.Types.ObjectId, ref: 'Tag'}],
    upvotes: [{type: Schema.Types.ObjectId, ref: 'User'}],
    downvotes: [{type: Schema.Types.ObjectId, ref: 'User'}],
    author: {type:Schema.Types.ObjectId, ref: 'User'},
    answers: [{type:Schema.Types.ObjectId, ref:'Answer'}],
    createdAt: {type: Date, default: Date.now},
});

// converting questionSchema to model by first checking if it already exists or not
const Question = models.Question ||  model('Question', questionSchema);

export default Question;