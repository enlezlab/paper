import piq from '/lib/piq/dist/piq.dist.js';

class SelectStandard extends piq {
  name() {
    return 'select-standard';
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

      ${this.name()} select {
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


      ${this.name()} select:focus + label {
        background: orange;
        color: #000;
      }

    `;
  };

  options() {

    const options = JSON.parse(this.props('options'));
    let response = '';
    options.forEach((i) => {
      const item = `
        <option value="${i.value}">
          ${i.name}
        </option>
      `;
      response += item;
    });

    return response;
  };

  template() {
    return `
      <select>
        ${this.options()}
      </select>
      <label for="">
        ${this.props('name')}
      </label>
    `;
  }
};

customElements.define('select-standard', SelectStandard);

export default SelectStandard;
