import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { GoogleGenerativeAI } from "@google/generative-ai";


dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
const PORT = process.env.PORT || 5001; 

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY); // Use Gemini API Key

app.post("/api/generate", async (req, res) => {
    try {
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash", apiVersion: "v1" });
        // in api version used v1 instead v1beta which is depreciated

        const result = await model.generateContent(req.body.prompt);
        const response = await result.response;
        const text = response.text(); //  Get response text

        res.json({ message: text }); //  Send response to frontend
    } catch (error) {
         console.error("Gemini API Error:", error); 
        res.status(500).json({ error: error.message });
    }
});

// Serve frontend build in production
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);
// app.use(express.static(path.join(__dirname, "../dist")));

// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "../dist", "index.html"));
// });

// 
// app.get("/api/models", async (req, res) => {
//     try {
//         const response = await fetch("https://generativelanguage.googleapis.com/v1/models?key=" + process.env.GEMINI_API_KEY);
//         const data = await response.json();
//         res.json(data);
//     } catch (error) {
//         console.error("Error listing models:", error);
//         res.status(500).json({ error: error.message });
//     }
// });
// The above get request is to check the gemini version we are using. to check version  => http://localhost:5000/api/models


app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
