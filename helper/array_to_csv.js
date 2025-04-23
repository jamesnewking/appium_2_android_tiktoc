/**
 * Converts a JSON array to a CSV string.
 * @param {Array} jsonArray - The JSON array to convert.
 * @param {Array} [headers] - Optional array of headers. If not provided, the keys of the first object in the array will be used.
 * @returns {string} The CSV string.
 */

const jsonArrayToCsv = (jsonArray, headers) => {
    if (!jsonArray || jsonArray.length === 0) {
        return '';
    }

    const keys = headers || Object.keys(jsonArray[0]);

    const csvHeader = keys.join(',');

    const csvRows = jsonArray.map(obj => {
        return keys.map(key => {
            let cellValue = obj[key] === null || obj[key] === undefined ? '' : obj[key];
            cellValue = typeof cellValue === 'string' ? `"${cellValue.replace(/"/g, '""')}"` : cellValue;
            return cellValue;
        }).join(',');
    });

    return [csvHeader, ...csvRows].join('\n');
};

module.exports = jsonArrayToCsv;


