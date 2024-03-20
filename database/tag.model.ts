import {Schema, models, model, Document} from 'mongoose';

export interface ITag extends Document {
name:string,
description:string,
questions: Schema.Types.ObjectId[]
createdAt:Date,

}

const tagSchema = new Schema<ITag>({
    name: {type: String, required:true},
    description: {type: String, required:true},
    questions: [{type: Schema.Types.ObjectId, ref: 'Question'}],
    createdAt: {type:Date, default: Date.now}

})

const User = models.User || model('Tag', tagSchema);

export default User;