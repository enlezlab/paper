
const isMod = (n) => {
  switch (true) {
    case (n === 17):
      return true;
    default:
      return false;
  };
};

const isTab = (n) => {
  return n === 9;
};


const Press = (conf) => {
  const q = conf.query;
  const c = conf.callback;

  if (q === undefined || '') {
    return;
  }

  if (c === undefined) {
    return;
  }

  const paper = document.querySelectorAll('.paper')[0];

  let mod;

  paper.addEventListener('keydown', function () {
    const code = event.keyCode;
    const k = event.key;

    console.log(code);

    if (isMod(code)) {
      event.preventDefault();
      mod = true;
    }

    if (isTab(code)) {
      event.preventDefault();
      console.log('insert TAB');
    }

    //TODO: need to make a keycode map
    if (mod && code === 83) {
      event.preventDefault();
      console.log('combo key');
      c();
      return;
    }

  }, false);


  c();
};

export default {
  Press
}
