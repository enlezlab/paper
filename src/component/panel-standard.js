import piq from '/lib/piq/dist/piq.dist.js';

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
        opacity: .5;
        transition: .3s ease;
      }

      ${this.name()}:hover {
        opacity: 1;
      }
    `;
  };

  template() {
    return `
      panel standard
    `;
  }
};

customElements.define('panel-standard', PanelStandard);

export default PanelStandard;
