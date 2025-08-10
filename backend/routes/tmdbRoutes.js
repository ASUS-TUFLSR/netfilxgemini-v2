import express from "express";
import dotenv from "dotenv";
dotenv.config();

const router = express.Router();
const TMDB_API_KEY = process.env.TMDB_API_KEY; // Must be full v4 Bearer token

router.get("/popular", async (req, res) => {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1`,
      {
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${TMDB_API_KEY}`
        }
      }
    );

    if (!response.ok) throw new Error(`TMDB fetch failed: ${response.status}`);
    const data = await response.json();
    res.json(data);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: "TMDB fetch failed" });
  }
});

export default router;
