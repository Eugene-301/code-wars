String.prototype.digit = function () {
  if (
    this.length === 0 ||
    this.length > 1 ||
    this.replaceAll(" ", "").length === 0
  )
    return false;
  if (this[0] * 10 < 100) return true;
  return false;
};
