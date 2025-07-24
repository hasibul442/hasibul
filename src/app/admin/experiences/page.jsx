"use client";
import {
  deleteDataFromDatabase,
  getListDataFromDatabase,
} from "@/Helper/DatabaseHelper";
import { calculateDateDifference } from "@/Helper/Helper";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";

function Page() {
  const [experiences, setExperiences] = useState([]);

  const getExperiences = async () => {
    const data = await getListDataFromDatabase("experiences");
    // Sort by start_date in descending order (newest first)
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
          }).then(() => {
            getExperiences();
          });
        }).catch((error) => {
          console.error("Error deleting experience:", error);
          Swal.fire({
            title: "Error!",
            text: "There was an error deleting the experience.",
            icon: "error",
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
            <div className="card-body px-0 pt-0 pb-2">
              <div className="table-responsive p-0">
                <table className="table align-items-center mb-0">
                  <thead>
                    <tr>
                      <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                        #
                      </th>
                      <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">
                        Organization Name and Position
                      </th>
                      <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                        Time Period
                      </th>
                      <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                        Total Duration
                      </th>
                      <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                        Status
                      </th>
                      <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                        Add Time
                      </th>
                      <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                        Update Time
                      </th>
                      <th className="text-secondary opacity-7"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {experiences.map((experience, index) => (
                      <tr key={experience.id}>
                        <td>
                          <p className="text-xs font-weight-bold mb-0">
                            {index + 1}
                          </p>
                        </td>
                        <td>
                          <p className="text-xs font-weight-bold mb-0">
                            {experience.org_name}
                          </p>
                          <p className="text-xs text-secondary mb-0">
                            {experience.position}
                          </p>
                        </td>
                        <td className="align-middle text-center">
                          <span className="text-secondary text-xs font-weight-bold">
                            {new Date(
                              experience.start_date
                            ).toLocaleDateString()}{" "}
                            -{" "}
                            {experience.end_date
                              ? new Date(experience.end_date).toLocaleDateString()
                              : "Present"
                            }
                          </span>
                        </td>
                        <td className="align-middle text-center">
                          <span className="text-secondary text-xs font-weight-bold">
                            {calculateDateDifference(
                              experience?.start_date,
                              experience?.end_date || new Date().toISOString()
                            )}
                          </span>
                        </td>
                        <td className="align-middle text-center text-sm">
                          {experience.status === 1 ? (
                            <span className="badge badge-sm bg-gradient-success">
                              Active
                            </span>
                          ) : (
                            <span className="badge badge-sm bg-gradient-danger">
                              Inactive
                            </span>
                          )}
                        </td>
                        <td className="align-middle text-center">
                          <span className="text-secondary text-xs font-weight-bold">
                            {new Date(
                              experience.createdAt
                            ).toLocaleDateString()}
                          </span>
                        </td>
                        <td className="align-middle text-center">
                          <span className="text-secondary text-xs font-weight-bold">
                            {new Date(
                              experience.updatedAt
                            ).toLocaleDateString()}
                          </span>
                        </td>
                        <td className="align-middle">
                          <button
                            className="btn btn-xs text-secondary font-weight-bold text-xs"
                            data-toggle="tooltip"
                            data-original-title="Edit user"
                          >
                            Edit
                          </button>
                          <button
                            className="btn btn-xs text-secondary font-weight-bold text-xs"
                            data-toggle="tooltip"
                            data-original-title="Delete"
                            onClick={() => deleteExperience(experience.id)}
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Page;
