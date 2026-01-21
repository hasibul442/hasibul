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
