'use client';

import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';

function EditLanguageModal({ isOpen, languageId, onClose, onSuccess }) {
    const [formData, setFormData] = useState({
        name: '',
        version: '',
    });
    const [loading, setLoading] = useState(false);
    const [submitting, setSubmitting] = useState(false);

    useEffect(() => {
        if (isOpen && languageId) {
            fetchLanguage();
        }
    }, [isOpen, languageId]);

    const fetchLanguage = async () => {
        try {
            setLoading(true);
            const response = await fetch(`/api/v1/language?id=${languageId}`);
            const result = await response.json();

            if (result.success) {
                setFormData(result.data);
            } else {
                Swal.fire(
                    'Error!',
                    result.error || 'Failed to fetch language',
                    'error'
                );
            }
        } catch (error) {
            Swal.fire(
                'Error!',
                error.message,
                'error'
            );
        } finally {
            setLoading(false);
        }
    };

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
            const response = await fetch(`/api/v1/language?id=${languageId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const result = await response.json();

            if (result.success) {
                Swal.fire(
                    'Success!',
                    'Language updated successfully.',
                    'success'
                );
                onClose();
                onSuccess();
            } else {
                Swal.fire(
                    'Error!',
                    result.error || 'Failed to update',
                    'error'
                );
            }
        } catch (error) {
            Swal.fire(
                'Error!',
                error.message,
                'error'
            );
        } finally {
            setSubmitting(false);
        }
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
                        <h5 className="modal-title">Edit Language</h5>
                        <button
                            type="button"
                            className="btn-close"
                            onClick={onClose}
                        ></button>
                    </div>
                    <div className="modal-body">
                        {loading ? (
                            <p>Loading...</p>
                        ) : (
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label className="form-label">Language Name</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="name"
                                        value={formData.name || ''}
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
                                        value={formData.version || ''}
                                        onChange={handleChange}
                                        placeholder="e.g., 1.0, 2.5"
                                    />
                                </div>
                            </form>
                        )}
                    </div>
                    <div className="modal-footer">
                        <button
                            type="button"
                            className="btn btn-secondary"
                            onClick={onClose}
                        >
                            Close
                        </button>
                        <button
                            type="button"
                            className="btn btn-primary"
                            onClick={handleSubmit}
                            disabled={submitting || loading}
                        >
                            {submitting ? 'Updating...' : 'Update'}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EditLanguageModal;
