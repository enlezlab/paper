import piq from '/lib/piq/dist/piq.dist.js';

class InputStandard extends piq {
  name() {
    return 'input-standard';
  };

  style() {
    return `
      ${this.name()} {
        font-family: arial;
        display: flex;
        flex-direction: column-reverse;
        align-items: center;
        text-transform: uppercase;
      }

      ${this.name()} > * {
        width: 100%;
      }

      ${this.name()} label {
        border-bottom: 1px solid #333;
        border-bottom: none;
        background: #222;
        color: #999;
        padding: .2rem;
        font-size: 12px;
        font-weight: bold;
        box-sizing: border-box;

        border-top-left-radius: 5px;
        border-top-right-radius: 5px;
      }

      ${this.name()} input {
        border: none;
        outline: none;
        background: #000;
        color: #e4e4e4;
        padding: .5rem;
        font-size: 14px;
        box-sizing: border-box;

        border-bottom-left-radius: 5px;
        border-bottom-right-radius: 5px;
      }


      ${this.name()} input:focus + label {
        background: orange;
        color: #000;
      }

    `;
  };

  template() {
    return `
      <input type="${this.props('type')}">
      <label for="">
        ${this.props('name')}
      </label>
    `;
  };

  connected() {
    const input = this.querySelectorAll('input')[0];
    const _this = this;
    input.addEventListener('input', function () {
      _this.setAttribute('value', this.value);
      state.set({
        node: _this.props('name'),
        value: this.value
      });

    }, false);
  };
};

customElements.define('input-standard', InputStandard);

export default InputStandard;
