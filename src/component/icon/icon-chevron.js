import piq from '/lib/piq/dist/piq.dist.js';

class iconChevron extends piq {
  name() {
    return 'icon-chevron';
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
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-up"><polyline points="18 15 12 9 6 15"></polyline></svg>

    `;
  }
};

customElements.define('icon-chevron', iconChevron);

export default iconChevron;
