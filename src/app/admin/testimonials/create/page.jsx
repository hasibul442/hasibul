"use client";
import { removespace } from "@/Helper/Helper";
import { db } from "@/lib/firebase";
import { doc, setDoc } from "firebase/firestore";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import Swal from "sweetalert2";

function Page() {
	const [name, setName] = useState("");
	const [company, setCompany] = useState("");
	const [position, setPosition] = useState("");
	const [description, setDescription] = useState("");
	const [image, setImage] = useState("");

	const router = useRouter();

	const handleSubmit = async (e) => {
		e.preventDefault();

		const sanitizedName = removespace(name);
		const sanitizedCompany = removespace(company);
		const sanitizedPosition = removespace(position);

		return setDoc(doc(db, "testimonials", `${sanitizedName}-${sanitizedCompany}-${sanitizedPosition}`), {
			id: `${sanitizedName}-${sanitizedCompany}-${sanitizedPosition}`,
			name: name,
			company: company,
			position: position,
			image: image,
			description: description,
			status: 1,
			createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
		});
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
											placeholder="Image URL"
											aria-label="Image URL"
											value={image}
											onChange={(e) => setImage(e.target.value)}
										/>
									</div>
								</div>

								<div className="col-md-12">
									<div className="mb-3">
										<textarea
											className="form-control"
											placeholder="Description"
											aria-label="Description"
											rows="4"
											value={description}
											onChange={(e) => setDescription(e.target.value)}
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
