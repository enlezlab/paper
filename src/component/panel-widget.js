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
        border: 1px solid #333;
        padding: 5px;
        transition: .3s ease;
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
          Widget
        </span>
        <icon-chevron></icon-chevron>
      </div>
    `;
  };

  template() {
    return `
      ${this.head()}
    `;
  }
};

customElements.define('panel-widget', PanelWidget);

export default PanelWidget;
