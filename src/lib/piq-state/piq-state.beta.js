//TODO: working on state proxy

class piqState {


  constructor() {

    this.set = (obj) => {
      this.proxy.store[obj.node] = obj.value;
      window.piqState = this.proxy;
    }

    this.get = (node) => {

      if (node === undefined) {
        return this.proxy.store;
      }

      return this.proxy.store[node]

      // return this.proxy.store.filter((i) => i.node === node)
    }
  };

  proxy = {
    scope: '',
    store: {}
  }

};

