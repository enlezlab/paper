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
        border: 1px solid #333;
        padding: 5px 2.5px;
        transition: .3s ease;
      }

    `;
  };

  wc() {
    const data = state.get('wc');
    if (data === undefined) {
      return 0;
    }
    return data;
  };

  rt() {
    const data = state.get('rt');
    if (data === undefined) {
      return 0;
    }
    return data;
  };

  template() {
    /* NOTE:
      * `piq-bind-wc="value"` is to bind value attribute to
      * state machine that has the key `wc`
      * when state machine update, it will trigger component re render
      * via attrbuteChangedCallback
      * */
    console.log(this.rt());
    return `
      <label-status
        name="word count"
        value="${this.wc()}"
        piq-bind-wc="value"
      >
      </label-status>

      <label-status
        name="read time"
        value="${this.rt()}"
        piq-bind-rt="value"
      >
      </label-status>
    `;
  }
};

customElements.define('panel-status', PanelStatus);

export default PanelStatus;
