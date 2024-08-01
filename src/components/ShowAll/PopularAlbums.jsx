import React, { useEffect, useState } from "react";
import { getPopulerAlbums } from "../../api/PopularAlbums";

const PopularAlbums = () => {
  const [popularAlbums, setPopularAlbums] = useState([]);

  useEffect(() => {
    const fetchPopularAlbums = async () => {
      const response = await getPopulerAlbums();
      setPopularAlbums(response);
    };
    fetchPopularAlbums();
  }, []);
  console.log(popularAlbums);

  return (
    <div className="w-full h-auto p-2">
      <p className="text-white text-sm font-semibold text-center mb-2">
        Popular Artist
      </p>
      <div className="flex flex-row justify-center">
        <div className="grid grid-cols-5">
          {popularAlbums.length > 0 ? (
            popularAlbums.map((popularAlbums) => (
              <div key={popularAlbums.id} className="m-4 flex-shrink-0">
                <img
                  src={popularAlbums.images[0].url}
                  alt={popularAlbums.name}
                  className="bg-white w-[170px] h-[170px] rounded-lg"
                />
                <div className="flex flex-col my-2">
                  <p className="text-white">{popularAlbums.artists[0].name}</p>
                  <p className="text-[#B3B3B3] w-[200px] truncate">
                    {popularAlbums.name}
                  </p>
                </div>
              </div>
            ))
          ) : (
            <p className="text-white">No tracks available</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default PopularAlbums;
