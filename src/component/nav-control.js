import piq from '/lib/piq/dist/piq.dist.js'
import iconCollection from '/component/icon/icon-collection.js';
import iconSearch from '/component/icon/icon-search.js';
import iconAddNew from '/component/icon/icon-add-new.js';
import iconSettings from '/component/icon/icon-settings.js';

class NavControl extends piq {
  name() {
    return 'nav-control';
  };

  style() {
    return `
      ${this.name()} {
        box-sizing: border-box;
        padding: 5px;
        height: 100%;
        grid-column: 1 / 2;
        grid-row: 2 / 3;
        border: 1px solid #111;
        position: relative;
        z-index: 9999;
        background: #000000;
        border-radius: 5px;
      }


      ${this.name()} nav {
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        grid-gap: 10px;
      }

      ${this.name()} nav a {
        border: 1px solid #111;
        border-radius: 4px;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 5px;
        transition: .2s ease;
        width: 30px;
        height: 30px;
        border-radius: 50%;
        margin: 0 auto;
      }

      ${this.name()} nav a:active,
      ${this.name()} nav a:focus,
      ${this.name()} nav a:focus-visible,
      ${this.name()} nav a:hover {
        outline: none;
        border: 1px solid skyblue;
      }

      @media (orientation: landscape) {

        ${this.name()} {
          grid-row: 1 / 2;
          grid-column: 1 / 2;
        }

        ${this.name()} nav {
          display: grid;
          grid-template-columns: repeat(1, 1fr);
          grid-template-rows: repeat(5, 1fr);
        }

      }
    `;
  };

  template() {
    return `
        <nav>
          <a href="/#/">
            <logo-amiionbs></logo-amiionbs>
          </a>
          <a href="#/search">
            <icon-search></icon-search>
          </a>
          <a href="#/add-new">
            <icon-add-new></icon-add-new>
          </a>
          <a href="#/collection">
          <icon-collection></icon-collection>
          </a>
          <a href="#/settings">
            <icon-settings></icon-settings>
          </a>
        </nav>
    `;
  }
};


customElements.define('nav-control', NavControl);

export default NavControl;
