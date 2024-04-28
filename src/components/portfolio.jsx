import React from "react";
import Section from "./common/section";
import { FaGithub, FaExternalLinkSquareAlt } from "react-icons/fa";
import p1 from "../assets/ngemil.png";
import p2 from "../assets/weather.png";
import p3 from "../assets/kopi.png";
import p4 from "../assets/delivery.png";
// import p5 from "../assets/p5.jpg";
// import p6 from "../assets/p6.jpg";

const portfolio = () => {
  const projects = [
    {
      id: 1,
      image: p1,
      title: "Kedai Payo Ngemil",
      github: "https://github.com/hnsfalah23/kedaipayongemil-landingpage",
      demo: "https://hnsfalah23.github.io/kedaipayongemil-landingpage/",
    },
    {
      id: 2,
      image: p2,
      title: "weather App",
      github: "https://github.com/hnsfalah23/weather-app",
      demo: "https://hnsfalah23.github.io/weather-app/",
    },
    {
      id: 3,
      image: p3,
      title: "Kedai Kopi Kencana",
      github: "https://github.com/hnsfalah23/kedai-kopi-kencana",
      demo: "https://hnsfalah23.github.io/kedai-kopi-kencana/",
    },
    {
      id: 4,
      image: p4,
      title: "Delivery Website",
      github: "https://github.com/hnsfalah23/delivery-website",
      demo: "https://hnsfalah23.github.io/delivery-website/",
    },
    // {
    //   id: 5,
    //   image: p5,
    //   title: "Website",
    //   github: "https:/github.com/",
    //   demo: "",
    // },
    // {
    //   id: 6,
    //   image: p6,
    //   title: "Website",
    //   github: "https:/github.com/",
    //   demo: "",
    // },
  ];

  return (
    <Section
      title="Portfolio 📅"
      subtitle="These all are the projects that I have worked on. Some of them I have worked before I gained some experience. So go gentle on them. "
    >
      <div className="grid gap-8 lg:gap-14 lg:grid-cols-2">
        {projects.map(({ id, image, title, github, demo }) => (
          <div
            key={id}
            className="max-w-lg flex shadow-lg shadow-gray-300 rounded-2xl overflow-hidden"
          >
            <img
              src={image}
              alt={title}
              className="w-2/3 duration-300 ease-in-out hover:scale-110"
            />
            <div className="w-1/3 flex flex-col items-center justify-evenly p-1">
              <h2>{title}</h2>
              <a
                className="text-lg md:text-xl lg:text-2xl cursor-pointer duration-150 hover:scale-110"
                href={github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub />
              </a>
              <a
                className="text-lg md:text-xl lg:text-2xl cursor-pointer duration-150 hover:scale-110"
                href={demo}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaExternalLinkSquareAlt />
              </a>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default portfolio;
