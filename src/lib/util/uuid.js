const uuid = () => {
  const cryptoObj = window.crypto || window.msCrypto; // For browser compatibility
  const bytes = new Uint8Array(16);
  cryptoObj.getRandomValues(bytes);
  bytes[6] = (bytes[6] & 0x0f) | 0x40; // set version to 4
  bytes[8] = (bytes[8] & 0x3f) | 0x80;

  let uuid = "";
  for (let i = 0; i < bytes.length; i++) {
    uuid += bytes[i].toString(16).padStart(2, "0");
    if (i === 3 || i === 5 || i === 7 || i === 9) {
      uuid += "-";
    }
  }

  return uuid;
};

export default uuid
