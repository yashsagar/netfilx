import { fetchFromTMDB } from "../services/tmdb.service.js";

export async function getTrendingForLandingPage(req, res) {
  try {
    const { type } = req.params;
    const RANDOM_MOVIE_URL = `https://api.themoviedb.org/3/trending/${type}/day?language=en-US`; //?language=en-US  hi (hindi)
    const data = await fetchFromTMDB(RANDOM_MOVIE_URL);
    res.json({ success: true, content: data.results });
  } catch (error) {
    console.log(
      "failed to fetch random movie from TMDB error: " + error.message
    );
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
}
