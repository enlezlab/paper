import piq from '/lib/piq/dist/piq.dist.js'

class PiqButton extends piq {
  name() {
    return 'piq-button';
  };

  style() {
    return `
      ${this.name()} {
      }

      ${this.name()} > * {
        width: 100%;
        padding: 5px 10px;
        cursor: pointer;
      }
    `;
  };

  button() {
    return `
      <button>
        ${this.innerHTML}
      </button>
    `;
  };

  buttonLink() {
    return `
      <a href="${this.props('link')}">
        ${this.innerHTML}
      </a>
    `;
  };

  hasLink() {
    if (this.props('link')) {
      return true;
    }

    return false;
  };

  buttonType() {
    if (this.hasLink()) {
      return this.buttonLink();
    }

    return this.button();
  };

  template() {
    return this.buttonType();
  };
};

customElements.define('piq-button', PiqButton);

export default PiqButton;
