import React from "react";
import { BiLogoSpringBoot } from "react-icons/bi";
import { DiJqueryLogo } from "react-icons/di";
import {
  FaBootstrap,
  FaCss3Alt,
  FaDatabase,
  FaGit,
  FaHtml5,
  FaJava,
  FaLaravel,
  FaPhp,
  FaPython,
  FaReact,
} from "react-icons/fa";
import { SiFirebase, SiMysql, SiNextdotjs, SiMongodb } from "react-icons/si";
import { TbApi, TbBrandJavascript } from "react-icons/tb";

import style from './component.module.css'

function Skill() {
  // Organize skills into 4 orbital rings
  const orbit1 = [
    {
      id: 1,
      title: "HTML",
      value: 90,
      icon: <FaHtml5 size={40} color="#E34C26" />,
    },
    {
      id: 2,
      title: "CSS",
      value: 90,
      icon: <FaCss3Alt size={40} color="#2965F1" />,
    },
    {
      id: 4,
      title: "JavaScript",
      value: 80,
      icon: <TbBrandJavascript size={40} color="#F0DB4F" />,
    },
    {
      id: 3,
      title: "Bootstrap",
      value: 90,
      icon: <FaBootstrap size={40} color="#FF0000" />,
    },
    {
      id: 5,
      title: "Jquery",
      value: 70,
      icon: <DiJqueryLogo size={40} color="#FF0000" />,
    },
  ];

  const orbit2 = [
    {
      id: 6,
      title: "React",
      value: 70,
      icon: <FaReact size={40} color="#61DBFB" />,
    },
    {
      id: 21,
      title: "Next JS",
      value: 70,
      icon: <SiNextdotjs size={40} color="#45CE05" />,
    },
    {
      id: 7,
      title: "React Native",
      value: 60,
      icon: <FaReact size={40} color="#61DBFB" />,
    },
    {
      id: 10,
      title: "PHP",
      value: 80,
      icon: <FaPhp size={40} color="#777BB4" />,
    },
    {
      id: 11,
      title: "Laravel",
      value: 70,
      icon: <FaLaravel size={40} color="#F05340" />,
    },
  ];

  const orbit3 = [
    {
      id: 8,
      title: "Java",
      value: 70,
      icon: <FaJava size={40} color="#F80000" />,
    },
    {
      id: 9,
      title: "Spring Boot",
      value: 60,
      icon: <BiLogoSpringBoot size={40} color="#6DB33F" />,
    },
    {
      id: 12,
      title: "MySQL",
      value: 80,
      icon: <SiMysql size={40} color="#00758F" />,
    },
    {
      id: 13,
      title: "Firebase",
      value: 70,
      icon: <SiFirebase size={40} color="#FFCA28" />,
    },
    {
      id: 20,
      title: "MongoDB",
      value: 85,
      icon: <SiMongodb size={40} color="#28A745" />,
    },
  ];

  const orbit4 = [
    {
      id: 17,
      title: "Python",
      value: 70,
      icon: <FaPython size={40} color="#FFD43B" />,
    },
    {
      id: 14,
      title: "Database",
      value: 80,
      icon: <FaDatabase size={40} color="#0078D4" />,
    },
    {
      id: 15,
      title: "API",
      value: 80,
      icon: <TbApi size={40} color="#28A745" />,
    },
    {
      id: 16,
      title: "Git",
      value: 80,
      icon: <FaGit size={40} color="#F05032" />,
    },
  ];

  const renderOrbitSkills = (skills, orbitClass) => {
    const angleStep = 360 / skills.length;
    return skills.map((skill, index) => {
      const angle = index * angleStep;
      return (
        <div
          key={skill.id}
          className={`${style.orbit_item} ${style[orbitClass]}`}
          style={{
            transform: `rotate(${angle}deg) translateX(var(--orbit-radius)) rotate(-${angle}deg)`
          }}
        >
          <div className={style.skill_planet}>
            {skill.icon}
            {/* <span className={style.skill_name}>{skill.title}</span> */}
          </div>
        </div>
      );
    });
  };
  return (
    <div className={style.solar_system_container}>
      <div className={style.solar_system}>
        {/* Central Sun */}
        <div className={style.sun}>
          <div className={style.sun_core}>
            <span className={style.sun_text}>Skills</span>
          </div>
        </div>

        {/* Orbit 1 */}
        <div className={`${style.orbit} ${style.orbit_1}`}>
          <div className={style.orbit_ring}></div>
          {renderOrbitSkills(orbit1, 'orbit1')}
        </div>

        {/* Orbit 2 */}
        <div className={`${style.orbit} ${style.orbit_2}`}>
          <div className={style.orbit_ring}></div>
          {renderOrbitSkills(orbit2, 'orbit2')}
        </div>

        {/* Orbit 3 */}
        <div className={`${style.orbit} ${style.orbit_3}`}>
          <div className={style.orbit_ring}></div>
          {renderOrbitSkills(orbit3, 'orbit3')}
        </div>

        {/* Orbit 4 */}
        <div className={`${style.orbit} ${style.orbit_4}`}>
          <div className={style.orbit_ring}></div>
          {renderOrbitSkills(orbit4, 'orbit4')}
        </div>
      </div>
    </div>
  );
}

export default Skill;
