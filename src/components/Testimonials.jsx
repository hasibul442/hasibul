import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectCards } from "swiper/modules";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/pagination";
import styles from "./testimonials.module.css";

function Testimonials() {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);

  const fatchTestimonials = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        "https://adminhasibulhasan.vercel.app/api/v1/testimonial"
      );
      const data = await response.json();
      setTestimonials(data?.data);
    } catch (error) {
      console.error("Error fetching testimonials:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fatchTestimonials();
  }, []);

  if (loading) {
    return (
      <div className={styles.testimonialsWrapper}>
        <div className={styles.swiperContainer} style={{ margin: '0 auto', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <SkeletonTheme baseColor="#ffffff1a" highlightColor="#ffffff33">
            <div className={styles.testimonialCard}>
              <div className={styles.decorativeCircleTop}></div>
              <div className={styles.decorativeCircleBottom}></div>

              <div className={styles.profileSection}>
                <div className="row justify-content-center">
                  <div className="col-sm-4 d-flex justify-content-center">
                    <Skeleton circle width={100} height={100} />
                  </div>
                  <div className="col-sm-8">
                    <Skeleton width="70%" height={22} style={{ marginBottom: '8px' }} />
                    <Skeleton width="90%" height={14} style={{ marginBottom: '5px' }} />
                    <Skeleton width="80%" height={14} style={{ marginBottom: '10px' }} />
                    <Skeleton width={120} height={18} />
                  </div>
                </div>
              </div>

              <div className={styles.testimonialTextWrapper}>
                <Skeleton count={4} height={12} style={{ marginBottom: '8px' }} />
              </div>

              <div className={styles.verificationBadge}>
                <Skeleton circle width={40} height={40} />
              </div>
            </div>
          </SkeletonTheme>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.testimonialsWrapper}>
      <Swiper
        effect={"cards"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        modules={[Autoplay, Pagination, EffectCards]}
        className={styles.swiperContainer}
      >
        {testimonials.map((item) => (
          <SwiperSlide key={item._id} className={styles.testimonialCard}>
            {/* Decorative Elements */}
            <div className={styles.decorativeCircleTop}></div>
            <div className={styles.decorativeCircleBottom}></div>

            {/* Profile Section */}
            <div className={styles.profileSection}>
              <div className="row">
                <div className="col-sm-4">
                  <div className={styles.profileImageWrapper}>
                    <img
                      src={item.avatar}
                      alt={item.name}
                      className={styles.profileImage}
                    />
                  </div>
                </div>
                <div className="col-sm-8">
                  <h3 className={styles.profileName}>{item.name}</h3>
                  <p className={styles.profilePosition}>{item.position}</p>
                  {/* {item.company && ( */}
                    <p className={`${styles.profileCompany} p-0 m-0`}>
                      {item?.company}
                    </p>
                  {/* )} */}

                  {/* Star Rating */}
                  <div className>
                    {[...Array(item.rating)].map((_, index) => (
                      <i
                        key={index}
                        className={`ri-star-fill ${styles.starIcon}`}
                      ></i>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonial Text */}
            <div className={styles.testimonialTextWrapper}>
              <p className={styles.testimonialText}>{item.testimonial}</p>
            </div>

            {/* Verification Badge */}
            <div className={styles.verificationBadge}>
              <i
                className={`ri-verified-badge-fill ${styles.verificationIcon}`}
              ></i>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Testimonials;
