'use client';

import React, { useEffect, useState } from 'react';
import * as FaIcons from 'react-icons/fa6';
import Swal from 'sweetalert2';
import CreateLanguageModal from './CreateLanguageModal';
import EditLanguageModal from './EditLanguageModal';

function Page() {
    const [languages, setLanguages] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [showCreateModal, setShowCreateModal] = useState(false);
    const [showEditModal, setShowEditModal] = useState(false);
    const [editingLanguageId, setEditingLanguageId] = useState(null);

    useEffect(() => {
        fetchLanguages();
    }, []);

    const fetchLanguages = async () => {
        try {
            setLoading(true);
            const response = await fetch('/api/v1/language');
            const result = await response.json();

            if (result.success) {
                setLanguages(result.data);
            } else {
                setError(result.error || 'Failed to fetch languages');
            }
        } catch (error) {
            setError('Error fetching languages: ' + error.message);
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = async (id) => {
        const result = await Swal.fire({
            title: 'Are you sure?',
            text: 'You will not be able to recover this language!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        });

        if (!result.isConfirmed) {
            return;
        }

        try {
            const response = await fetch(`/api/v1/language?id=${id}`, {
                method: 'DELETE',
            });
            const resultData = await response.json();

            if (resultData.success) {
                setLanguages(languages.filter((lang) => lang._id !== id));
                Swal.fire({
                    title: 'Deleted!',
                    text: 'Language deleted successfully.',
                    icon: 'success',
                    showConfirmButton: false,
                    timer: 1500
                });
            } else {
                Swal.fire({
                    title: 'Error!',
                    text: resultData.error || 'Failed to delete',
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
        }
    };

    if (loading) {
        return <div className="container mt-5">Loading...</div>;
    }

    return (
        <div className="container-fluid py-4">
            <div className="row">
                <div className="col-12">
                    <div className="card">
                        <div className="card-header pb-0 d-flex justify-content-between align-items-center">
                            <h6>Languages</h6>
                            <button
                                onClick={() => setShowCreateModal(true)}
                                className="btn btn-sm btn-primary"
                            >
                                <FaIcons.FaPlus size={14} /> Add Language
                            </button>
                        </div>
                        <div className="card-body">
                            {error && <div className="alert alert-danger">{error}</div>}
                            <div className="table-responsive">
                                <table className="table align-items-center mb-0">
                                    <thead>
                                        <tr>
                                            <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">#</th>
                                            <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Name</th>
                                            <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Version</th>
                                            <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Type</th>
                                            <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Created At</th>
                                            <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {languages.length > 0 ? (
                                            languages.map((language, index) => (
                                                <tr key={language._id}>
                                                    <td className="text-xs font-weight-bold mb-0">{index + 1}</td>
                                                    <td className="text-xs font-weight-bold mb-0">{language.name}</td>
                                                    <td className="text-xs font-weight-bold mb-0">{language.version || '-'}</td>
                                                    <td className="text-xs font-weight-bold mb-0">
                                                        <span className={`badge ${language.types === 'tool' ? 'bg-info' : 'bg-primary'}`}>
                                                            {language.types || 'language'}
                                                        </span>
                                                    </td>
                                                    <td className="text-xs font-weight-bold mb-0">
                                                        {new Date(language.createdAt).toLocaleDateString()}
                                                    </td>
                                                    <td className="text-xs font-weight-bold mb-0">
                                                        <button
                                                            onClick={() => {
                                                                setEditingLanguageId(language._id);
                                                                setShowEditModal(true);
                                                            }}
                                                            className="btn btn-sm btn-info me-2"
                                                        >
                                                            <FaIcons.FaPencil size={14} />
                                                        </button>
                                                        <button
                                                            onClick={() => handleDelete(language._id)}
                                                            className="btn btn-sm btn-danger"
                                                        >
                                                            <FaIcons.FaTrash size={14} />
                                                        </button>
                                                    </td>
                                                </tr>
                                            ))
                                        ) : (
                                            <tr>
                                                <td colSpan="6" className="text-center text-xs font-weight-bold mb-0">
                                                    No languages found
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

            {/* Modals */}
            <CreateLanguageModal
                isOpen={showCreateModal}
                onClose={() => setShowCreateModal(false)}
                onSuccess={fetchLanguages}
            />
            <EditLanguageModal
                isOpen={showEditModal}
                languageId={editingLanguageId}
                onClose={() => {
                    setShowEditModal(false);
                    setEditingLanguageId(null);
                }}
                onSuccess={fetchLanguages}
            />
        </div>
    );
}

export default Page;
