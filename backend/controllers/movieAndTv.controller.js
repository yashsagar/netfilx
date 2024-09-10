import { fetchFromTMDB } from "../services/tmdb.service.js";

export async function getTrending(req, res) {
  try {
    const { type } = req.params;
    const RANDOM_MOVIE_URL = `https://api.themoviedb.org/3/trending/${type}/day?language=en-US`;
    const data = await fetchFromTMDB(RANDOM_MOVIE_URL);
    const randomMovie =
      data.results[Math.floor(Math.random() * data.results?.length)];
    res.json({ success: true, content: randomMovie });
  } catch (error) {
    console.log(
      "failed to fetch random movie from TMDB error: " + error.message
    );
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
}

export async function getTrailers(req, res) {
  const { id, type } = req.params;
  const TRAILER_VIDEO = `https://api.themoviedb.org/3/${type}/${id}/videos?language=en-US`;
  try {
    const data = await fetchFromTMDB(TRAILER_VIDEO);
    res.json({ success: true, trailer: data.results });
  } catch (error) {
    if (error.message.includes("404")) {
      return res.status(404).send(null);
    }

    res.status(500).json({ success: false, message: "internal Server Error" });
  }
}

export async function getDetails(req, res) {
  const { id, type } = req.params;
  const MOVIE_DETAILS = `https://api.themoviedb.org/3/${type}/${id}?language=en-US`;

  try {
    const data = await fetchFromTMDB(MOVIE_DETAILS);
    res.json({ success: true, content: data });
  } catch (error) {
    if (error.message.includes("404")) {
      return res.status(404).send(null);
    }
    res.status(500).json({ success: false, message: "internal Server Error" });
  }
}

export async function getSimilar(req, res) {
  const { id, type } = req.params;
  const SIMILAR_MOVIES = `https://api.themoviedb.org/3/${type}/${id}/similar?language=en-US&page=1`;

  try {
    const data = await fetchFromTMDB(SIMILAR_MOVIES);
    res.json({ success: true, content: data.results });
  } catch (error) {
    if (error.message.includes("404")) {
      return res.status(404).send(null);
    }
    res.status(500).json({ success: false, message: "internal Server Error" });
  }
}

export async function getByCategory(req, res) {
  const { category, type } = req.params;

  const CATEGORY_URL = `https://api.themoviedb.org/3/${type}/${category}?language=en-US&page=1`;

  try {
    const data = await fetchFromTMDB(CATEGORY_URL);
    res.json({ success: true, content: data.results });
  } catch (error) {
    if (error.message.includes("404")) {
      return res.status(404).send(null);
    }
    res.status(500).json({ success: false, message: "internal Server Error" });
  }
}
