/*
 * @function
 * @name WordCount
 * @param {string} s String value of the text input
 * @return {object}
 * @description
 * Take text input and return an object contains value of calculated
 * word count in both float and integer.
 * */
const WordCount = (s) => {
  const w = s.replace(/\n/g, ' ' );
  const t = w.trim();
  const rawArray = t.split(' ');

  const res = rawArray.filter((i) => {
    return i !== '';
  });

  const wordCount = res.length;

  return wordCount;
};

const ReadTime = (wc) => {
  const wcFloat =  parseFloat(wc);
  const response = {
    float: wcFloat / 200,
    round: Math.round(wcFloat / 200)
  };

  return response;
};

export default {
  WordCount,
  ReadTime,
}
