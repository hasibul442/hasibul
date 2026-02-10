'use client';

import VisitorList from '@/Components/VisitorList';
import VisitorStats from '@/Components/VisitorStats';

export default function VisitorsPage() {
    return (
        <>
            <div className="row mb-4">
                <div className="col-12">
                    <h4>Visitor Analytics</h4>
                    <p className="text-sm">Track and analyze your website visitors</p>
                </div>
            </div>

            <VisitorStats />

            <div className="row mt-4">
                <div className="col-12">
                    <VisitorList />
                </div>
            </div>
        </>
    );
}
