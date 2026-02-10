'use client';

import { useEffect, useState } from 'react';

export default function VisitorList() {
    const [visitors, setVisitors] = useState([]);
    const [loading, setLoading] = useState(true);
    const [pagination, setPagination] = useState({
        page: 1,
        limit: 10,
        total: 0,
        totalPages: 0
    });
    const [sortBy, setSortBy] = useState('lastVisit');
    const [order, setOrder] = useState('desc');

    const fetchVisitors = async (page = 1) => {
        try {
            setLoading(true);
            const response = await fetch(
                `/api/v1/visitor?type=list&page=${page}&limit=${pagination.limit}&sortBy=${sortBy}&order=${order}`
            );
            const data = await response.json();

            if (data.success) {
                setVisitors(data.data.visitors);
                setPagination(data.data.pagination);
            }
        } catch (error) {
            console.error('Error fetching visitors:', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchVisitors(pagination.page);
    }, [sortBy, order]);

    const handleSort = (field) => {
        if (sortBy === field) {
            setOrder(order === 'asc' ? 'desc' : 'asc');
        } else {
            setSortBy(field);
            setOrder('desc');
        }
    };

    const handlePageChange = (newPage) => {
        fetchVisitors(newPage);
    };

    const formatDate = (date) => {
        return new Date(date).toLocaleString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
    };

    if (loading) {
        return (
            <div className="card">
                <div className="card-body text-center p-4">
                    <p>Loading visitors...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="card">
            <div className="card-header pb-0">
                <div className="d-flex justify-content-between align-items-center">
                    <h6>Visitor List</h6>
                    <span className="badge badge-sm bg-gradient-primary">
                        {pagination.total} Total Visitors
                    </span>
                </div>
            </div>
            <div className="card-body px-0 pt-0 pb-2">
                <div className="table-responsive p-0">
                    <table className="table align-items-center mb-0">
                        <thead>
                            <tr>
                                <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                                    Visitor ID
                                </th>
                                <th
                                    className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2 cursor-pointer"
                                    onClick={() => handleSort('visitCount')}
                                >
                                    Visits {sortBy === 'visitCount' && (order === 'asc' ? '↑' : '↓')}
                                </th>
                                <th
                                    className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2 cursor-pointer"
                                    onClick={() => handleSort('firstVisit')}
                                >
                                    First Visit {sortBy === 'firstVisit' && (order === 'asc' ? '↑' : '↓')}
                                </th>
                                <th
                                    className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2 cursor-pointer"
                                    onClick={() => handleSort('lastVisit')}
                                >
                                    Last Visit {sortBy === 'lastVisit' && (order === 'asc' ? '↑' : '↓')}
                                </th>
                                <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">
                                    IP Address
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {visitors.map((visitor, index) => (
                                <tr key={visitor._id || index}>
                                    <td>
                                        <div className="d-flex px-2 py-1">
                                            <div className="d-flex flex-column justify-content-center">
                                                <h6 className="mb-0 text-sm">
                                                    {visitor.visitorId.substring(0, 20)}...
                                                </h6>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <span className="badge badge-sm bg-gradient-success">
                                            {visitor.visitCount}
                                        </span>
                                    </td>
                                    <td>
                                        <p className="text-xs font-weight-bold mb-0">
                                            {formatDate(visitor.firstVisit)}
                                        </p>
                                    </td>
                                    <td>
                                        <p className="text-xs font-weight-bold mb-0">
                                            {formatDate(visitor.lastVisit)}
                                        </p>
                                    </td>
                                    <td>
                                        <p className="text-xs text-secondary mb-0">
                                            {visitor.ipAddress || 'N/A'}
                                        </p>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Pagination */}
                {pagination.totalPages > 1 && (
                    <div className="d-flex justify-content-center mt-3 mb-3">
                        <nav aria-label="Page navigation">
                            <ul className="pagination">
                                <li className={`page-item ${pagination.page === 1 ? 'disabled' : ''}`}>
                                    <button
                                        className="page-link"
                                        onClick={() => handlePageChange(pagination.page - 1)}
                                        disabled={pagination.page === 1}
                                    >
                                        Previous
                                    </button>
                                </li>

                                {[...Array(pagination.totalPages)].map((_, index) => (
                                    <li
                                        key={index + 1}
                                        className={`page-item ${pagination.page === index + 1 ? 'active' : ''}`}
                                    >
                                        <button
                                            className="page-link"
                                            onClick={() => handlePageChange(index + 1)}
                                        >
                                            {index + 1}
                                        </button>
                                    </li>
                                ))}

                                <li className={`page-item ${pagination.page === pagination.totalPages ? 'disabled' : ''}`}>
                                    <button
                                        className="page-link"
                                        onClick={() => handlePageChange(pagination.page + 1)}
                                        disabled={pagination.page === pagination.totalPages}
                                    >
                                        Next
                                    </button>
                                </li>
                            </ul>
                        </nav>
                    </div>
                )}
            </div>
        </div>
    );
}
