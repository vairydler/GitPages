class MyClass {
  constructor() {

  }

  load() {
    /* 上位のURLパラメータを渡す */
    document.getElementById("gas").src = "https://script.google.com/macros/s/AKfycbyqlztJJ5UC4RB0VCelvtZOZpRhqu9vyN85l_P71_kPpGMuVMHi00pBiJOeyzLArOWf/exec" + new URL(window.location.href).search
  }
}

