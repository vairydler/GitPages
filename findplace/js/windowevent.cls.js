class MyClass {
  constructor() {

  }

  load() {
    /* 上位のURLパラメータを渡す */
    document.getElementById("gas").src = "https://script.google.com/macros/s/AKfycbwL-ag3y2y7UeAfmRwmN_JG-rU7RylLzr656y-RPiasfpQN9T2h0y4iCZSAH6If21Ru/exec" + new URL(window.location.href).search
  }
}

