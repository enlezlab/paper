import piq from '/lib/piq/dist/piq.dist.js';
import key from '/lib/util/key.js';
import io from '/lib/util/io.js';
import interval from '/lib/util/interval.js';
import text from '/lib/util/text.js';

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

    // just a test, rerender word count and read time need to happen via state management / proxy
    const wcStatus = document.querySelectorAll('label-status[name="word count"]')[0];
    const rtStatus = document.querySelectorAll('label-status[name="read time"]')[0];

    paper.addEventListener('input', function () {
      const w = this.innerText;
      console.log(`word count: ${text.WordCount(w)}`);
      // console.log(wcStatus);
      // wcStatus.setAttribute('value', text.WordCount(w));
      // rtStatus.setAttribute('value', text.ReadTime(text.WordCount(w)).round);

    state.set({
      node: 'wc',
      value: text.WordCount(w)
    })

    }, false);


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
