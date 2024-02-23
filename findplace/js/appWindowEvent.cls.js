class MyClass {
  constructor() {

  }

  load() {
    /* 上位のURLパラメータを渡す */
    document.getElementById("gas").src = gas + "?type=page&name=app";
  }
}

