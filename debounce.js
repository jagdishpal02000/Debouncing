let count = 0;

function debounce(fn, delay) {
  let timer;
  return function () {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(this, arguments);
    }, delay);
  };
}

function callAPI() {
  console.log("Calling API " + count++);
}

const doSomething = debounce(callAPI, 300);
