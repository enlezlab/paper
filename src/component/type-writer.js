import piq from '/lib/piq/dist/piq.dist.js';
import key from '/lib/util/key.js';
import io from '/lib/util/io.js';
import interval from '/lib/util/interval.js';

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
        overflow-x: hidden;
        overflow-y: auto;
      }

      ${this.name()} .paper {
        width: 100%;
        height: 100%;
        font-size: 1.2rem;
        caret-color: orange;
        box-sizing: border-box;
        word-wrap: break-word;
        max-width: 768px;
        margin: 0 auto;
        padding: 2rem 1rem;
      }

      ${this.name()} .paper:focus {
        outline: none;
      }
    `;
  };

  async save() {
    const s = io.Save('document', {
      uuid: '123',
      slug: 'qwerty-asdfgh',
      date: '2023-03-24',
      categoryID: '00',
      authorID: '00',
      tags: 'writing, publishing, open web',
      title: 'untitled',
      content: this.innerText,
    });

    console.log(await s);
  };

  async connected() {
    const paper = this.querySelectorAll('.paper')[0];
    const _this = this;

    interval.Focus({
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
