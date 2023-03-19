
import piq from '/lib/piq/dist/piq.dist.js';

class iconMore extends piq {
  name() {
    return 'icon-more';
  }

  style() {
    return `
      ${this.name()} {
        display: flex;
        justify-content: center;
        align-items: center;
      }
    `;
  };

  template() {
    return `
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="1"></circle><circle cx="12" cy="5" r="1"></circle><circle cx="12" cy="19" r="1"></circle></svg>
    `;
  }
};

customElements.define('icon-more', iconMore);

export default iconMore;
