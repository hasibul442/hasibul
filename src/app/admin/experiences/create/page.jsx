"use client";
import { removespace } from "@/Helper/Helper";
import { db } from "@/lib/firebase";
import { doc, setDoc } from "firebase/firestore";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import Swal from "sweetalert2";

function Page() {
  const [orgname, setOrgName] = useState("");
  const [position, setPosition] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [description, setDescription] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    //Validation add
    // console.log(endDate);
    const sanitizedOrgName = removespace(orgname);
    const sanitizedPosition = removespace(position);
    return setDoc(doc(db, "experiences", `${sanitizedOrgName}-${sanitizedPosition}`), {
      id: `${sanitizedOrgName}-${sanitizedPosition}`,
      org_name: orgname,
      position: position,
      start_date: new Date(startDate).toISOString(),
      end_date: endDate ? new Date(endDate).toISOString() : null,
      status: 1,
      description: description,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    }).then(() => {
      Swal.fire({
        title: "Success!",
        text: "Experience created successfully.",
        icon: "success",
      }).then(() => {
        router.push("/admin/experiences");
        setOrgName("");
        setPosition("");
        setStartDate("");
        setEndDate("");
        setDescription("");
      });
    }).catch((error) => {
      console.error("Error creating experience:", error);
    });
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
                      placeholder="Organization Name"
                      aria-label="Organization Name"
                      value={orgname}
                      onChange={(e) => setOrgName(e.target.value)}
                    />
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Position"
                      aria-label="Position"
                      value={position}
                      onChange={(e) => setPosition(e.target.value)}
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
