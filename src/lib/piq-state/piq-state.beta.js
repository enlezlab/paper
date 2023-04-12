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

    //TODO: need to work out how to do the render
    console.log(obj)
    console.log('trigger render')
    const listNode = document.querySelectorAll(`[piq-bind=${obj.node}]`);

    console.log(obj.node);
    console.log(listNode);



  };

};

