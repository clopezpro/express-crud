import express from "express";
import {PathsRoutes} from "./types";
import cors from "cors";
import db  from "./databases/db";


/* routes */
import contacts from "./routes/contacts";

class Server {
	private app: express.Application;
	private paths: PathsRoutes = { contacts: "" };

	private routes = async() => {
        this.app.use("/api/contacts", contacts);
		return true;
	};
	private middlewares = () => {
		this.app.use(express.urlencoded({ extended: false }));
		this.app.use(cors());
		this.app.use(express.json());
		this.app.use(express.static("public"));
	};
	private database=async ()=> {
		await db();
	}
    public start=()=>{
        const PORT = process.env.PORT || 3000;
        this.app.listen(PORT, () => {
            console.log(`App listening on http://localhost:${PORT}/`);
        });
    }
	constructor() {
		this.app = express();
		this.paths.contacts = "/api/contacts";
		this.routes();
		this.middlewares();
        this.database();
	}
}
export default Server;