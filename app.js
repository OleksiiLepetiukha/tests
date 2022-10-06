let timeoutResult = null;
const timeoutCall = () => setTimeout(() => (timeoutResult = "finished"), 1);

module.exports = timeoutCall;