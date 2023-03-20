import piq from '/lib/piq/dist/piq.dist.js';
import NavControl from '/component/nav-control.js';
import RouterView from '/component/router-view.js';


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
        grid-template-columns: 1fr;
        grid-template-rows: 1fr;
        position: fixed;
        width: 100%;
        height: 100%;
      }
    `;
  };

  template() {
    return `
      <router-view></router-view>
    `;
  };


};

customElements.define('piq-app', PiqApp);
