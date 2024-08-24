"use server";

import { connectToDatabase } from "@/lib/mongoose";
import User from "@/models/user.model";

export const getUserById = async (params:any) => {
    try { 
        await connectToDatabase();
        const { userId } = params;
        const user = await User.findOne({ clerkId: userId });
        return user;
    }
    catch (e) {
        console.log(e)
    }
}