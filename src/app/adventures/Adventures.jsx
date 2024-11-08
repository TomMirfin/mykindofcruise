"use client";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useEffect, useState } from "react";

import AdventureCards from "./AdventureCards";
import "./adventures.css";
import { NextArrow, PrevArrow } from "../../../Arrows";

export default function Adventures() {
  const [adventures, setAdventures] = useState([]);

  useEffect(() => {
    const fetchAdventures = async () => {
      const response = await fetch(
        "https://jjzl6.wiremockapi.cloud/adventures"
      );
      const data = await response.json();
      setAdventures(data);
    };

    fetchAdventures().catch((error) => {
      console.error("Error fetching adventures:", error);
    });
  }, []);

  const settings = {
    slidesToShow: 6,
    slidesToScroll: 3,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="mx-20 mt-10">
      <h1
        className={`text-xl font-extrabold font-[var(--font-outfit-semibold)] ml-4`}
      >
        My Adventures
      </h1>
      <Slider {...settings} className="slick-slide-adventures">
        {adventures?.map((adventure) => {
          if (adventure.name && adventure.image) {
            return (
              <div key={adventure.id} className="adventure-card">
                <AdventureCards adventure={adventure} />
              </div>
            );
          } else {
            return null;
          }
        })}
      </Slider>
    </div>
  );
}
