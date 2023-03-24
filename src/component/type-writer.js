import piq from '/lib/piq/dist/piq.dist.js';
import key from '/lib/util/key.js';

class TypeWriter extends piq {
  name() {
    return 'type-writer';
  };

  style() {
    return `
      ${this.name()} {
        width: 100%;
        height: 100%;
        display: block;
        box-sizing: border-box;
        max-width: 768px;
        margin: 0 auto;
        padding: 2rem;
      }

      ${this.name()} .paper {
        width: 100%;
        height: 100%;
        font-size: 1.2rem;
        caret-color: orange;
        box-sizing: border-box;
        word-wrap: break-word;
        overflow-x: hidden;
        overflow-y: auto;
      }

      ${this.name()} .paper ::selection {
        background: orange;
      }

      ${this.name()} .paper:focus {
        outline: none;
      }
    `;
  };

  //TODO: save should go to its own module
  save() {
    console.log(this.innerText);
    console.log('document saved!');
  };

  //TODO: file save interval should go to its own module
  //should also rename it for `focusInterval`
  autoSaveInterval(conf) {
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

  connected() {
    const paper = this.querySelectorAll('.paper')[0];

    const _this = this;

    this.autoSaveInterval({
      node: paper,
      threshold: 10000,
      focusInCallback: () => {
        console.log('run auto save interval');
        _this.save();
      },
      focusOutCallback: () => {
        console.log('save document and clear auto save interval');
        _this.save();
      }
    });

    //ctrl+s
    //TODO: need to refine key.js (take literal key name and as token to get the corresponding ket code)
    key.Press({
      query: 83,
      callback: () => {
        _this.save();
      }
    });

  };

  template() {
    return `
      <div class="paper"
        contenteditable="true"
        spellcheck="false">
      </div>
    `;
  };


};


customElements.define('type-writer', TypeWriter);

export default TypeWriter;
