
import piq from '/lib/piq/dist/piq.dist.js';

class iconSearch extends piq {
  name() {
    return 'icon-search';
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
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-search"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
    `;
  }
};

customElements.define('icon-search', iconSearch);

export default iconSearch;
