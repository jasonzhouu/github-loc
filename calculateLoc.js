const calculateLoc = (stat) => stat.reduce((total, changes) => total + changes[1] + changes[2], 0);

module.exports = calculateLoc;
