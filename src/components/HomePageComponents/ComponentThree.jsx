import React, { useEffect, useState } from "react";
import { GetCategories } from "../../api/GetCategories";

const ComponentThree = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const response = await GetCategories();
      setCategories(response);
    };
    fetchCategories();
  }, []);

  const limitedCategories = categories.slice(0, 5); //slice first 5
  // console.log(categories);
  return (
    <div className="w-full h-auto p-2">
      <div className="flex flex-row justify-between">
        <p className="text-white text-sm font-semibold">All Categories</p>
        <p className="text-[#B3B3B3] text-xs">show all</p>
      </div>
      <div className="flex flex-row justify-center overflow-x-auto scrollbar-hide">
        {limitedCategories.length > 0 ? (
          limitedCategories.map((category) => (
            <div key={category.id} className="m-4">
              <div className="flex flex-col">
                <img
                  src={category.icons[0].url}
                  alt={category.name}
                  className="w-[170px] h-[170px] rounded-lg bg-white"
                />
                <p className="text-white w-[200px] truncate">{category.name}</p>
              </div>
            </div>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};

export default ComponentThree;
