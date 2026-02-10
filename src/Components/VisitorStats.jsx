'use client';

import { useEffect, useState } from 'react';
import { FaPeopleGroup, FaEye, FaChartLine, FaClock } from 'react-icons/fa6';

export default function VisitorStats() {
    const [stats, setStats] = useState({
        totalUniqueVisitors: 0,
        totalVisits: 0,
        visitorsToday: 0,
        visitorsThisWeek: 0,
        visitorsThisMonth: 0,
        averageVisitsPerVisitor: 0
    });
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchStats = async () => {
            try {
                const response = await fetch('/api/v1/visitor');
                const data = await response.json();

                if (data.success) {
                    setStats(data.data);
                }
            } catch (error) {
                console.error('Error fetching visitor stats:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchStats();

        // Refresh stats every 30 seconds
        const interval = setInterval(fetchStats, 30000);

        return () => clearInterval(interval);
    }, []);

    if (loading) {
        return (
            <div className="row">
                <div className="col-12">
                    <div className="card">
                        <div className="card-body p-3 text-center">
                            <p>Loading visitor statistics...</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="row mb-4">
            <div className="col-lg-3 col-md-6 col-12 mb-4">
                <div className="card">
                    <span className="mask bg-gradient-primary opacity-10 border-radius-lg"></span>
                    <div className="card-body p-3 position-relative">
                        <div className="row">
                            <div className="col-12 text-start">
                                <div className="icon icon-shape bg-white shadow text-center border-radius-2xl">
                                    <div
                                        className="text-primary text-gradient text-lg opacity-10"
                                        style={{ paddingTop: "20%" }}
                                        aria-hidden="true"
                                    >
                                        <FaPeopleGroup />
                                    </div>
                                </div>
                                <h5 className="text-primary font-weight-bolder mb-0 mt-3">
                                    {stats.totalUniqueVisitors}
                                </h5>
                                <span className="text-sm">Unique Visitors</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-lg-3 col-md-6 col-12 mb-4">
                <div className="card">
                    <span className="mask bg-gradient-success opacity-10 border-radius-lg"></span>
                    <div className="card-body p-3 position-relative">
                        <div className="row">
                            <div className="col-12 text-start">
                                <div className="icon icon-shape bg-white shadow text-center border-radius-2xl">
                                    <div
                                        className="text-success text-gradient text-lg opacity-10"
                                        style={{ paddingTop: "20%" }}
                                        aria-hidden="true"
                                    >
                                        <FaEye />
                                    </div>
                                </div>
                                <h5 className="text-success font-weight-bolder mb-0 mt-3">
                                    {stats.totalVisits}
                                </h5>
                                <span className="text-sm">Total Visits</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-lg-3 col-md-6 col-12 mb-4">
                <div className="card">
                    <span className="mask bg-gradient-info opacity-10 border-radius-lg"></span>
                    <div className="card-body p-3 position-relative">
                        <div className="row">
                            <div className="col-12 text-start">
                                <div className="icon icon-shape bg-white shadow text-center border-radius-2xl">
                                    <div
                                        className="text-info text-gradient text-lg opacity-10"
                                        style={{ paddingTop: "20%" }}
                                        aria-hidden="true"
                                    >
                                        <FaClock />
                                    </div>
                                </div>
                                <h5 className="text-info font-weight-bolder mb-0 mt-3">
                                    {stats.visitorsToday}
                                </h5>
                                <span className="text-sm">Visitors Today</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-lg-3 col-md-6 col-12 mb-4">
                <div className="card">
                    <span className="mask bg-gradient-warning opacity-10 border-radius-lg"></span>
                    <div className="card-body p-3 position-relative">
                        <div className="row">
                            <div className="col-12 text-start">
                                <div className="icon icon-shape bg-white shadow text-center border-radius-2xl">
                                    <div
                                        className="text-warning text-gradient text-lg opacity-10"
                                        style={{ paddingTop: "20%" }}
                                        aria-hidden="true"
                                    >
                                        <FaChartLine />
                                    </div>
                                </div>
                                <h5 className="text-warning font-weight-bolder mb-0 mt-3">
                                    {stats.averageVisitsPerVisitor}
                                </h5>
                                <span className="text-sm">Avg Visits/User</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-12">
                <div className="card">
                    <div className="card-header pb-0">
                        <h6>Visitor Insights</h6>
                    </div>
                    <div className="card-body p-3">
                        <div className="row">
                            <div className="col-md-4 mb-3">
                                <div className="d-flex align-items-center">
                                    <div className="icon icon-shape bg-gradient-dark shadow text-center border-radius-md me-3">
                                        <i className="ni ni-calendar-grid-58 text-white opacity-10"></i>
                                    </div>
                                    <div>
                                        <p className="text-sm mb-0 text-capitalize font-weight-bold">This Week</p>
                                        <h5 className="font-weight-bolder mb-0">{stats.visitorsThisWeek}</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 mb-3">
                                <div className="d-flex align-items-center">
                                    <div className="icon icon-shape bg-gradient-dark shadow text-center border-radius-md me-3">
                                        <i className="ni ni-calendar-grid-58 text-white opacity-10"></i>
                                    </div>
                                    <div>
                                        <p className="text-sm mb-0 text-capitalize font-weight-bold">This Month</p>
                                        <h5 className="font-weight-bolder mb-0">{stats.visitorsThisMonth}</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 mb-3">
                                <div className="d-flex align-items-center">
                                    <div className="icon icon-shape bg-gradient-dark shadow text-center border-radius-md me-3">
                                        <i className="ni ni-money-coins text-white opacity-10"></i>
                                    </div>
                                    <div>
                                        <p className="text-sm mb-0 text-capitalize font-weight-bold">Engagement Rate</p>
                                        <h5 className="font-weight-bolder mb-0">
                                            {stats.totalUniqueVisitors > 0
                                                ? ((stats.visitorsToday / stats.totalUniqueVisitors * 100).toFixed(1))
                                                : 0}%
                                        </h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
