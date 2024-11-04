import React from "react";

export default function AdventureCards({ adventure }) {
  return (
    <div className="text-center font-extrabold font-[var(--font-outfit-semibold)] overflow-hidden ">
      <img
        src={adventure.image}
        alt={adventure.name}
        style={{
          width: "100%",
          height: "140px",
          objectFit: "cover",
          borderTopLeftRadius: "10px",
          borderTopRightRadius: "10px",
        }}
      />
      <h2 className="mt-1 text-xs p-2">{adventure.name}</h2>
    </div>
  );
}
