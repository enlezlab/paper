import type from '/model/type.js';

// Save to store
const Save = async (kind, props) => {
  const doc = type.Document(props);
  console.log(doc);

  return 'todo: response from data write'
};

/*
 * @function
 * @name SaveToFile
 * @param {string} ext File extention type
 * @param {object} props Object contains fileName and content
 * @param {string} props.fileName String value of the file name
 * @param {string} props.content String value of the file content
 * */
const SaveToFile = async (ext, props) => {
  const f = props.fileName;
  const c = props.content;
  const t = 'text/plain';
  const a = document.createElement("a");
  const file = new Blob([c], {type: t});
  a.href = URL.createObjectURL(file);
  a.download = `${f}.${ext}`;
  a.click();
};


export default {
  Save,
  SaveToFile
};
