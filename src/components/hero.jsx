import React from "react";
import {
  FaInstagram,
  FaLinkedin,
  FaFacebook,
  FaArrowDown,
} from "react-icons/fa";
import avatar from "../assets/avatar.png";

const hero = () => {
  const SOCIAL = [
    {
      id: 1,
      link: "https://instagram.com/muhammadhnsflah",
      icon: <FaInstagram />,
    },
    {
      id: 2,
      link: "https://www.linkedin.com/in/hansflah23/",
      icon: <FaLinkedin />,
    },
    {
      id: 3,
      link: "https://www.facebook.com/profile.php?id=61554010847829&locale=id_ID",
      icon: <FaFacebook />,
    },
  ];

  window.addEventListener("scroll", function () {
    const downArrow = document.querySelector(".down-arrow");

    if (this.scrollY >= 90) downArrow.classList.add("hide-down-arrow");
    else downArrow.classList.remove("hide-down-arrow");
  });

  return (
    <section className="min-h-screen flex flex-col justify-start items-center p-5 text-center">
      <h2 className="text-5xl text-rose-600 uppercase font-bold animate-bounce">
        Muhammad Hans Falah
      </h2>
      <h3 className="py-3 text-2xl">Full Stack Developer</h3>
      <p className="max-w-xl font-light text-gray-500">
        Hello <span className="animate-pulse text-4xl">👋</span>, Welcome to my
        site. I am a freelance Full Stack Developer. I love to work on Web dev
      </p>

      {/* social icons */}
      <div className="flex justify-evenly py-8 lg:py-16 text-3xl w-full md:w-1/3">
        {SOCIAL.map(({ id, link, icon }) => (
          <a
            href={link}
            key={id}
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer duration-300 hover:text-rose-600"
          >
            {icon}
          </a>
        ))}
      </div>

      {/* avatar and resume */}
      <div>
        <img
          src={avatar}
          alt="avatar"
          className="w-60 h-60 md:w-72 object-cover object-top bg-gradient-to-b from-rose-600 rounded-xl pt-5 duration-300 ease-in-out hover:scale-110"
        />
        <a
          href="/cv-M.HansFalah.pdf"
          download={true}
          className="flex items-center justify-center mt-10 bg-gradient-to-r from-rose-600 to-teal-500 text-white py-2 rounded-lg hover:scale-105 duration-200"
        >
          Resume
        </a>
      </div>

      {/* arrow down animation */}
      <div className="mt-10 down-arrow">
        <FaArrowDown className="text-gray-400 text-2xl animate-bounce" />
      </div>
    </section>
  );
};

export default hero;
