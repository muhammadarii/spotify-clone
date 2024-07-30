import axios from "axios";

export const getPopularArtist = async () => {
  try {
    const response = await axios.get(
      "https://api.spotify.com/v1/artists/0TnOYISbd1XYRBk9myaseg/top-tracks?market=US",
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      }
    );

    return response.data.tracks;
  } catch (error) {
    throw new Error("Failed to fetch new releases");
  }
};
