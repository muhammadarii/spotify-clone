import axios from "axios";
import React, { useEffect, useState, useRef } from "react";

const ComponentOne = () => {
  const [accessToken, setAccessToken] = useState(null);
  const [popularTracks, setPopularTracks] = useState([]);
  const scrollRef = useRef(null);

  useEffect(() => {
    const token = localStorage.getItem("access_token");
    if (token) {
      setAccessToken(token);
    } else {
      console.error("Access token not found");
    }
  }, []);

  useEffect(() => {
    const fetchPopularTracks = async () => {
      if (!accessToken) return;

      try {
        const response = await axios.get(
          "https://api.spotify.com/v1/artists/0TnOYISbd1XYRBk9myaseg/top-tracks?market=US",
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );
        setPopularTracks(response.data.tracks);
      } catch (error) {
        console.error("Error fetching popular tracks:", error);
      }
    };

    fetchPopularTracks();
  }, [accessToken]);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: -300, // Adjust scroll distance
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: 300, // Adjust scroll distance
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="w-full h-auto p-2">
      <div className="flex flex-row justify-between items-center">
        <p className="text-white text-sm font-semibold">Popular Artists</p>
        <div className="flex gap-2">
          <button
            onClick={scrollLeft}
            className="text-white bg-gray-700 p-2 rounded-full"
          >
            &lt;
          </button>
          <button
            onClick={scrollRight}
            className="text-white bg-gray-700 p-2 rounded-full"
          >
            &gt;
          </button>
        </div>
      </div>
      <div
        className="flex flex-row overflow-x-auto scrollbar-hide mt-2"
        ref={scrollRef}
      >
        {popularTracks.length > 0 ? (
          popularTracks.map((track) => (
            <div key={track.id} className="m-4 flex-shrink-0">
              <img
                src={track.album.images[0].url}
                alt={track.name}
                className="bg-white w-[170px] h-[170px] rounded-full object-cover"
              />
              <div className="flex flex-col my-2">
                <p className="text-white">{track.artists[0].name}</p>
                <p className="text-[#B3B3B3] w-[200px] truncate">
                  {track.name}
                </p>
              </div>
            </div>
          ))
        ) : (
          <p className="text-white">No tracks available</p>
        )}
      </div>
    </div>
  );
};

export default ComponentOne;
