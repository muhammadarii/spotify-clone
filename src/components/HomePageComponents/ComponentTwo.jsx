import React, { useEffect, useState } from "react";
import { getPopulerAlbums } from "../../api/PopularAlbums";

const ComponentTwo = () => {
  const [popularAlbums, setPopularAlbums] = useState([]);

  useEffect(() => {
    const fetchPopularAlbums = async () => {
      const response = await getPopulerAlbums();
      setPopularAlbums(response);
    };
    fetchPopularAlbums();
  }, []);

  const limitedPopularAlbums = popularAlbums.slice(0, 5); //slice first 5
  // console.log(popularAlbums);

  return (
    <div className="w-full h-auto p-2">
      <div className="flex flex-row justify-between">
        <p className="text-white text-sm font-semibold">Popular albums</p>
        <p className="text-[#B3B3B3] text-xs cursor-pointer">show all</p>
      </div>
      <div className="flex flex-row justify-center overflow-x-auto scrollbar-hide">
        {limitedPopularAlbums.length > 0 ? (
          limitedPopularAlbums.map((popularAlbum) => (
            <div key={popularAlbum.id} className=" m-4">
              <img
                src={popularAlbum.images[0].url}
                alt={popularAlbum.name}
                className="bg-white w-[170px] h-[170px] rounded-lg"
              />
              <div className="flex flex-col my-2">
                <p className="text-white">{popularAlbum.name}</p>
                <p className="text-[#B3B3B3] w-[200px] truncate">
                  {popularAlbum.artists[0].name}
                </p>
              </div>
            </div>
          ))
        ) : (
          <p className="text-white">Loading...</p>
        )}
      </div>
    </div>
  );
};

export default ComponentTwo;
