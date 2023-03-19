/*
 * @param s {string}
 * @returns {string}
 * */
export default (s) => {
  const encodedURL = atob(s);
  const decodedURL = decodeURIComponent(encodedURL);
  return decodedURL;
};
