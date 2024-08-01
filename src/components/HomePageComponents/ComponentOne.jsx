import React, { useEffect, useState } from "react";
import { getPopularArtist } from "../../api/PopularArtist";
import { useNavigate } from "react-router-dom";

const ComponentOne = () => {
  const [popularTracks, setPopularTracks] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPopularTracks = async () => {
      const response = await getPopularArtist();
      setPopularTracks(response);
    };
    fetchPopularTracks();
  }, []);

  const limitedPopularTracks = popularTracks.slice(0, 5); //slice first 5
  // console.log(popularTracks);

  return (
    <div className="w-full h-auto p-2">
      <div className="flex flex-row justify-between items-center">
        <p className="text-white text-sm font-semibold">Popular Artists</p>
        <p
          onClick={() => navigate("/artist")}
          className="text-[#B3B3B3] text-xs cursor-pointer"
        >
          show all
        </p>
      </div>
      <div className="flex flex-row justify-center  mt-2">
        {limitedPopularTracks.length > 0 ? (
          limitedPopularTracks.map((track) => (
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
