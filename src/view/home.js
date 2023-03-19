import TypeWriter from '/component/type-writer.js';

export default (params) => {

  return `
    <style>
      .splash {
        width: 100%;
        height: 100%;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }

      .text {
        font-weight: bold;
        margin: 10px;
      }

    </style>
    <type-writer></type-writer>
  `;
}
