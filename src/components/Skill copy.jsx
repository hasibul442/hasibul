import React from "react";
import { BiLogoSpringBoot } from "react-icons/bi";
import { DiJqueryLogo } from "react-icons/di";
import {
  FaBirthdayCake,
  FaBootstrap,
  FaCss3Alt,
  FaDatabase,
  FaEnvelope,
  FaFigma,
  FaGit,
  FaHtml5,
  FaJava,
  FaLaravel,
  FaPhoneSquare,
  FaPhp,
  FaPython,
  FaReact,
  FaWhatsapp,
} from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { SiAdobexd, SiFirebase, SiMysql, SiNextdotjs } from "react-icons/si";
import { TbApi, TbBrandJavascript } from "react-icons/tb";

function Skill() {
  const data = [
    {
      id: 1,
      title: "HTML",
      value: 90,
      icon: <FaHtml5 size={30} />,
    },
    {
      id: 2,
      title: "CSS",
      value: 90,
      icon: <FaCss3Alt size={30} />,
    },
    {
      id: 3,
      title: "Bootstrap",
      value: 90,
      icon: <FaBootstrap size={30} />,
    },
    {
      id: 4,
      title: "JavaScript",
      value: 80,
      icon: <TbBrandJavascript size={30} />,
    },
    {
      id: 5,
      title: "Jquery",
      value: 70,
      icon: <DiJqueryLogo size={30} />,
    },
    {
      id: 6,
      title: "React",
      value: 70,
      icon: <FaReact size={30} />,
    },
    {
      id: 21,
      title: "Next JS",
      value: 70,
      icon: <SiNextdotjs size={30} />,
    },
    {
      id: 7,
      title: "React Native",
      value: 60,
      icon: <FaReact size={30} />,
    },
    {
      id: 8,
      title: "Java",
      value: 70,
      icon: <FaJava size={30} />,
    },
    {
      id: 9,
      title: "Spring Boot",
      value: 60,
      icon: <BiLogoSpringBoot size={30} />,
    },
    {
      id: 10,
      title: "PHP",
      value: 80,
      icon: <FaPhp size={30} />,
    },
    {
      id: 11,
      title: "Laravel",
      value: 70,
      icon: <FaLaravel size={30} />,
    },
    {
      id: 12,
      title: "MySQL",
      value: 80,
      icon: <SiMysql size={30} />,
    },
    {
      id: 13,
      title: "Firebase",
      value: 70,
      icon: <SiFirebase size={30} />,
    },
    {
      id: 14,
      title: "Relational Database",
      value: 80,
      icon: <FaDatabase size={30} />,
    },
    {
      id: 15,
      title: "API",
      value: 80,
      icon: <TbApi size={30} />,
    },
    {
      id: 16,
      title: "Git",
      value: 80,
      icon: <FaGit size={30} />,
    },
    {
      id: 17,
      title: "Python",
      value: 70,
      icon: <FaPython size={30} />,
    },
    {
      id: 18,
      title: "AJAX",
      value: 70,
      icon: null,
    },
    {
      id: 19,
      title: "Adobe XD",
      value: 85,
      icon: <SiAdobexd size={30} />,
    },
    {
      id: 20,
      title: "Figma",
      value: 85,
      icon: <FaFigma size={30} />,
    },
  ];
  return (
    <>
      <div className="row skills-content">
        {data.map((item) => (
          <div className="col-lg-4">
            <div className="progress">
              <span className="skill">
                {item.icon} {item.title} <i className="val">{item.value}%</i>
              </span>
              <div
                className="progress-bar-wrap"
                role="progressbar"
                aria-label="Html progress bar"
                aria-valuenow="100"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                <div
                  className="progress-bar"
                  style={{ width: `${item.value}%` }}
                ></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Skill;
