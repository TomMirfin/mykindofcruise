"use client";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useState } from "react";
import Slider from "react-slick";
import CruiseCard from "./CruiseCard";
import "./cruises.css";
import { NextArrow, PrevArrow } from "../../../Arrows";

export default function Cruises() {
  const [cruises, setCruises] = useState([]);

  useEffect(() => {
    const fetchCruises = async () => {
      const response = await fetch("https://jjzl6.wiremockapi.cloud/cruises");
      const data = await response.json();
      setCruises(data);
    };
    fetchCruises().catch((error) => {
      console.error("Error fetching cruises:", error);
    });
  }, []);

  const settings = {
    slidesToShow: 6,
    slidesToScroll: 3,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div className="mx-20 mt-10">
      <h1 className="text-xl font-extrabold font-[var(--font-outfit-semibold)] ml-4">
        Popular Cruises
      </h1>

      <Slider {...settings}>
        {cruises?.map((cruise) => {
          return <CruiseCard key={cruise.name} cruise={cruise} />;
        })}
      </Slider>
    </div>
  );
}
