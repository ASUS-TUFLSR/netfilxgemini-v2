// routes/tmdbRoutes.js
import express from "express";
import fetch from "node-fetch"; // if using Node.js < 18, install: npm i node-fetch
import dotenv from "dotenv";
dotenv.config();

const router = express.Router();

router.get("/:category", async (req, res) => {
  const { category } = req.params;
  const url = `https://api.themoviedb.org/3/movie/${category}?language=en-US&page=1`;

  try {
    const response = await fetch(url, {
      headers: {
        Authorization: `Bearer ${process.env.TMDB_API_KEY}`,
        accept: "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("TMDB fetch failed");
    }

    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error("TMDB API Error:", error.message);
    res.status(500).json({ error: error.message });
  }
});

export default router;
