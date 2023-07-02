
/*
 * @param s {string} String value of the YouTube URL
 * @returns {string} Return string value of the YouTube ID
 * */
const ytID = (s) => {
  const regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
  const match = s.match(regExp);
  return (match&&match[7].length==11)? match[7] : false;
};

export default {
  ytID
};
