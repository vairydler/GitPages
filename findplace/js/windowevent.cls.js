class MyClass {
  constructor() {

  }

  load() {
    /* 上位のURLパラメータを渡す */
    document.getElementById("gas").src = "https://script.google.com/macros/s/AKfycbzIxq5lMfwa-Quw9X4hft1q1AvrSXwSEDB46TBPLmYy_GjEW2Nm6YGr827DACvUAGEs/exec" + new URL(window.location.href).search
  }
}

