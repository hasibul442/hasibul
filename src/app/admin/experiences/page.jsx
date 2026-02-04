"use client";
import {
  deleteDataFromDatabase,
  getListDataFromDatabase,
} from "@/Helper/DatabaseHelper";
import { calculateDateDifference } from "@/Helper/Helper";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { MdDelete, MdModeEdit } from "react-icons/md";

function Page() {
  const [experiences, setExperiences] = useState([]);

  const getExperiences = async () => {
    const data = await getListDataFromDatabase("experience");
    const sortedData = data.sort((a, b) => new Date(b.start_date) - new Date(a.start_date));
    setExperiences(sortedData);
  };

  const deleteExperience = async (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteDataFromDatabase("experiences", id).then(() => {
          Swal.fire({
            title: "Deleted!",
            text: "Your experience has been deleted.",
            icon: "success",
            showConfirmButton: false,
            timer: 1500
          }).then(() => {
            getExperiences();
          });
        }).catch((error) => {
          console.error("Error deleting experience:", error);
          Swal.fire({
            title: "Error!",
            text: "There was an error deleting the experience.",
            icon: "error",
            showConfirmButton: false,
            timer: 1500
          });
        });
      }
    });
  };

  useEffect(() => {
    getExperiences();
  }, []);

  return (
    <>
      <div className="row">
        <div className="col-12">
          <div className="card mb-4">
            <div className="card-header pb-0">
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <h6>Experiences</h6>
                </div>
                <div>
                  <Link
                    className="btn btn-primary"
                    href="/admin/experiences/create"
                  >
                    Add Experience
                  </Link>
                </div>
              </div>
            </div>
            <div className="card-body px-3 pt-0 pb-2">
              <div className="row">
                {experiences.length > 0 ? (
                  experiences.map((experience, index) => (
                    <div key={experience._id} className="col-md-6 col-lg-4 mb-4">
                      <div className="card h-100">
                        <div className="card-body">
                          <div className="d-flex justify-content-between align-items-start mb-3">
                            <span className="badge badge-sm bg-gradient-dark">
                              #{index + 1}
                            </span>
                            {experience.status === 1 ? (
                              <span className="badge badge-sm bg-gradient-success">
                                Active
                              </span>
                            ) : (
                              <span className="badge badge-sm bg-gradient-danger">
                                Inactive
                              </span>
                            )}
                          </div>

                          <h6 className="mb-2 text-sm font-weight-bold">
                            {experience.company}
                          </h6>
                          <p className="text-xs text-secondary mb-3">
                            {experience.title}
                          </p>

                          <div className="mb-2">
                            <p className="text-xs text-secondary mb-1">
                              <strong>Period:</strong>
                            </p>
                            <p className="text-xs mb-0">
                              {new Date(experience.startDate).toLocaleDateString()} - {experience.endDate ? new Date(experience.endDate).toLocaleDateString() : "Present"}
                            </p>
                          </div>

                          <div className="mb-2">
                            <p className="text-xs text-secondary mb-1">
                              <strong>Duration:</strong>
                            </p>
                            <p className="text-xs mb-0">
                              {calculateDateDifference(
                                experience?.start_date,
                                experience?.end_date || new Date().toISOString()
                              )}
                            </p>
                          </div>

                          <div className="mb-3">
                            <p className="text-xs text-secondary mb-1">
                              <strong>Created:</strong> {new Date(experience.createdAt).toLocaleDateString()}
                            </p>
                            <p className="text-xs text-secondary mb-0">
                              <strong>Updated:</strong> {new Date(experience.updatedAt).toLocaleDateString()}
                            </p>
                          </div>

                          <div className="d-flex gap-2 mt-3">
                            <Link
                              className="btn btn-sm bg-gradient-primary flex-fill"
                              href={`/admin/experiences/${experience.id}`}
                            >
                              Details
                            </Link>
                            <Link
                              className="btn btn-sm bg-gradient-info"
                              href={`/admin/experiences/${experience.id}`}
                            >
                              <MdModeEdit size={15} />
                            </Link>
                            <button
                              className="btn btn-sm bg-gradient-danger"
                              onClick={() => deleteExperience(experience.id)}
                            >
                              <MdDelete size={15} />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="col-12 text-center py-5">
                    <p className="text-secondary mb-0">No data available</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Page;
