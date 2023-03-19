import piq from '/lib/piq/dist/piq.dist.js';
import r from '/lib/piq-route/piq-route.beta.js';
import routes from '/var/routes.js';

class RouterView extends piq {
  name() {
    return 'router-view';
  };

  style() {
    return `
      ${this.name()} {
        display: block;
        height: 100%;
        overflow: auto;
        box-sizing: border-box;
      }

      ${this.name()} .inner {
        display: block;
        height: 100%;
      }
    `;
  };

  async view() {
    const route = r.route(routes());
    const params = route.params;
    const viewFile = route.view;
    const view = await import(`/view/${viewFile}`);

    if (view.default === undefined) {
      return '';
    }

    return view.default(params);
  };

  async template() {
    return `
    <div class="inner">
      ${await this.view()}
    </div>
    `;
  };

  connected() {
    const _this = this;
    window.addEventListener('hashchange', async function () {
      _this.innerHTML = `
        <div class="inner">
          ${await _this.view()}
        </div>
      `;

    }, false);
  };
};

customElements.define('router-view', RouterView);

export default RouterView
