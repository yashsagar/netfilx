import { fetchFromTMDB } from "../services/tmdb.service.js";
import { User } from "../models/user.model.js";

function urlGenerator(type, query) {
  return `https://api.themoviedb.org/3/search/${type}?query=${query}&include_adult=false&language=en-US&page=1`;
}
export async function search(req, res) {
  const { type, query } = req.params;
  const url = urlGenerator(type, query);

  try {
    const data = await fetchFromTMDB(url);
    if (data.results.length === 0) {
      return res.status(404).send(null);
    }

    await User.findByIdAndUpdate(req.user._id, {
      $push: {
        searchHistory: {
          id: data.results[0].id,
          image: data.results[0].profile_path,
          title: data.results[0].name,
          searchType: type,
          createdAt: new Date(),
        },
      },
    });

    res.status(200).json({ success: true, content: data.results });
  } catch (error) {
    console.log("Erroe in search controller:", error.message);
    res.status(500).json({ success: false, message: "internal server error" });
  }
}

// movies https://api.themoviedb.org/3/search/movie?query=yash&include_adult=false&language=en-US&page=1
//person https://api.themoviedb.org/3/search/person?query=yash&include_adult=false&language=en-US&page=1
// tv 'https://api.themoviedb.org/3/search/tv?query=yash&include_adult=false&language=en-US&page=1

export async function getSearchHistory(req, res) {
  try {
    res.status(200).json({ success: true, content: req.user.searchHistory });
  } catch (error) {
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
}

export async function removeItemFromSearchHistory(req, res) {
  let { id } = req.params;
  id = parseInt(id);
  try {
    await User.findByIdAndUpdate(req.user._id, {
      $pull: {
        searchHistory: { id: id },
      },
    });

    res
      .status(200)
      .json({ success: true, message: "item removed from search history" });
  } catch (error) {
    console.log("Error in removeItemFromHistory controller: ", error.message);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
}
