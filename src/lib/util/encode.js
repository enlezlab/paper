/*
 * @param s {string}
 * @returns {string}
 * */
export default (s) => {
  const encodedURL = encodeURIComponent(s);
  const token = btoa(encodedURL)
  return token;
};
