import piq from '/lib/piq/dist/piq.dist.js';
import RouterView from '/component/router-view.js';
import PanelStandard from '/component/panel-standard.js';
import PanelWidget from '/component/panel-widget.js';
import PanelStatus from '/component/panel-status.js';


class PiqApp extends piq {
  name() {
    return 'piq-app';
  };

  style() {
    return `
      html, body {
        padding: 0;
        margin: 0;
        background: #000;
        color: #fff;
      }

      ${this.name()} {
        display: block;
        width: 100vw;
        height: 100vh;
        box-sizing: border-box;
        display: grid;
        grid-gap: 5px;
        grid-template-columns: minmax(200px, 300px) auto 300px;
        grid-template-rows: 1fr auto;
        position: fixed;
        width: 100%;
        height: 100%;
        padding: 5px;
      }

      ${this.name()} panel-standard {
        grid-column: 1 / 2;
        grid-row: 1 / 3;

        align-self: end;
      }

      ${this.name()} panel-widget {
        grid-column: 3 / 4;
        grid-row: 1 / 3;

        align-self: end;
      }

      ${this.name()} panel-status {
        grid-column: 2 / 3;
        grid-row: 2 / 3;
      }

      ${this.name()} router-view {
        grid-column: 2 / 3;
        grid-row: 1 / 2;
      }
    `;
  };

  template() {
    return `
      <panel-standard></panel-standard>
      <panel-widget></panel-widget>
      <panel-status></panel-status>
      <router-view></router-view>
    `;
  };

  connected() {

  };


};

customElements.define('piq-app', PiqApp);
