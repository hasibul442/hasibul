"use client";
import { getListDataFromDatabase } from '@/Helper/DatabaseHelper';
import Link from 'next/link';
import React, { use, useEffect, useState } from 'react'
import { MdDelete, MdModeEdit } from 'react-icons/md';

function Page() {
  const [testimonials, setTestimonials] = useState([]);

  const getTestimonials = async () => {
    // Fetch testimonials from the database
    const data = await getListDataFromDatabase("testimonials");
    setTestimonials(data);
  };

  useEffect(() => {
    getTestimonials();
  } , []);
  return (
    <>
      <div className="row">
        <div className="col-12">
          <div className="card mb-4">
            <div className="card-header pb-0">
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <h6>Testimonials</h6>
                </div>
                <div>
                  <Link
                    className="btn btn-primary"
                    href="/admin/testimonials/create"
                  >
                    Add Testimonial
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
                        Image
                      </th>
                      <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">
                        Name
                      </th>
                      <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                        Company and Position
                      </th>
                      <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                        Description
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
                    {testimonials.length > 0 ? (
                      testimonials.map((experience, index) => (
                        <tr key={experience.id}>
                          <td>
                            <p className="text-xs font-weight-bold mb-0 text-center">
                              {index + 1}
                            </p>
                          </td>
                          <td>
                            <img src={experience.image} alt={experience.name} className="avatar avatar-sm rounded-circle" />
                          </td>
                          <td>
                            <p className="text-xs font-weight-bold mb-0">
                              {experience.name}
                            </p>
                          </td>
                          <td className="align-middle text-center">
                            <p className="text-xs font-weight-bold mb-0">
                              {experience.company} - {experience.position}
                            </p>
                          </td>
                          <td className="align-middle text-center">
                            <p className="text-xs text-secondary mb-0">
                              {experience.description}
                            </p>
                          </td>
                          <td className="align-middle text-center">
                            <span className={`badge badge-sm bg-gradient-${experience.status === 'active' ? 'success' : 'danger'}`}>
                              {experience.status}
                            </span>
                          </td>
                          <td className="align-middle text-center">
                            <span className="text-secondary text-xs font-weight-bold">
                              {experience.addedAt}
                            </span>
                          </td>
                          <td className="align-middle text-center">
                            <span className="text-secondary text-xs font-weight-bold">
                              {experience.updatedAt}
                            </span>
                          </td>
                          <td className="align-middle">
                            <Link
                              className="btn btn-sm bg-gradient-info"
                              href={`/admin/experiences/${experience.id}`}
                            >
                              <MdModeEdit size={15} />
                            </Link>
                            <button
                              className="btn btn-sm bg-gradient-danger ms-2"
                              data-toggle="tooltip"
                              data-original-title="Delete"
                              // onClick={() => deleteExperience(experience.id)}
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
  )
}

export default Page