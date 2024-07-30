import React, { useEffect } from "react";
import { getPopularArtist } from "../../api/PopularArtist";

const ComponentOne = () => {
  const [popularTracks, setPopularTracks] = React.useState([]);
  const scrollRef = React.useRef(null);

  useEffect(() => {
    const fetchPopularTracks = async () => {
      const response = await getPopularArtist();
      setPopularTracks(response);
    };
    fetchPopularTracks();
  }, []);

  console.log(popularTracks);

  return (
    <div className="w-full h-auto p-2">
      <div className="flex flex-row justify-between items-center">
        <p className="text-white text-sm font-semibold">Popular Artists</p>
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
