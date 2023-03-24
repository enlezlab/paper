
const Focus = (conf) => {
  const n = conf.node;
  const th = conf.threshold;
  const focusIn = conf.focusInCallback;
  const focusOut = conf.focusOutCallback;

  let interval;

  n.addEventListener('focusin', function () {
    // initiate debounce interval for autosave
    interval = setInterval(() => {
      focusIn();
    }, th)
  }, false);

  n.addEventListener('focusout', function () {
    // save document and clear autosave interval
    clearInterval(interval)
    focusOut();

  }, false);
};


export default {
  Focus
};
