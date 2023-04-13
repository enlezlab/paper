//TODO: working on state proxy

class piqState {


  constructor() {

    this.set = (obj) => {
      this.proxy.store[obj.node] = obj.value;
      this.render(obj);
      window.piqState = this.proxy;
    }

    this.get = (node) => {

      if (node === undefined) {
        return this.proxy.store;
      }

      return this.proxy.store[node]
    }
  };

  proxy = {
    scope: '',
    store: {}
  }

  render(obj) {
    const listNode = document.querySelectorAll(`[piq-bind-${obj.node}`);

    listNode.forEach((i) => {
      const attr = i.getAttribute(`piq-bind-${obj.node}`);
      i.setAttribute(attr, obj.value)
    });
  };

};

