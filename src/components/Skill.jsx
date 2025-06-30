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

import style from './component.module.css'

function Skill() {
  const data = [
    {
      id: 1,
      title: "HTML",
      value: 90,
      icon: <FaHtml5 size={40} color="#e34c26"/>,
    },
    {
      id: 2,
      title: "CSS",
      value: 90,
      icon: <FaCss3Alt size={40} color="#2965f1"/>,
    },
    {
      id: 3,
      title: "Bootstrap",
      value: 90,
      icon: <FaBootstrap size={40} color="#ff0000"/>,
    },
    {
      id: 4,
      title: "JavaScript",
      value: 80,
      icon: <TbBrandJavascript size={40} color="#f0db4f"/>,
    },
    {
      id: 5,
      title: "Jquery",
      value: 70,
      icon: <DiJqueryLogo size={40} color="#FF0000"/>,
    },
    {
      id: 6,
      title: "React",
      value: 70,
      icon: <FaReact size={40} color="#61DBFB"/>,
    },
    {
      id: 21,
      title: "Next JS",
      value: 70,
      icon: <SiNextdotjs size={40} color="#45CE05"/>,
    },
    {
      id: 7,
      title: "React Native",
      value: 60,
      icon: <FaReact size={40} color="#61DBFB"/>,
    },
    {
      id: 8,
      title: "Java",
      value: 70,
      icon: <FaJava size={40} color="#F80000"/>,
    },
    {
      id: 9,
      title: "Spring Boot",
      value: 60,
      icon: <BiLogoSpringBoot size={40} color="#6DB33F"/>,
    },
    {
      id: 10,
      title: "PHP",
      value: 80,
      icon: <FaPhp size={40} color="#777BB4"/>,
    },
    {
      id: 11,
      title: "Laravel",
      value: 70,
      icon: <FaLaravel size={40} color="#F05340"/>,
    },
    {
      id: 12,
      title: "MySQL",
      value: 80,
      icon: <SiMysql size={40} color="#00758F"/>,
    },
    {
      id: 13,
      title: "Firebase",
      value: 70,
      icon: <SiFirebase size={40} color="#FFCA28"/>,
    },
    {
      id: 14,
      title: "Relational Database",
      value: 80,
      icon: <FaDatabase size={40} color="#0078D4"/>,
    },
    {
      id: 15,
      title: "API",
      value: 80,
      icon: <TbApi size={40} color="#28A745"/>,
    },
    {
      id: 16,
      title: "Git",
      value: 80,
      icon: <FaGit size={40} color="#F05032"/>,
    },
    {
      id: 17,
      title: "Python",
      value: 70,
      icon: <FaPython size={40} color="#FFD43B"/>,
    },
    {
      id: 19,
      title: "Adobe XD",
      value: 85,
      icon: <SiAdobexd size={40} color="#FF26BE"/>,
    },
    {
      id: 20,
      title: "Figma",
      value: 85,
      icon: <FaFigma size={40} color="#9747FF"/>,
    },
  ];
  return (
    <>
      {/* <div className={style.card_wrap}>
        <div className={`${style.card_header} ${style.one}`}>
          <i className="fas fa-code"></i>
        </div>
        <div className={style.card_content}>
          <h1 className={style.card_title}>Title</h1>
          <p className={style.card_text}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <button className={`${style.card_btn} ${style.one}`}>code</button>
        </div>
      </div> */}
      <div className="container">
        <div className="row">
          {data.map((item) => (
            <div className="col-lg-1 mb-4 text-center" key={item.id}>
              <div className={`${style.icon_box} ${style[item.title.toLowerCase()]}`}>
                {item.icon}
                <h6>{item.title}</h6>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Skill;
