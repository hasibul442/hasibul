"use client";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import Swal from "sweetalert2";

function Page() {
	const [name, setName] = useState("");
	const [company, setCompany] = useState("");
	const [position, setPosition] = useState("");
	const [testimonial, setTestimonial] = useState("");
	const [avatar, setAvatar] = useState("");
	const [rating, setRating] = useState(5);

	const router = useRouter();

	const handleSubmit = async (e) => {
		e.preventDefault();

		try {
			const response = await axios.post("/api/v1/testimonial", {
				name,
				company,
				position,
				testimonial,
				avatar,
				rating: parseInt(rating)
			});

			if (response.data.success) {
				await Swal.fire({
					title: "Success!",
					text: "Testimonial created successfully.",
					icon: "success",
					showConfirmButton: false,
					timer: 1500
				});
				router.push("/admin/testimonials");
			}
		} catch (error) {
			console.error("Error creating testimonial:", error);
			await Swal.fire({
				title: "Error!",
				text: error.response?.data?.error || "Failed to create testimonial",
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
							<h5>Create Testimonial</h5>
						</div>
						<div className="card-body px-5">
							<div className="row">
								<div className="col-md-6">
									<div className="mb-3">
										<input
											type="text"
											className="form-control"
											placeholder="Name"
											aria-label="Name"
											value={name}
											onChange={(e) => setName(e.target.value)}
										/>
									</div>
								</div>

								<div className="col-md-6">
									<div className="mb-3">
										<input
											type="text"
											className="form-control"
											placeholder="Company"
											aria-label="Company"
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
											type="url"
											className="form-control"
											placeholder="Avatar URL"
											aria-label="Avatar URL"
											value={avatar}
											onChange={(e) => setAvatar(e.target.value)}
										/>
									</div>
								</div>

								<div className="col-md-6">
									<div className="mb-3">
										<input
											type="number"
											className="form-control"
											placeholder="Rating (1-5)"
											aria-label="Rating"
											min="1"
											max="5"
											value={rating}
											onChange={(e) => setRating(e.target.value)}
										/>
									</div>
								</div>

								<div className="col-md-12">
									<div className="mb-3">
										<textarea
											className="form-control"
											placeholder="Testimonial"
											aria-label="Testimonial"
											rows="4"
											value={testimonial}
											onChange={(e) => setTestimonial(e.target.value)}
										/>
									</div>
								</div>
							</div>

							<div className="text-center">
								<Link
									className="btn btn-secondary me-2"
									href="/admin/testimonials"
								>
									Back
								</Link>
								<button className="btn btn-primary me-2" onClick={handleSubmit}>
									Create Testimonial
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
