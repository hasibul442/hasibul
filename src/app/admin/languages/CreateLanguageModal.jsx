'use client';

import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa6';
import Swal from 'sweetalert2';

function CreateLanguageModal({ isOpen, onClose, onSuccess }) {
    const [formData, setFormData] = useState({
        name: '',
        version: '',
        type: 'language',
    });
    const [submitting, setSubmitting] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmitting(true);

        try {
            const response = await fetch('/api/v1/language', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const result = await response.json();

            if (result.success) {
                Swal.fire({
                    title: 'Success!',
                    text: 'Language created successfully.',
                    icon: 'success',
                    showConfirmButton: false,
                    timer: 1500
                });
                setFormData({ name: '' });
                onClose();
                onSuccess();
            } else {
                Swal.fire({
                    title: 'Error!',
                    text: result.error || 'Failed to create',
                    icon: 'error',
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        } catch (error) {
            Swal.fire({
                title: 'Error!',
                text: error.message,
                icon: 'error',
                showConfirmButton: false,
                timer: 1500
            });
        } finally {
            setSubmitting(false);
        }
    };

    const handleClose = () => {
        setFormData({ name: '', version: '', type: 'language' });
        onClose();
    };

    if (!isOpen) return null;

    return (
        <div
            className="modal d-block"
            style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
        >
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Create Language</h5>
                        <button
                            type="button"
                            className="btn-close"
                            onClick={handleClose}
                        ></button>
                    </div>
                    <div className="modal-body">
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label className="form-label">Language Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    placeholder="e.g., English, Spanish, French"
                                    autoFocus
                                />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Version</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="version"
                                    value={formData.version}
                                    onChange={handleChange}
                                    placeholder="e.g., 1.0, 2.5"
                                />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Type</label>
                                <select
                                    className="form-control"
                                    name="type"
                                    value={formData.type}
                                    onChange={handleChange}
                                >
                                    <option value="language">Language</option>
                                    <option value="tool">Tool</option>
                                </select>
                            </div>
                        </form>
                    </div>
                    <div className="modal-footer">
                        <button
                            type="button"
                            className="btn btn-secondary"
                            onClick={handleClose}
                        >
                            Close
                        </button>
                        <button
                            type="button"
                            className="btn btn-primary"
                            onClick={handleSubmit}
                            disabled={submitting}
                        >
                            {submitting ? 'Creating...' : 'Create'}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CreateLanguageModal;
