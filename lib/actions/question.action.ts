"use server";
import { connectToDB } from "@/database/mongoose";
import Question from "@/database/question.model";
import Tag from "@/database/tag.model"
import { wait } from "../utils";

export async function createQuestion(params:any){
    try{
        connectToDB();
        // this path taken from params to tell next js that it has to revalidate the path where all questions are rendered.
        const {title,content,tags, author, path} = params;

        await wait(1500)

        // creating question in our db
        const question = await Question.create({
            title,
            content,
            author
        })

        const tagDocuments = [];

        // create a new tag or get an already existing tag
       // Create a new tag or get an already existing tag
       for (const tag of tags) {
            const existingTag = await Tag.findOneAndUpdate(
                { name: { $regex: new RegExp(`^${tag}$`, "i") } },
                { $setOnInsert: { name: tag }, $push: { question: question._id } },
                { upsert: true, new: true }
            );
            tagDocuments.push(existingTag._id);
       }

        // Updating question with tags
        await Question.findByIdAndUpdate(question._id, {
            $push: { tags: { $each: tagDocuments } }
        });

        // create and interaction for user's ask_question

        // Increment author's reputation for creating a question.

    }catch(err){
        console.log(err)
    }
}