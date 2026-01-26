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
    const [certifications, setCertifications] = useState([]);

    const getCertifications = async () => {
        const data = await getListDataFromDatabase("certification");
        const sortedData = data.sort((a, b) => new Date(b.issueDate) - new Date(a.issueDate));
        setCertifications(sortedData);
    };

    const deleteCertification = async (id) => {
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
                deleteDataFromDatabase("certifications", id).then(() => {
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your certification has been deleted.",
                        icon: "success",
                        showConfirmButton: false,
                        timer: 1500
                    }).then(() => {
                        getCertifications();
                    });
                }).catch((error) => {
                    console.error("Error deleting certification:", error);
                    Swal.fire({
                        title: "Error!",
                        text: "There was an error deleting the certification.",
                        icon: "error",
                        showConfirmButton: false,
                        timer: 1500
                    });
                });
            }
        });
    };

    useEffect(() => {
        getCertifications();
    }, []);

    return (
        <>
            <div className="row">
                <div className="col-12">
                    <div className="card mb-4">
                        <div className="card-header pb-0">
                            <div className="d-flex justify-content-between align-items-center">
                                <div>
                                    <h6>Certifications</h6>
                                </div>
                                <div>
                                    <Link
                                        className="btn btn-primary"
                                        href="/admin/certifications/create"
                                    >
                                        Add Certification
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
                                                Title
                                            </th>
                                            <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                                                Issuer
                                            </th>
                                            <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                                                Issue Date
                                            </th>
                                            <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                                                Expiration Date
                                            </th>
                                            <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                                                Status
                                            </th>
                                            <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                                                Action
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {certifications && certifications.length > 0 ? (
                                            certifications.map((cert, index) => (
                                                <tr key={cert._id}>
                                                    <td className="text-sm text-secondary">
                                                        <b>{index + 1}</b>
                                                    </td>
                                                    <td className="text-sm text-secondary">
                                                        <b>{cert.title}</b>
                                                    </td>
                                                    <td className="text-center text-sm">
                                                        {cert.issuer}
                                                    </td>
                                                    <td className="text-center text-sm">
                                                        {new Date(cert.issueDate).toLocaleDateString()}
                                                    </td>
                                                    <td className="text-center text-sm">
                                                        {cert.expirationDate
                                                            ? new Date(cert.expirationDate).toLocaleDateString()
                                                            : "N/A"}
                                                    </td>
                                                    <td className="text-center text-sm">
                                                        <span className={`badge ${cert.status ? "bg-success" : "bg-danger"}`}>
                                                            {cert.status ? "Active" : "Inactive"}
                                                        </span>
                                                    </td>
                                                    <td className="text-center">
                                                        <Link
                                                            href={`/admin/certifications/${cert._id}`}
                                                            className="me-2"
                                                        >
                                                            <MdModeEdit size={20} className="text-warning" />
                                                        </Link>
                                                        <button
                                                            className="btn btn-sm"
                                                            onClick={() => deleteCertification(cert._id)}
                                                        >
                                                            <MdDelete size={20} className="text-danger" />
                                                        </button>
                                                    </td>
                                                </tr>
                                            ))
                                        ) : (
                                            <tr>
                                                <td colSpan="7" className="text-center text-sm py-4">
                                                    No certifications found
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
