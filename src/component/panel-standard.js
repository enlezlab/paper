import piq from '/lib/piq/dist/piq.dist.js';
import InputStandard from '/component/partial/input-standard.js';
import SelectStandard from '/component/partial/select-standard.js';
import IconChevron from '/component/icon/icon-chevron.js';

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

      ${this.name()} > *:not(:last-child) {
        margin-bottom: 1rem;
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
      }

      .head icon-chevron {
        cursor: pointer;
        height: 18px;
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

  template() {

    return `
      ${this.head()}
      ${this.titleInput()}
      ${this.dateInput()}
      ${this.tagsInput()}
    `;
  };

};

customElements.define('panel-standard', PanelStandard);

export default PanelStandard;
