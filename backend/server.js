import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { GoogleGenerativeAI } from "@google/generative-ai";
import tmdbRoutes from "./routes/tmdbRoutes.js";


dotenv.config();

const app = express();
app.use(cors({
  origin: "*",  // Allow all origins (change this for security)
  methods: ["GET", "POST"],
  credentials: true
}));

app.use(express.json());
app.use("/api/tmdb", tmdbRoutes);

const PORT = process.env.PORT || 5001; 

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

app.get("/", (req, res) => {
  res.send("TMDB + Gemini Proxy API is running...");
});


app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
