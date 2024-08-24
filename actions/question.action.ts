"use server";
import { connectToDatabase } from "@/lib/mongoose";
import Question from "@/models/question.model";
import Tag from "@/models/tag.model";
import User from "@/models/user.model";

import { GetQuestionParams, CreateQuestionParams } from "./shared.types";
import { revalidatePath } from "next/cache";

// fetching all questions
export const getAllQuestions = async (params: GetQuestionParams) => {
  try {
    await connectToDatabase();

    // this populate we do because every question will have a tags collection assosiated with it and it will help to get the data from asosiatd collection
    // same for user
    const questions = await Question.find({})
      .populate({ path: "tags", model: Tag })
      .populate({ path: "author", model: User })
      .sort({ createdAt: -1 });

    return { questions };
  } catch (e) {
    console.error(e);
  }
};

// for createing question
export async function createQuestion(params: CreateQuestionParams) {
  try {
    await connectToDatabase();
    const { title, tags, explaination: content, author, path } = params;
    console.log({
      title,
      content,
      tags,
      author,
      path,
    });

    // create question
    const question = await Question.create({
      title,
      content,
      author,
    });

    // manipulating the tags to be added.
    const tagDocuments = [];

    // here either create the new tag or get the tag from database if it already exists.
    for (const tag of tags) {
      /**
            checking if tag already exists in the db
             *  function findOneAndUpdate(filter, update, options) {}
             */
      const existingTag = await Tag.findOneAndUpdate(
        { name: { $regex: new RegExp(`^${tag}$`, "i") } },
        { $setOnInsert: { name: tag }, $push: { question: question._id } },
        { upsert: true, new: true }
      );
      // pushing tag in array
      tagDocuments.push(existingTag._id);
    }
    // findig question in the db which is recently created and updating tags in that question.
    await Question.findByIdAndUpdate(question._id, {
      $push: { tags: { $each: tagDocuments } },
    });

    // todo create an interaction for ask-question action

    // todo increase author's reputation by 5 points for asking a question

    // revalidating path showing the created question
    revalidatePath(path);
  } catch (err) {
    console.error(err);
  }
}
