"use server";
import { connectToDB } from "@/database/mongoose";

export async function createQuestion(params:any){
    try{
        connectToDB()
    }catch(err){
        console.log(err)
    }
}