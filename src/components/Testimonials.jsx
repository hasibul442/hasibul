import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

function Testimonials() {
  const data = [
    {
      id: 1,
      name: "Zawadul Kawum",
      position: "Head of Development",
      company: "Nexdecade Technology Pvt. Ltd.",
      image: "assets/img/testimonials/testimonials-1.jpg",
      testimonial:
        "I highly recommend Hasibul as an exceptional project member. His programming and engineering skills are outstanding, and his dedication to every task is commendable. Hasibul consistently delivers high-quality work, showing great problem-solving abilities and an eagerness to learn and improve. His positive attitude and collaborative nature make him a valuable asset to any team. I have full confidence in his ability to excel in any project and believe he will continue to achieve great success in his career. Keep up the fantastic work, Hasibul!",
    },
    {
      id: 2,
      name: "Pranto Kumar",
      position: "Full Stack Software Developer",
      company: "",
      image: "assets/img/testimonials/testimonials-2.jpg",
      testimonial:
        "I highly recommend Mohammad Hasibul Hasan. Their exceptional skills, dedication, and positive attitude make them an invaluable asset. They consistently deliver outstanding results, demonstrate strong teamwork, and excel in challenging environments. Mohammad Hasibul Hasan is a top-tier professional who will undoubtedly contribute significantly to any team or project.",
    },
    {
      id: 3,
      name: "Sarthok Biswas",
      position: "Data Analyst",
      company: "CV - Christian Vision",
      image: "assets/img/testimonials/sarthok.jpeg",
      testimonial:
        "I had the pleasure of studying alongside Mohammad Hasibul Hasan at university and later collaborating with him as a freelance co-worker. As a developer, Hasibul consistently impressed me with his technical expertise, problem-solving skills, and dedication to delivering high-quality work. His ability to tackle complex projects with creativity and precision makes him an outstanding professional in the field. I highly recommend Hasibul for any development role.",
    },
    {
      id: 4,
      name: "Nahid Eraz",
      position: "UI/UX Designer | Front-end Web Developer",
      company: "",
      image: "assets/img/testimonials/eraz.jpeg",
      testimonial:
        "I am pleased to recommend Mohammad Hasibul Hasan, who I had the privilege of studying with. During our time as classmates, Hasibul consistently demonstrated outstanding skills in programming, always solving complex problems with ease. His remarkable ability to quickly grasp and apply concepts allowed him to excel in both coursework and collaborative projects. Now as a Team Lead at Adventure Dhaka Limited, Hasibul has clearly taken his talents to the next level. His leadership skills, combined with his deep technical expertise, make him an invaluable asset to any team. I am confident that Hasibul’s dedication and innovative mindset will continue to drive success in all his endeavors.",
    },
  ];
  return (
    <>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
      >
        {data.map((item) => (
          <SwiperSlide>
            <div className="testimonial-item" key={item.id}>
              <p>
                <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                {item?.testimonial}
                <i className="bx bxs-quote-alt-right quote-icon-right"></i>
              </p>
              <img
                src={item?.image}
                className="testimonial-img"
                alt=""
              />
              <h3>
                {item?.name}
              </h3>
              <h4>
                {item?.position} <br />
                {item?.company || ""}
              </h4>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

export default Testimonials;
