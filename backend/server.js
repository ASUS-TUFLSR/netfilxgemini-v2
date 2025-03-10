import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { GoogleGenerativeAI } from "@google/generative-ai";


dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
const PORT = process.env.PORT || 5000; 

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY); 

app.post("/api/generate", async (req, res) => {
    try {
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash", apiVersion: "v1" });


        const result = await model.generateContent(req.body.prompt);
        const response = await result.response;
        const text = response.text(); 

        res.json({ message: text }); 
    } catch (error) {
         console.error("Gemini API Error:", error); 
        res.status(500).json({ error: error.message });
    }
});


app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
