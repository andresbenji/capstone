import chalk from "chalk";
import mongoose from "mongoose";
import dotenv from "dotenv";
import users from "./data/users.js";
import User from './models/userModel.js'
import connectDB from "./config/db.js";
dotenv.config()

connectDB();

const importData = async () => {
    try {
        await User.deleteMany();

        await User.insertMany(users);

        console.log(chalk.inverse.green('Data Imported!'))
        process.exit();
    } catch (error) {
        console.error(chalk.inverse.red(`${error}`));
        process.exit(1);
    }
}

importData();
