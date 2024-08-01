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

  // console.log(categories);
  return (
    <div className="w-full h-auto p-2">
      <div className="flex flex-row justify-between">
        <p className="text-white text-sm font-semibold">All Categories</p>
      </div>
      <div className="flex flex-row overflow-x-auto scrollbar-hide">
        {categories.length > 0 ? (
          categories.map((category) => (
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
