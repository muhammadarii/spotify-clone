import axios from "axios";

export const SearchTracks = async (query) => {
  try {
    const response = await axios.get(
      `https://api.spotify.com/v1/search?q=${encodeURIComponent(
        query
      )}&type=track`,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      }
    );
    return response.data.tracks.items;
  } catch (error) {
    throw new Error("Failed to fetch tracks");
  }
};
