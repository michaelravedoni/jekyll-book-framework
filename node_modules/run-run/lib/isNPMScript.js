module.exports = function isNPMScript(str) {
  return /npm +(run)? *([\w\-]+)/.test(str);
};