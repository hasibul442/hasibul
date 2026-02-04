"use client";
import {
  deleteDataFromDatabase,
  getListDataFromDatabase,
} from "@/Helper/DatabaseHelper";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { MdDelete, MdModeEdit } from "react-icons/md";

function Page() {
  const [projects, setProjects] = useState([]);

  const getProjects = async () => {
    const data = await getListDataFromDatabase("project");
    const sortedData = data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    setProjects(sortedData);
  };

  const deleteProject = async (id) => {
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
        deleteDataFromDatabase("project", id).then(() => {
          Swal.fire({
            title: "Deleted!",
            text: "Your project has been deleted.",
            icon: "success",
            showConfirmButton: false,
            timer: 1500
          }).then(() => {
            getProjects();
          });
        }).catch((error) => {
          console.error("Error deleting project:", error);
          Swal.fire({
            title: "Error!",
            text: "There was an error deleting the project.",
            icon: "error",
            showConfirmButton: false,
            timer: 1500
          });
        });
      }
    });
  };

  useEffect(() => {
    getProjects();
  }, []);

  return (
    <>
      <div className="row">
        <div className="col-12">
          <div className="card mb-4">
            <div className="card-header pb-0">
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <h6>Projects</h6>
                </div>
                <div>
                  <Link
                    className="btn btn-primary"
                    href="/admin/projects/create"
                  >
                    Add Project
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
                        Project Name
                      </th>
                      <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">
                        Technologies
                      </th>
                      <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                        Featured
                      </th>
                      <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                        Links
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
                    {projects.length > 0 ? (
                      projects.map((project, index) => (
                        <tr key={project.id}>
                          <td>
                            <p className="text-xs font-weight-bold mb-0 text-center">
                              {index + 1}
                            </p>
                          </td>
                          <td>
                            <div className="d-flex px-2 py-1">
                              {project.image && (
                                <div>
                                  <img
                                    src={project.image}
                                    className="avatar avatar-sm me-3"
                                    alt={project.title}
                                  />
                                </div>
                              )}
                              <div className="d-flex flex-column justify-content-center">
                                <h6 className="mb-0 text-sm">{project.title}</h6>
                                <p className="text-xs text-secondary mb-0">
                                  {project.description?.substring(0, 50)}...
                                </p>
                              </div>
                            </div>
                          </td>
                          <td>
                            <div className="d-flex flex-wrap gap-1">
                              {project.technologies?.slice(0, 3).map((tech, idx) => (
                                <span key={idx} className="badge badge-sm bg-gradient-info">
                                  {tech}
                                </span>
                              ))}
                              {project.technologies?.length > 3 && (
                                <span className="badge badge-sm bg-gradient-secondary">
                                  +{project.technologies.length - 3}
                                </span>
                              )}
                            </div>
                          </td>
                          <td className="align-middle text-center text-sm">
                            {project.featured ? (
                              <span className="badge badge-sm bg-gradient-success">
                                Yes
                              </span>
                            ) : (
                              <span className="badge badge-sm bg-gradient-secondary">
                                No
                              </span>
                            )}
                          </td>
                          <td className="align-middle text-center">
                            <div className="d-flex justify-content-center gap-2">
                              {project.liveUrl && (
                                <a
                                  href={project.liveUrl}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="badge badge-sm bg-gradient-primary"
                                >
                                  Live
                                </a>
                              )}
                              {project.githubUrl && (
                                <a
                                  href={project.githubUrl}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="badge badge-sm bg-gradient-dark"
                                >
                                  GitHub
                                </a>
                              )}
                            </div>
                          </td>
                          <td className="align-middle text-center">
                            <span className="text-secondary text-xs font-weight-bold">
                              {new Date(project.createdAt).toLocaleDateString()}
                            </span>
                          </td>
                          <td className="align-middle text-center">
                            <span className="text-secondary text-xs font-weight-bold">
                              {new Date(project.updatedAt).toLocaleDateString()}
                            </span>
                          </td>
                          <td className="align-middle">
                            <Link
                              className="btn btn-sm bg-gradient-info"
                              href={`/admin/projects/${project._id}`}
                            >
                              <MdModeEdit size={15} />
                            </Link>
                            <button
                              className="btn btn-sm bg-gradient-danger ms-2"
                              data-toggle="tooltip"
                              data-original-title="Delete"
                              onClick={() => deleteProject(project._id)}
                            >
                              <MdDelete size={15} />
                            </button>
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan="8" className="text-center py-4">
                          <p className="text-secondary mb-0">No data available</p>
                        </td>
                      </tr>
                    )}
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