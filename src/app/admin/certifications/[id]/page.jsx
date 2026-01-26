"use client";
import axios from "axios";
import Link from "next/link";
import { useRouter, useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { fileToBase64 } from "@/Helper/Helper";

function Page() {
    const [title, setTitle] = useState("");
    const [issuer, setIssuer] = useState("");
    const [issueDate, setIssueDate] = useState("");
    const [expirationDate, setExpirationDate] = useState("");
    const [credentialID, setCredentialID] = useState("");
    const [credentialURL, setCredentialURL] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState(null);
    const [imagePreview, setImagePreview] = useState("");
    const [status, setStatus] = useState(false);
    const [loading, setLoading] = useState(true);
    const router = useRouter();
    const params = useParams();
    const id = params.id;

    const handleImageChange = async (e) => {
        const file = e.target.files?.[0];
        if (file) {
            setImage(file);
            const preview = await fileToBase64(file);
            setImagePreview(preview);
        }
    };

    useEffect(() => {
        const fetchCertification = async () => {
            try {
                const response = await axios.get(`/api/v1/certification?id=${id}`);
                if (response.data.success) {
                    const cert = response.data.data;
                    setTitle(cert.title);
                    setIssuer(cert.issuer);
                    setIssueDate(new Date(cert.issueDate).toISOString().split('T')[0]);
                    setExpirationDate(
                        cert.expirationDate
                            ? new Date(cert.expirationDate).toISOString().split('T')[0]
                            : ""
                    );
                    setCredentialID(cert.credentialID || "");
                    setCredentialURL(cert.credentialURL || "");
                    setDescription(cert.description || "");
                    setImagePreview(cert.image || "");
                    setStatus(cert.status || false);
                }
            } catch (error) {
                console.error("Error fetching certification:", error);
                Swal.fire({
                    title: "Error!",
                    text: "Failed to load certification data",
                    icon: "error"
                });
            } finally {
                setLoading(false);
            }
        };

            if (id) {
                fetchCertification();
            }
        }, [id]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const base64Image = image ? await fileToBase64(image) : imagePreview;
            const response = await axios.put(`/api/v1/certification?id=${id}`, {
                title,
                issuer,
                issueDate: new Date(issueDate).toISOString(),
                expirationDate: expirationDate ? new Date(expirationDate).toISOString() : null,
                credentialID,
                credentialURL,
                description,
                image: base64Image,
                status,
            });

            if (response.data.success) {
                await Swal.fire({
                    title: "Success!",
                    text: "Certification updated successfully.",
                    icon: "success",
                    showConfirmButton: false,
                    timer: 1500
                });
                router.push("/admin/certifications");
            }
        } catch (error) {
            console.error("Error updating certification:", error);
            await Swal.fire({
                title: "Error!",
                text: error.response?.data?.error || "Failed to update certification",
                icon: "error"
            });
        }
    };

    if (loading) {
        return (
            <div className="row">
                <div className="col-12">
                    <div className="card mb-4">
                        <div className="card-body text-center py-4">
                            <p>Loading...</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <>
            <div className="row">
                <div className="col-12">
                    <div className="card mb-4">
                        <div className="card-header text-center pt-4">
                            <h5>Edit Certification</h5>
                        </div>
                        <div className="card-body px-5">
                            <form onSubmit={handleSubmit}>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="mb-3">
                                            <label htmlFor="title" className="form-label">
                                                Title <span className="text-danger">*</span>
                                            </label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="title"
                                                placeholder="Certification Title"
                                                value={title}
                                                onChange={(e) => setTitle(e.target.value)}
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div className="col-md-6">
                                        <div className="mb-3">
                                            <label htmlFor="issuer" className="form-label">
                                                Issuer <span className="text-danger">*</span>
                                            </label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="issuer"
                                                placeholder="Issuing Organization"
                                                value={issuer}
                                                onChange={(e) => setIssuer(e.target.value)}
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div className="col-md-6">
                                        <div className="mb-3">
                                            <label htmlFor="issueDate" className="form-label">
                                                Issue Date <span className="text-danger">*</span>
                                            </label>
                                            <input
                                                type="date"
                                                className="form-control"
                                                id="issueDate"
                                                value={issueDate}
                                                onChange={(e) => setIssueDate(e.target.value)}
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div className="col-md-6">
                                        <div className="mb-3">
                                            <label htmlFor="expirationDate" className="form-label">
                                                Expiration Date
                                            </label>
                                            <input
                                                type="date"
                                                className="form-control"
                                                id="expirationDate"
                                                placeholder="Expiration Date"
                                                value={expirationDate}
                                                onChange={(e) => setExpirationDate(e.target.value)}
                                            />
                                        </div>
                                    </div>

                                    <div className="col-md-6">
                                        <div className="mb-3">
                                            <label htmlFor="credentialID" className="form-label">
                                                Credential ID
                                            </label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="credentialID"
                                                placeholder="Credential ID"
                                                value={credentialID}
                                                onChange={(e) => setCredentialID(e.target.value)}
                                            />
                                        </div>
                                    </div>

                                    <div className="col-md-6">
                                        <div className="mb-3">
                                            <label htmlFor="credentialURL" className="form-label">
                                                Credential URL
                                            </label>
                                            <input
                                                type="url"
                                                className="form-control"
                                                id="credentialURL"
                                                placeholder="https://..."
                                                value={credentialURL}
                                                onChange={(e) => setCredentialURL(e.target.value)}
                                            />
                                        </div>
                                    </div>

                                    <div className="col-md-6">
                                        <div className="mb-3">
                                            <label htmlFor="image" className="form-label">
                                                Image
                                            </label>
                                            <input
                                                type="file"
                                                className="form-control"
                                                id="image"
                                                accept="image/*"
                                                onChange={handleImageChange}
                                            />
                                        </div>
                                        {imagePreview && (
                                            <div className="mb-3">
                                                <img
                                                    src={imagePreview}
                                                    alt="Preview"
                                                    style={{
                                                        maxWidth: "200px",
                                                        maxHeight: "200px",
                                                        objectFit: "contain"
                                                    }}
                                                />
                                            </div>
                                        )}
                                    </div>

                                    <div className="col-md-6">
                                        <div className="mb-3 form-check">
                                            <input
                                                type="checkbox"
                                                className="form-check-input"
                                                id="statusCheck"
                                                checked={status}
                                                onChange={(e) => setStatus(e.target.checked)}
                                            />
                                            <label className="form-check-label" htmlFor="statusCheck">
                                                Active
                                            </label>
                                        </div>
                                    </div>

                                    <div className="col-md-12">
                                        <div className="mb-3">
                                            <label htmlFor="description" className="form-label">
                                                Description
                                            </label>
                                            <textarea
                                                className="form-control"
                                                id="description"
                                                placeholder="Description"
                                                rows="4"
                                                value={description}
                                                onChange={(e) => setDescription(e.target.value)}
                                            ></textarea>
                                        </div>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-md-12 d-flex gap-2">
                                        <button type="submit" className="btn btn-primary">
                                            Update Certification
                                        </button>
                                        <Link href="/admin/certifications" className="btn btn-secondary">
                                            Cancel
                                        </Link>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Page;
