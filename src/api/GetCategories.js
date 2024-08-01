import axios from "axios";

export const GetCategories = async () => {
  try {
    const response = await axios.get(
      "https://api.spotify.com/v1/browse/categories",
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      }
    );

    return response.data.categories.items;
  } catch (error) {
    if (error.response) {
      // Server responded with a status other than 2xx
      console.error("Error response:", error.response);
      throw new Error(
        `Failed to fetch categories: ${error.response.data.error.message}`
      );
    } else if (error.request) {
      // Request was made but no response received
      console.error("Error request:", error.request);
      throw new Error("No response received from server");
    } else {
      // Something else happened while setting up the request
      console.error("Error message:", error.message);
      throw new Error(`Error in request setup: ${error.message}`);
    }
  }
};
