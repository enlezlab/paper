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

const ReadTime = (s) => {
//TODO: take string as input, return string as read time result
};

export default {
  WordCount,
  ReadTime,
}
