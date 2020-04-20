/**
 * Parses the first 4 bytes of the string (MongoDB ObjectID).
 * @param {string} objID ObjectID
 * @returns {Date}
 */
const timeParser = (objID) => new Date(Number.parseInt(objID.substring(0, 8), 16) * 1000);

export default timeParser;
