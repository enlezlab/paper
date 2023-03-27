import piq from '/lib/piq/dist/piq.dist.js';
import LabelStatus from '/component/partial/label-status.js';

class PanelStatus extends piq {
  name() {
    return 'panel-status';
  };

  style() {
    return `
      ${this.name()} {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        background: #111;
        border-radius: 5px;
        padding: 5px 2.5px;
        transition: .3s ease;
      }

    `;
  };

  template() {
    return `
      <label-status
        name="word count"
        value="560"
      >
      </label-status>

      <label-status
        name="read time"
        value="2m6s"
      >
      </label-status>
    `;
  }
};

customElements.define('panel-status', PanelStatus);

export default PanelStatus;
