import piq from '/lib/piq/dist/piq.dist.js';
import key from '/lib/util/key.js';
import io from '/lib/util/io.js';
import interval from '/lib/util/interval.js';
import text from '/lib/util/text.js';
import uuid from '/lib/util/uuid.js';

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

  uuid() {
    const res = uuid();
    return res;
  };

  content() {
    return {
      uuid: this.uuid(),
      slug: state.get('title'), // TODO: need a slugify ,method
      date: state.get('date'),
      categoryID: state.get('category'),
      tags: state.get('tags'),
      title: state.get('title'),
      content: this.innerText,
      wordCount: state.get('wc'),
      readTime: state.get('rt')
    };
  };

  async save() {
    const s = io.Save('document', this.content());
    console.log(await s); // wait for documnent save response
  };


  saveToFile() {
    io.SaveToFile('json', {
      fileName: 'need file name',
      content: JSON.stringify(this.content())
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

  async connected() {

    console.log(`
    Document init logic:
    if uuid exist:
      - [ ] get url segment that map to uuid
      - [ ] get docuemnt based on uuid from data store(db or some cloud store)
      - [ ] take the uuid document response to hydrate the document state
      - [ ] take state propagate the render sequence
    if uuid not exsit (new document)
      - [ ] assign uuid on save (when io.Save() function trigger)
      - [ ] save function then send the data payload to data store(db or some cloud store)
    `);


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

    paper.addEventListener('input', function () {
      const w = this.innerText;

      state.set({
        node: 'wc',
        value: text.WordCount(w)
      })

      state.set({
        node: 'rt',
        value: text.ReadTime(text.WordCount(w)).round
      })

    }, false);


  };


};


customElements.define('type-writer', TypeWriter);

export default TypeWriter;
