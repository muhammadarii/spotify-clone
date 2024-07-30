import axios from "axios";

export const getPopulerAlbums = async () => {
  try {
    const response = await axios.get(
      "https://api.spotify.com/v1/browse/new-releases",
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      }
    );

    return response.data.albums.items;
  } catch (error) {
    throw new Error("Failed to fetch new releases");
  }
};
