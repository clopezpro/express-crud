import { connect } from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const db = async () => {
	try {
        if (!process.env.DB_CONNECTION){
            throw new Error("DB_CONNECTION is not defined in .env file");
        }
		const db = await connect(process.env.DB_CONNECTION);
		console.log(`Connected to ${db.connection.name}`);
	} catch (error) {
		console.log(error);
	}
};
export default db;