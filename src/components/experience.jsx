import React from "react";
import Section from "./common/section";
import Html from "../assets/html.png";
import Css from "../assets/css.png";
import Javascript from "../assets/javascript.png";
import ReacT from "../assets/react.png";
import Tailwind from "../assets/tailwind.png";
import Nextjs from "../assets/nextjs.png";
import Mysql from "../assets/mysql.png";
import Github from "../assets/github.png";
import Php from "../assets/php.png";
import Laravel from "../assets/laravel.png";

const experience = () => {
  const tech = [
    {
      id: 1,
      image: Html,
      title: "HTML",
    },
    {
      id: 2,
      image: Css,
      title: "CSS",
    },
    {
      id: 3,
      image: Javascript,
      title: "JavaScript",
    },
    {
      id: 4,
      image: ReacT,
      title: "React",
    },
    {
      id: 5,
      image: Tailwind,
      title: "Tailwind",
    },
    {
      id: 6,
      image: Nextjs,
      title: "Next JS",
    },
    {
      id: 7,
      image: Mysql,
      title: "MySql",
    },
    {
      id: 8,
      image: Github,
      title: "Github",
    },
    {
      id: 9,
      image: Php,
      title: "php",
    },
    {
      id: 10,
      image: Laravel,
      title: "laravel",
    },
  ];

  return (
    <Section
      title="Experience ⌨"
      subtitle="These are the technologies I've worked with. "
    >
      <div className="grid gap-10 lg:grid-cols-2">
        {tech.map(({ id, image, title }) => (
          <div
            key={id}
            className="flex flex-col items-center justify-center p-5 shadow-lg dark:shadow-gray-100 rounded-xl duration-300 ease-in-out hover:scale-110"
          >
            <img
              src={image}
              alt={title}
              className="w-24 h-24 md:w-18 md:h-18 object-contain"
            />
            <h3 className="mt-5 text-base">{title}</h3>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default experience;
