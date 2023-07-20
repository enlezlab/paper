import piq from '/lib/piq/dist/piq.dist.js';

class ButtonStandard extends piq {

  name() {
    return 'button-standard';
  };

  style() {
    return `
      button {
        border: 1px solid #333;
        background: #222;
        color: #fff;
        padding: 5px 10px;
        background: #333;
        cursor: pointer;
        border-radius: 5px;
        text-transform: uppercase;
        outline: none;
        font-size: 12px;
        font-weight: bold;
        box-sizing: border-box;
        width: 100%;
      }

      button:focus,
      button:hover {
        background: #222;
        border: 1px solid orange;
      }

      button:active {
        background: orange;
        color: #000;
      }
    `;
  }

  template() {
    return `
      <button>
        ${this.props('name')}
      </button>
    `;
  };
};

customElements.define('button-standard', ButtonStandard);

export default ButtonStandard;
