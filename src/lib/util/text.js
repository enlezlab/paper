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
