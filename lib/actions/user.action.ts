"use server"

import { connectToDB } from "@/database/mongoose"
import User from "@/database/user.model";

export async function getUserById(params:any){
    try{
        connectToDB();
        const {userId} = params;

        const user = await User.findOne({clerkId: userId})
        return user;

    }catch(err){
        console.log(err)
    }
}