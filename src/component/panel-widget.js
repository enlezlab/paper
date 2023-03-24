import piq from '/lib/piq/dist/piq.dist.js';

class PanelWidget extends piq {
  name() {
    return 'panel-widget';
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
      panel widget
    `;
  }
};

customElements.define('panel-widget', PanelWidget);

export default PanelWidget;
