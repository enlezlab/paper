//TODO: Need to bring it to its own repo/project PiqRoute

/*
 * @param {void}
 * @returns {string}
 * @description Get hash value from URL
 * */
const hash = () => {
  const h = window.location.hash;
  const r = h.replace('#/', '');
  return r;
};

//TODO: get index of var in route path
const varIndex = (a) => {

  const sArray = (a.split('/'));
  let res = [];

  sArray.forEach((i, idx) => {
    if (!i.includes('{')) {
      return;
    }

    res.push({
      index: idx,
      name: i
    });
  })

  return res;
};

// check if is variale route
const isVarRoute = (r) => {
  if (!r.includes('{')) {
    return false;
  }

  return true;
};


// match url hash string position
// split the array, compare position, if is var in url hash string then skip it
// only compare fixed value in the array
// TODO: need to write a proper type doc and refactor the method (it looks meesy)
const routePosMatch = (r, vRef) => {
  let seqStr = '';
  const rArr = r.split('/');

  const seq = rArr.map((i) => {
    if (i.includes('{')) {
      return 1;
    }

    return 0;
  });

  const hArr = vRef;
  let seqMatch = []

  rArr.forEach((i, idx) => {
    if (seq[idx] === 1) {
      // console.log('skip: ' + i);
      return;
    }

    if (i === hArr[idx]) {
      seqMatch.push(true);
    } else {
      seqMatch.push(false);
    }

  });

  if (seqMatch.includes(false)) {
    return false
  }

  return true;
};

//NOTE: considering refactor route match with reduce,
//use accumulator as vRef and loop over r to compare current value
//and vRef in acumulator

const routeMatch = (r, vRef) => {
  const routes = r;
  const varRef = vRef;

  // default response object when no matching route
  let res = {
    status: 'error',
    message: 'No matching route.',
    route: ''
  }

  //loop through route object to find matching pattern
  routes.forEach((i) => {
    const varRoute = isVarRoute(i.slug);
    const posMatch = routePosMatch(i.slug, varRef);


    //early return if is not variable route
    if (!varRoute) {
      return;
    }

    //early return if varialble position is not matching
    if (!posMatch) {
      return
    }

    //construct params object based on var route mapping
    const vIdx = varIndex(i.slug)
    let params = {};

    vIdx.forEach((i) => {
      params[(i.name).replace('{', '').replace('}', '')] = (vRef[i.index]);
    });

    i.params = params

    res.status = 'ok';
    res.message = 'Route matched.';
    res.route = [i];
  });

  return res;
};

/*
 * @param {array{object{string}}} r - object array for route value in string
 * @returns {object}
 * @description Find matching route object
 * */
const route = (r) => {
  //TODO: error checking
  //- [ ] value duplicate check (slug / uid)
  if (typeof r !== 'object') {
    console.warn(`Method route() expect {object}, it got {${typeof r}} instead`);
    return;
  }

  const hashArray= hash().split('/');
  const route = r;
  const match = route.filter((i) => i.slug === hash());

  // check if match static route
  // if yes, return static route
  // if no static route match
  // then check variable route
  // if yes, return variable route
  // if no variable route match then return no matching route


  const isStaticRoute = () => {
    if (match.length === 1) {
      return true;
    }
    return false;
  };

  const isVarRoute = () => {
    if (routeMatch(route, hashArray).route.length === 1) {
      return true;
    }
    return false;
  };

  const isNonRoute = () => {
    const nonVarRoute = (routeMatch(route, hashArray).route.length === 0);
    const nonStaticRoute = (match.length === 0);
    if (nonStaticRoute && nonVarRoute) {
      return true;
    }
    return false
  };


  //TODO: need a function to standardize response format

  switch (true) {
    case (isVarRoute()):
      return routeMatch(route, hashArray).route[0];
    case (isStaticRoute()):
      return match[0];
    case (isNonRoute()):
      return {}
  }

};

export default {
  route
};

