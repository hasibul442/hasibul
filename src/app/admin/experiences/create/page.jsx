"use client";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import Swal from "sweetalert2";

function Page() {
  const [company, setCompany] = useState("");
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [current, setCurrent] = useState(false);
  const [description, setDescription] = useState("");
  const [technologies, setTechnologies] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("/api/v1/experience", {
        company,
        title,
        location,
        startDate: new Date(startDate).toISOString(),
        endDate: endDate ? new Date(endDate).toISOString() : null,
        current,
        description,
        technologies: technologies.split(",").map(t => t.trim()),
      });

      if (response.data.success) {
        await Swal.fire({
          title: "Success!",
          text: "Experience created successfully.",
          icon: "success",
          showConfirmButton: false,
          timer: 1500
        });
        router.push("/admin/experiences");
      }
    } catch (error) {
      console.error("Error creating experience:", error);
      await Swal.fire({
        title: "Error!",
        text: error.response?.data?.error || "Failed to create experience",
        icon: "error"
      });
    }
  };

  return (
    <>
      <div className="row">
        <div className="col-12">
          <div className="card mb-4">
            <div className="card-header text-center pt-4">
              <h5>Create Experience</h5>
            </div>
            <div className="card-body px-5">
              <div className="row">
                <div className="col-md-6">
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Company Name"
                      aria-label="Company Name"
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                    />
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Title/Position"
                      aria-label="Title"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                    />
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Location"
                      aria-label="Location"
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                    />
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="mb-3">
                    <input
                      type="date"
                      className="form-control"
                      placeholder="Start Date"
                      aria-label="Start Date"
                      value={startDate}
                      onChange={(e) => setStartDate(e.target.value)}
                    />
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="mb-3">
                    <input
                      type="date"
                      className="form-control"
                      placeholder="End Date"
                      aria-label="End Date"
                      value={endDate}
                      onChange={(e) => setEndDate(e.target.value)}
                      disabled={current}
                    />
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="mb-3 form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="currentCheck"
                      checked={current}
                      onChange={(e) => setCurrent(e.target.checked)}
                    />
                    <label className="form-check-label" htmlFor="currentCheck">
                      Currently working here
                    </label>
                  </div>
                </div>

                <div className="col-md-12">
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Technologies (comma separated)"
                      aria-label="Technologies"
                      value={technologies}
                      onChange={(e) => setTechnologies(e.target.value)}
                    />
                  </div>
                </div>

                <div className="col-md-12">
                  <div className="mb-3">
                    <textarea
                      className="form-control"
                      placeholder="Description"
                      aria-label="Description"
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                    />
                  </div>
                </div>
              </div>

              <div className="text-center">
                <Link
                  className="btn btn-secondary me-2"
                  href="/admin/experiences"
                >
                  Back
                </Link>
                <button className="btn btn-primary me-2" onClick={handleSubmit}>
                  Create Experience
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Page;
