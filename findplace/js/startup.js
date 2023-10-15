(function() {
  window.addEventListener('load', function() {
    let event = new MyClass();
    event.load();

    /* classのメソッドを取得するにはコレ */
    Object.getOwnPropertyNames(event.__proto__).forEach((e, i, a) => {
      window.addEventListener(e, event[e]);
      console.log(event[e]);
    });
  });
})();