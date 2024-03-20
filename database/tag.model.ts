import {Schema, models, model, Document} from 'mongoose';

export interface ITag extends Document {
name:string,
description:string,
questions: Schema.Types.ObjectId[]
createdOn:Date,
followers: Schema.Types.ObjectId[]
}

const tagSchema = new Schema<ITag>({
    name: {type: String, required:true},
    description: {type: String, required:true},
    questions: [{type: Schema.Types.ObjectId, ref: 'Question'}],
    followers: [{type:Schema.Types.ObjectId, ref: 'User'}],
    createdOn: {type:Date, default: Date.now},
})

const User = models.User || model('Tag', tagSchema);

export default User;