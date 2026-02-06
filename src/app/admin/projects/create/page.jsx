"use client";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import Swal from "sweetalert2";
import { fileToBase64 } from "@/Helper/Helper";
import dynamic from "next/dynamic";

const ReactQuill = dynamic(() => import("react-quill-new"), { ssr: false });

function Page() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [longDescription, setLongDescription] = useState("");
    const [technologies, setTechnologies] = useState("");
    const [image, setImage] = useState("");
    const [liveUrl, setLiveUrl] = useState("");
    const [githubUrl, setGithubUrl] = useState("");
    const [featured, setFeatured] = useState(false);
    const [order, setOrder] = useState(0);
    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!title || !description) {
            await Swal.fire({
                title: "Error!",
                text: "Please fill in all required fields (Title and Description)",
                icon: "error"
            });
            return;
        }

        try {
            const response = await axios.post("/api/v1/project", {
                title,
                description,
                longDescription,
                technologies: technologies.split(",").map(t => t.trim()).filter(t => t),
                image,
                liveUrl,
                githubUrl,
                featured,
                order: parseInt(order) || 0,
            });

            if (response.data.success) {
                await Swal.fire({
                    title: "Success!",
                    text: "Project created successfully.",
                    icon: "success",
                    showConfirmButton: false,
                    timer: 1500
                });
                router.push("/admin/projects");
            }
        } catch (error) {
            console.error("Error creating project:", error);
            await Swal.fire({
                title: "Error!",
                text: error.response?.data?.error || "Failed to create project",
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
                            <h5>Create Project</h5>
                        </div>
                        <div className="card-body px-5">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="mb-3">
                                        <label className="form-label">Title *</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Project Title"
                                            aria-label="Title"
                                            value={title}
                                            onChange={(e) => setTitle(e.target.value)}
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="col-md-12">
                                    <div className="mb-3">
                                        <label className="form-label">Short Description *</label>
                                        <textarea
                                            className="form-control"
                                            placeholder="Brief description"
                                            aria-label="Description"
                                            rows="3"
                                            value={description}
                                            onChange={(e) => setDescription(e.target.value)}
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="col-md-12">
                                    <div className="mb-3">
                                        <label className="form-label">Long Description</label>
                                        {/* <textarea
                                            className="form-control"
                                            placeholder="Write detailed description here..."
                                            aria-label="Long Description"
                                            rows="10"
                                            value={longDescription}
                                            onChange={(e) => setLongDescription(e.target.value)}
                                        /> */}
                                        <ReactQuill
                                            theme="snow"
                                            value={longDescription}
                                            onChange={setLongDescription}
                                            placeholder="Write detailed description here..."
                                        />
                                    </div>
                                </div>

                                <div className="col-md-6">
                                    <div className="mb-3">
                                        <label className="form-label">Technologies</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="React, Node.js, MongoDB (comma separated)"
                                            aria-label="Technologies"
                                            value={technologies}
                                            onChange={(e) => setTechnologies(e.target.value)}
                                        />
                                    </div>
                                </div>

                                <div className="col-md-6">
                                    <div className="mb-3">
                                        <label className="form-label">Project Image</label>
                                        <input
                                            type="file"
                                            className="form-control"
                                            accept="image/*"
                                            aria-label="Image"
                                            onChange={async (e) => {
                                                const file = e.target.files[0];
                                                if (file) {
                                                    const base64 = await fileToBase64(file);
                                                    setImage(base64);
                                                }
                                            }}
                                        />
                                        {image && (
                                            <div className="mt-2">
                                                <img src={image} alt="Preview" style={{ maxWidth: "200px", maxHeight: "200px" }} className="img-thumbnail" />
                                            </div>
                                        )}
                                    </div>
                                </div>

                                <div className="col-md-6">
                                    <div className="mb-3">
                                        <label className="form-label">Live URL</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="https://project-demo.com"
                                            aria-label="Live URL"
                                            value={liveUrl}
                                            onChange={(e) => setLiveUrl(e.target.value)}
                                        />
                                    </div>
                                </div>

                                <div className="col-md-6">
                                    <div className="mb-3">
                                        <label className="form-label">GitHub URL</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="https://github.com/username/repo"
                                            aria-label="GitHub URL"
                                            value={githubUrl}
                                            onChange={(e) => setGithubUrl(e.target.value)}
                                        />
                                    </div>
                                </div>

                                <div className="col-md-6">
                                    <div className="mb-3">
                                        <label className="form-label">Order</label>
                                        <input
                                            type="number"
                                            className="form-control"
                                            placeholder="0"
                                            aria-label="Order"
                                            value={order}
                                            onChange={(e) => setOrder(e.target.value)}
                                        />
                                    </div>
                                </div>

                                <div className="col-md-6">
                                    <div className="mb-3 form-check" style={{ marginTop: "32px" }}>
                                        <input
                                            type="checkbox"
                                            className="form-check-input"
                                            id="featuredCheck"
                                            checked={featured}
                                            onChange={(e) => setFeatured(e.target.checked)}
                                        />
                                        <label className="form-check-label" htmlFor="featuredCheck">
                                            Featured Project
                                        </label>
                                    </div>
                                </div>
                            </div>

                            <div className="text-center mt-4">
                                <Link
                                    className="btn btn-secondary me-2"
                                    href="/admin/projects"
                                >
                                    Back
                                </Link>
                                <button className="btn btn-primary me-2" onClick={handleSubmit}>
                                    Create Project
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
