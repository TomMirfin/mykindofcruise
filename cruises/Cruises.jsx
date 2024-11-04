"use client";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useState } from "react";
import Slider from "react-slick";
import CruiseCard from "./CruiseCard";
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

  function NextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          background: "#1976d2",
          borderColor: "#1976d2",
        }}
        onClick={onClick}
      />
    );
  }
  function PrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          background: "#1976d2",
          borderColor: "#1976d2",
        }}
        onClick={onClick}
      />
    );
  }

  const settings = {
    slidesToShow: 6,
    slidesToScroll: 3,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div className="mx-20 mt-10">
      <h1 className="text-xl font-extrabold font-[var(--font-outfit-semibold)]">
        Popular Cruises
      </h1>

      <Slider {...settings} className="mt-8">
        {cruises?.map((cruise) => {
          return <CruiseCard key={cruise.id} cruise={cruise} />;
        })}
      </Slider>
    </div>
  );
}
