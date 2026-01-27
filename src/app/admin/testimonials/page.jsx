"use client";
import { deleteDataFromDatabase, getListDataFromDatabase } from '@/Helper/DatabaseHelper';
import Link from 'next/link';
import React, { use, useEffect, useState } from 'react'
import { MdDelete, MdModeEdit, MdVisibility, MdClose } from 'react-icons/md';

function Page() {
  const [testimonials, setTestimonials] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedTestimonial, setSelectedTestimonial] = useState(null);

  const getTestimonials = async () => {
    // Fetch testimonials from the database
    const data = await getListDataFromDatabase("testimonial");
    setTestimonials(data);
  };

  const openModal = (testimonial) => {
    setSelectedTestimonial(testimonial);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedTestimonial(null);
  };

  useEffect(() => {
    getTestimonials();
  }, []);
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

            <div className="card-body p-3">
              <div className="row">
                {testimonials.length > 0 ? (
                  testimonials.map((item, index) => (
                    <div className="col-xl-6 col-md-6 mb-4" key={item?._id}>
                      <div className="card h-100">
                        <div className="card-body p-3">
                          <div className="d-flex align-items-center mb-3">
                            <div className="me-3">
                              {item?.avatar ? (
                                <img
                                  src={item?.avatar}
                                  alt={item?.name}
                                  className="avatar avatar-lg rounded-circle"
                                />
                              ) : (
                                <div className="avatar avatar-lg bg-gradient-primary rounded-circle d-flex align-items-center justify-content-center">
                                  <span className="text-white font-weight-bold">
                                    {item?.name?.charAt(0)}
                                  </span>
                                </div>
                              )}
                            </div>
                            <div className="flex-grow-1">
                              <h6 className="mb-0">{item?.name}</h6>
                              <p className="text-xs text-secondary mb-0">
                                {item?.position}
                              </p>
                              <p className="text-xs text-secondary mb-0">
                                {item?.company}
                              </p>
                            </div>
                            <div>
                              <span className={`badge badge-sm bg-gradient-${item?.is_show ? 'success' : 'danger'}`}>
                                {item?.is_show ? 'Approved' : 'Pending'}
                              </span>
                            </div>
                          </div>

                          <div className="mb-3">
                            <p className="text-sm text-secondary mb-0" style={{
                              display: '-webkit-box',
                              WebkitLineClamp: 3,
                              WebkitBoxOrient: 'vertical',
                              overflow: 'hidden',
                              textOverflow: 'ellipsis'
                            }}>
                              {item?.testimonial}
                            </p>
                          </div>

                          <div className="mb-3">
                            <div className="d-flex justify-content-between">
                              <div>
                                <p className="text-xs text-secondary mb-0">Created</p>
                                <p className="text-xs font-weight-bold mb-0">
                                  {new Date(item?.createdAt).toLocaleDateString()}
                                </p>
                              </div>
                              <div>
                                <p className="text-xs text-secondary mb-0">Updated</p>
                                <p className="text-xs font-weight-bold mb-0">
                                  {new Date(item?.updatedAt).toLocaleDateString()}
                                </p>
                              </div>
                              <div>
                                <p className="text-xs text-secondary mb-0">Rating</p>
                                <p className="text-xs font-weight-bold mb-0">
                                  {'⭐'.repeat(item?.rating || 5)}
                                </p>
                              </div>
                            </div>
                          </div>

                          <div className="d-flex gap-2">
                            <button
                              className="btn btn-sm bg-gradient-secondary flex-grow-1"
                              onClick={() => openModal(item)}
                            >
                              <MdVisibility size={15} className="me-1" />
                              View
                            </button>
                            <Link
                              className="btn btn-sm bg-gradient-info flex-grow-1"
                              href={`/admin/testimonials/${item?._id}`}
                            >
                              <MdModeEdit size={15} className="me-1" />
                              Edit
                            </Link>
                            <button
                              className="btn btn-sm bg-gradient-danger flex-grow-1"
                              data-toggle="tooltip"
                              data-original-title="Delete"
                            onClick={() => deleteDataFromDatabase("testimonial", item._id)}
                            >
                              <MdDelete size={15} className="me-1" />
                              Delete
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="col-12">
                    <div className="text-center py-5">
                      <p className="text-secondary mb-0">No testimonials available</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Details Modal */}
      {showModal && selectedTestimonial && (
        <div
          className="modal fade show d-block"
          style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}
          onClick={closeModal}
        >
          <div
            className="modal-dialog modal-dialog-centered modal-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Testimonial Details</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={closeModal}
                  aria-label="Close"
                >
                  <MdClose size={20} />
                </button>
              </div>
              <div className="modal-body">
                <div className="row">
                  <div className="col-md-12 mb-4">
                    <div className="d-flex align-items-center">
                      <div className="me-4">
                        {selectedTestimonial?.avatar ? (
                          <img
                            src={selectedTestimonial?.avatar}
                            alt={selectedTestimonial?.name}
                            className="avatar avatar-xl rounded-circle"
                          />
                        ) : (
                          <div className="avatar avatar-xl bg-gradient-primary rounded-circle d-flex align-items-center justify-content-center">
                            <span className="text-white font-weight-bold h3 mb-0">
                              {selectedTestimonial?.name?.charAt(0)}
                            </span>
                          </div>
                        )}
                      </div>
                      <div className="flex-grow-1">
                        <h4 className="mb-1">{selectedTestimonial?.name}</h4>
                        <p className="text-sm text-secondary mb-0">
                          {selectedTestimonial?.position} at {selectedTestimonial?.company}
                        </p>
                        <div className="mt-2">
                          <span className={`badge bg-gradient-${selectedTestimonial?.is_show ? 'success' : 'danger'}`}>
                            {selectedTestimonial?.is_show ? 'Approved' : 'Pending'}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-12 mb-3">
                    <h6 className="text-sm font-weight-bold">Testimonial</h6>
                    <p className="text-sm text-secondary">
                      {selectedTestimonial?.testimonial}
                    </p>
                  </div>

                  <div className="col-md-4 mb-3">
                    <h6 className="text-xs text-secondary mb-1">Rating</h6>
                    <p className="text-sm font-weight-bold mb-0">
                      {'⭐'.repeat(selectedTestimonial?.rating || 5)} ({selectedTestimonial?.rating || 5}/5)
                    </p>
                  </div>

                  <div className="col-md-4 mb-3">
                    <h6 className="text-xs text-secondary mb-1">Created At</h6>
                    <p className="text-sm font-weight-bold mb-0">
                      {new Date(selectedTestimonial?.createdAt).toLocaleString()}
                    </p>
                  </div>

                  <div className="col-md-4 mb-3">
                    <h6 className="text-xs text-secondary mb-1">Updated At</h6>
                    <p className="text-sm font-weight-bold mb-0">
                      {new Date(selectedTestimonial?.updatedAt).toLocaleString()}
                    </p>
                  </div>

                  {selectedTestimonial?.order !== undefined && (
                    <div className="col-md-4 mb-3">
                      <h6 className="text-xs text-secondary mb-1">Display Order</h6>
                      <p className="text-sm font-weight-bold mb-0">
                        {selectedTestimonial?.order}
                      </p>
                    </div>
                  )}
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={closeModal}
                >
                  Close
                </button>
                <Link
                  className="btn btn-primary"
                  href={`/admin/testimonials/${selectedTestimonial?._id}`}
                >
                  <MdModeEdit size={15} className="me-1" />
                  Edit Testimonial
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Page