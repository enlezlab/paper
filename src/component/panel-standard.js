import piq from '/lib/piq/dist/piq.dist.js';
import InputStandard from '/component/partial/input-standard.js';
import SelectStandard from '/component/partial/select-standard.js';
import ButtonStandard from '/component/partial/button-standard.js';
import IconChevron from '/component/icon/icon-chevron.js';
import io from '/lib/util/io.js';

class PanelStandard extends piq {
  name() {
    return 'panel-standard';
  };

  style() {
    return `
      ${this.name()} {
        overflow-y: auto;
        background: #111;
        border-radius: 5px;
        padding: 5px;
        transition: .3s ease;
        border: 1px solid #333;
        font-family: arial;
        box-sizing: border-box;
      }

      .head {
        font-weight: bold;
        font-size: 12px;
        color: #999;
        text-transform: uppercase;
        height: 100%;
        display: grid;
        grid-template-columns: 1fr 30px;
        align-items: center;
        box-sizing: border-box;
        margin-bottom: 0;
        cursor: pointer;
      }

      .head--active {
        margin-bottom: 1rem;
      }

      .head icon-chevron {
        cursor: pointer;
        height: 18px;
      }

      .head.head--active icon-chevron {
        transform: rotate(180deg);
      }

      .metadata {
        display: none;
      }

      .metadata--active {
        display: block;
      }

      .metadata > *:not(:last-child) {
        margin-bottom: 1rem;
      }

      .action {
        display: grid;
        grid-gap: 20px;
        grid-template-columns: repeat(2, 1fr);
      }

    `;
  };

  head() {
    return `
      <div class="head">
        <span>
          Document Info
        </span>
        <icon-chevron></icon-chevron>
      </div>
    `;
  };

  titleInput() {
    return `
      <input-standard
        type="text"
        name="title"
      >
      </input-standard>
    `;
  };

  dateInput() {
    return `
      <input-standard
        type="date"
        name="date"
      >
      </input-standard>
    `;
  };

  tagsInput() {
    return `
      <input-standard
        type="text"
        name="tags"
      >
      </input-standard>
    `;
  };

  saveToFileButton() {
    return `
      <button-standard
        type="save"
        name="save to file"
      >
      </button-standard>
    `;
  };

  openFileButton() {
    return `
      <button-standard
        type="open"
        name="open file"
      >
      </button-standard>
    `;
  };

  categorySelect() {
    return `
      <select-standard
        name="category"
        options='[
          {
            "name": "random 1",
            "value": "00"
          },
          {
            "name": "random 2",
            "value": "01"
          },
          {
            "name": "random 3",
            "value": "02"
          }
        ]'
      >
      </select-standard>
    `;
  };

  toggle() {
    const head = this.querySelectorAll('.head')[0];
    const metadata = this.querySelectorAll('.metadata')[0];
    head.addEventListener('click', function () {
      this.classList.toggle('head--active');
      metadata.classList.toggle('metadata--active');
    }, false);

  };

  saveToFile() {
    const btn = this.querySelectorAll('button-standard[type="save"]')[0];
    btn.addEventListener('click', function () {
      console.log('saving to file...');
      io.SaveToFile('md', {
        fileName: state.get('title'),
        content: state.get('content')
      });
    }, false);
  };

  template() {

    return `
      ${this.head()}
      <div class="metadata">
        ${this.titleInput()}
        ${this.dateInput()}
        ${this.tagsInput()}

        <div class="action">
          ${this.openFileButton()}
          ${this.saveToFileButton()}
        </div>
      </div>

    `;
  };

  connected() {
    this.toggle();
    this.saveToFile();
  };

};

customElements.define('panel-standard', PanelStandard);

export default PanelStandard;
