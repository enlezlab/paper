import piq from '/lib/piq/dist/piq.dist.js';
import InputStandard from '/component/partial/input-standard.js';

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
      }

      ${this.name()} > *:not(:last-of-type) {
        margin-bottom: 1rem;
      }
    `;
  };

  template() {
    return `

      <input-standard
        type="text"
        name="title"
      >
      </input-standard>

      <input-standard
        type="date"
        name="date"
      >
      </input-standard>

      <input-standard
        type="text"
        name="tags"
      >
      </input-standard>

    `;
  }
};

customElements.define('panel-standard', PanelStandard);

export default PanelStandard;
