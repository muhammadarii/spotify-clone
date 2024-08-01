import React, { useState } from "react";
import { SearchTracks } from "../../api/SearchTracks";

const ContentOne = () => {
  const [query, setQuery] = useState("");
  const [tracks, setTracks] = useState([]);

  const handleKeyDown = async (e) => {
    if (e.key === "Enter") {
      try {
        const fetchedTracks = await SearchTracks(query);
        setTracks(fetchedTracks);
      } catch (error) {
        setTracks([]);
      }
    }
  };

  return (
    <div className="w-full h-auto">
      <div className="fixed">
        <input
          type="text"
          placeholder="What do you want to play?"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyDown}
          className="w-[300px] h-10 bg-white rounded-full px-3 m-4 text-black"
        />
      </div>
      {tracks.length > 0 && (
        <div className="pt-[100px] overflow-y-auto scrollbar-hide">
          <h3 className="text-white mb-2 px-4">Search Results:</h3>
          <ul className="list-none p-0">
            {tracks.map((track) => (
              <li
                key={track.id}
                className="flex flex-row items-center p-4 border-b border-gray-700"
              >
                <div className="my-4">
                  <img
                    src={track.album.images[0].url}
                    alt={track.name}
                    className="w-[80px] h-[80px] rounded-full object-cover"
                  />
                </div>
                <div className="ml-4">
                  <p className="text-[#B3B3B3]">{track.artists[0].name}</p>
                  <p className="text-white w-full">{track.name}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ContentOne;
