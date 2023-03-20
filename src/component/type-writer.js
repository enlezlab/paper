import piq from '/lib/piq/dist/piq.dist.js';

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
        font-size: 2rem;
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

  save() {
    console.log('document saved!');
  };

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

    this.autoSaveInterval({
      node: paper,
      threshold: 10000,
      focusInCallback: () => {
        console.log('run auto save interval');
      },
      focusOutCallback: () => {
        console.log('save document and clear auto save interval');
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
