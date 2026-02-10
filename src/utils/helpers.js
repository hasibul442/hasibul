/**
 * Calculate years, months, and days of experience from a start date
 * @param {string} startDateString - Start date in format 'YYYY-MM-DD'
 * @returns {Object} - Object containing years, months, and days
 */
export const calculateExperience = (startDateString) => {
    const startDate = new Date(startDateString);
    const currentDate = new Date();

    let years = currentDate.getFullYear() - startDate.getFullYear();
    let months = currentDate.getMonth() - startDate.getMonth();
    let days = currentDate.getDate() - startDate.getDate();

    if (days < 0) {
        months--;
        const prevMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 0);
        days += prevMonth.getDate();
    }

    if (months < 0) {
        years--;
        months += 12;
    }

    return { years, months, days };
};

/**
 * Format experience object to string
 * @param {Object} experience - Object containing years, months, and days
 * @returns {string} - Formatted experience string
 */
export const formatExperience = (experience) => {
    return `${experience.years} years, ${experience.months} months, ${experience.days} days`;
};

/**
 * Generate a unique visitor ID
 * @returns {string} - Unique visitor ID
 */
export const generateVisitorId = () => {
    return `${Math.random().toString(36).substr(2, 9)}`;
};

/**
 * Get or create visitor ID from localStorage
 * @returns {string} - Visitor ID
 */
export const getVisitorId = () => {
    const VISITOR_ID_KEY = 'portfolio_visitor_id';
    let visitorId = localStorage.getItem(VISITOR_ID_KEY);

    if (!visitorId) {
        visitorId = generateVisitorId();
        localStorage.setItem(VISITOR_ID_KEY, visitorId);
    }

    return visitorId;
};

/**
 * Track visitor by sending data to API
 * @param {string} page - Current page/route
 * @param {string} referrer - Referrer URL
 * @returns {Promise} - API response
 */
export const trackVisitor = async (page, referrer = document.referrer) => {
    try {
        const visitorId = getVisitorId();
        const apiUrl = 'https://adminhasibulhasan.vercel.app/api/v1/visitor'; // Update with your actual API base URL

        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                visitorId,
                page,
                referrer,
            }),
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error tracking visitor:', error);
        // Fail silently to not disrupt user experience
        return null;
    }
};
