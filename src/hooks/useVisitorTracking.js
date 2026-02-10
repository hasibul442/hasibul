import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { trackVisitor } from '../utils/helpers';

/**
 * Custom hook to track visitor page views
 * Automatically tracks page changes in React Router
 */
export const useVisitorTracking = () => {
    const location = useLocation();

    useEffect(() => {
        // Track visitor on page change
        const page = location.pathname;
        trackVisitor(page);
    }, [location.pathname]);
};

export default useVisitorTracking;
