
/*
 * piq store => state management
 *
 * */

const db = new PouchDB('AMIIONBS');

const timestamp = () => {
  const currentDate = new Date();
  const timestamp = currentDate.getTime();
  return timestamp;
};

const id = () => {
  return btoa(timestamp());
};

const get = async (d) => {
  console.log('get...');

  let r;

  try {
    const res = await db.allDocs({
      include_docs: true,
      attachments: true
    });

    r = res;
  } catch (err) {
    console.log(err);
  }

  return r;
};

const set = async (d) => {

  const entry = {
    _id: id(),
    timestamp: timestamp(),
    data: d
  };

  let r;

  try {
    const data = await db.put(entry, (err, res) => {
      r = {
        status: 'success',
        response: res
      };
    });

  } catch(err) {
    r = {
      status: 'error',
      response: err.message
    };
  }

  console.log('end of write entry');

  return r;
};

const update = async (d) => {
  console.log('put...');
};

const remove = async (d) => {
  console.log('remove...'+d);

  let r;

  try {
    const data = await db.get(d);
    r = await db.remove(data);
  } catch (err) {
    console.log(err);
  }

  return r;

};


export default {
  get,
  set,
  update,
  remove
};
