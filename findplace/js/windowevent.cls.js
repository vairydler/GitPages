class MyClass {
  constructor() {

  }

  load() {
    document.getElementById("gas").src = "https://script.google.com/macros/s/AKfycbx9KZxCEW-377BhTtqFjYgeHXzYEApE4Wrrwu-x51aYSbH9vIBLAVHxNSwLtDDkUNxv/exec" + new URL(window.location.href).search
  }
}

