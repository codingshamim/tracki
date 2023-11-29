import React from "react";

export default function TopbarItem({img,title}) {
  return (
    <li className="flex gap-1 text-sm items-center text-[#727272]">
      <img
        className="w-[20px] h-[20px] object-cover"
        src={img}
        alt="location-img"
      />
     {title}
    </li>
  );
}
