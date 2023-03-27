import piq from '/lib/piq/dist/piq.dist.js';

class LabelStatus extends piq {
  name() {
    return 'label-status';
  };

  style() {
    return `
      ${this.name()} {
        font-family: arial;
        font-size: 12px;
        font-weight: bold;
        background: #222;
        padding: 2px 5px;
        margin-right: 2.5px;
        margin-left: 2.5px;
        border-radius: 2px;
        text-transform: uppercase;
      }
    `;
  };

  template() {
    return `
      ${this.props('name')}: ${this.props('value')}
    `;
  }
};

customElements.define('label-status', LabelStatus);

export default LabelStatus;
