import React from "react";

export default function HeroImage({ src }) {
  return (
    <img
      src={src}
      style={{ height: "40vmin" }}
      className="w-full object-cover object-center md: bg-gray-200"
    ></img>
  );
}
