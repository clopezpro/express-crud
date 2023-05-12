import express from "express";
const router = express.Router();
router.get("/", (_req, res) => {
	res.send("Hello World");
});
import { M_contact } from "../models/Contact";
router.get("/insert", async (_req, res) => {
	try {
		const { username, name, number, email } = _req.query;
		const contactInsert = new M_contact({
			username,
			name,
			number,
			email,
		});
		await contactInsert.save();
		res.json({
			result: 1,
			message: "ok",
		});
	} catch (error) {
		let message;
		if (error instanceof Error) message = error.message;
		else message = String(error);
		res.json({
			result: 0,
			message,
		});
		reportError({ message });
	}
});
router.get("/all", async (_req, res) => {
	try {
		const contacts = await M_contact.find();
		res.json({
			result: 1,
			data: contacts,
		});
	} catch (error) {
		let message;
		if (error instanceof Error) message = error.message;
		else message = String(error);
		res.json({
			result: 0,
			message,
		});
		reportError({ message });
	}
});
/* module.exports.default=router */
export default router;
