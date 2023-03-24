import type from '/model/type.js';

const Save = async (kind, props) => {
  const doc = type.Document(props);
  console.log(doc);

  return 'todo: response from data write'
};


export default {
  Save
};
