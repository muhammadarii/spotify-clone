import React, { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import axios from "axios";

const SearchTrack = () => {
  const [accessToken, setAccessToken] = useState(null);
  const [query, setQuery] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [tracks, setTracks] = useState([]);

  useEffect(() => {
    // Retrieve access token from localStorage or other storage
    const token = localStorage.getItem("access_token");
    if (token) {
      setAccessToken(token);
    } else {
      console.error("Access token not found.");
    }
  }, []);

  const handleSearchClick = () => {
    setShowForm(!showForm);
  };

  const handleClick = async () => {
    if (!accessToken) {
      console.error("Access token is not set.");
      return;
    }
    const url = `https://api.spotify.com/v1/search?q=${encodeURIComponent(
      query
    )}&type=track`;
    try {
      const response = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      setTracks(response.data.tracks.items);
    } catch (err) {
      console.error(err);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleClick();
    }
  };

  return (
    <div>
      <div
        className="flex flex-row gap-1 ml-0.5 cursor-pointer"
        onClick={handleSearchClick}
      >
        <FaSearch className="text-white text-xl" />
        <span className="text-white">Search</span>
      </div>
      {showForm && (
        <div className="mt-2">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Search for a track"
            className="p-2 border rounded"
          />
        </div>
      )}
      {tracks.length > 0 && (
        <div className="mt-4 max-h-80 overflow-y-auto scrollbar-hide">
          <h3 className="text-white mb-2">Search Results:</h3>
          <ul className="list-none p-0">
            {tracks.map((track) => (
              <li
                key={track.id}
                className="flex flex-row items-center my-2 p-2 border-b border-gray-700"
              >
                <div className="my-4">
                  <img
                    src={track.album.images[0].url}
                    alt={track.name}
                    className="w-[80px] h-[80px] rounded-full object-cover"
                  />
                </div>
                <div className="ml-4">
                  <p className="text-[#B3B3B3] ">{track.artists[0].name}</p>

                  <p className="text-white w-[100px] truncate">{track.name}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SearchTrack;
