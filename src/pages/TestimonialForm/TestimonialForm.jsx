import React, { useState } from "react";
import TopBar2 from "../NavBar/TopBar2";
import styles from "./testimonialForm.module.css";

function TestimonialForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    position: "",
    company: "",
    rating: 5,
    testimonial: "",
    image: null,
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [imagePreview, setImagePreview] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData((prev) => ({
        ...prev,
        image: file,
      }));
      // Create preview URL
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const submitData = {
        name: formData.name,
        email: formData.email,
        position: formData.position,
        company: formData.company,
        rating: formData.rating,
        testimonial: formData.testimonial,
      };

      // Convert image to base64 if exists
      if (formData.image) {
        const reader = new FileReader();
        const base64Promise = new Promise((resolve, reject) => {
          reader.onloadend = () => resolve(reader.result);
          reader.onerror = reject;
          reader.readAsDataURL(formData.image);
        });
        submitData.avatar = await base64Promise;
      }

      const response = await fetch(
        "https://adminhasibulhasan.vercel.app/api/v1/testimonial",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(submitData),
        }
      );

      if (response.ok) {
        setSubmitted(true);
        setFormData({
          name: "",
          email: "",
          position: "",
          company: "",
          rating: 5,
          testimonial: "",
          image: null,
        });
        setImagePreview(null);
      }
    } catch (error) {
      console.error("Error submitting testimonial:", error);
      alert("Failed to submit testimonial. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <TopBar2 />
      <div
        className="page-wrapper grid-background"
        style={{ minHeight: "100vh", paddingTop: "40px" }}
      >
        <div className="container mt-5 pt-5">
          <div className={`${styles.sectionTitle} text-center fade-in-up`}>
            <h2>Share Your Experience</h2>
            <p className={styles.subtitle}>
              Your feedback helps me grow and improve. Share your thoughts!
            </p>
          </div>

          {submitted && (
            <div className={`${styles.successMessage} fade-in-up`}>
              <i className="ri-check-circle-line"></i>
              <h3>Thank You!</h3>
              <p>Your testimonial has been submitted successfully.</p>
            </div>
          )}

          <div className={`${styles.formWrapper} fade-in-up`}>
            <form onSubmit={handleSubmit} className={styles.testimonialForm}>
              <div className="row">
                <div className="col-md-6">
                  <div className={styles.formGroup}>
                    <label htmlFor="name">
                      <i className="ri-user-line"></i> Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Enter your full name"
                      className={styles.formInput}
                    />
                  </div>
                </div>

                <div className="col-md-6">
                  <div className={styles.formGroup}>
                    <label htmlFor="email">
                      <i className="ri-mail-line"></i> Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your.email@example.com"
                      className={styles.formInput}
                    />
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-md-6">
                  <div className={styles.formGroup}>
                    <label htmlFor="position">
                      <i className="ri-briefcase-line"></i> Position *
                    </label>
                    <input
                      type="text"
                      id="position"
                      name="position"
                      value={formData.position}
                      onChange={handleChange}
                      required
                      placeholder="e.g., Software Engineer"
                      className={styles.formInput}
                    />
                  </div>
                </div>

                <div className="col-md-6">
                  <div className={styles.formGroup}>
                    <label htmlFor="company">
                      <i className="ri-building-line"></i> Company/Organization
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Your company name"
                      className={styles.formInput}
                    />
                  </div>
                </div>
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="rating">
                  <i className="ri-star-line"></i> Rating *
                </label>
                <div className={styles.ratingWrapper}>
                  {[1, 2, 3, 4, 5].map((star) => (
                    <i
                      key={star}
                      className={`ri-star-${formData.rating >= star ? "fill" : "line"} ${styles.starIcon}`}
                      onClick={() =>
                        setFormData((prev) => ({ ...prev, rating: star }))
                      }
                    ></i>
                  ))}
                  <span className={styles.ratingText}>
                    ({formData.rating} / 5)
                  </span>
                </div>
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="testimonial">
                  <i className="ri-message-3-line"></i> Your Opinion about me and My Work *
                </label>
                <textarea
                  id="testimonial"
                  name="testimonial"
                  value={formData.testimonial}
                  onChange={handleChange}
                  required
                  rows="6"
                  placeholder="Share your experience, feedback, or review..."
                  className={styles.formTextarea}
                ></textarea>
                <div className={styles.charCount}>
                  {formData.testimonial.length} / 500 characters
                </div>
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="image">
                  <i className="ri-image-line"></i> Your Photo (Optional)
                </label>
                <input
                  type="file"
                  id="image"
                  name="image"
                  accept="image/*"
                  onChange={handleFileChange}
                  className={styles.formInput}
                />
                {imagePreview && (
                  <div className={styles.imagePreview}>
                    <img src={imagePreview} alt="Preview" />
                    <button
                      type="button"
                      className={styles.removeBtn}
                      onClick={() => {
                        setFormData((prev) => ({ ...prev, image: null }));
                        setImagePreview(null);
                      }}
                    >
                      <i className="ri-close-line"></i>
                    </button>
                  </div>
                )}
              </div>

              <button
                type="submit"
                className={styles.submitBtn}
                disabled={loading}
              >
                {loading ? (
                  <>
                    <i className="ri-loader-4-line ri-spin"></i> Submitting...
                  </>
                ) : (
                  <>
                    <i className="ri-send-plane-line"></i> Submit Testimonial
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default TestimonialForm;