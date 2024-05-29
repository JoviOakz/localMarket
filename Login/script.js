var modal = document.getElementById("myModal");
var span = document.getElementsByClassName("close")[0];

span.onclick = function () {
  modal.style.display = "none";
}

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

function login() {
  var nome = $("#nome").val();
  var senha = $("#senha").val();

  if (nome && senha && nome === "admin" && senha === "admin") {
    const user = {
      name: nome,
      dataEntrada: new Date(),
      id: Math.floor(Math.random() * 100000),
    };

    localStorage.setItem("usuario", JSON.stringify(user));

    window.location.href = "../Loja/loja.html";
  } else {
    if (nome && senha && nome != "admin" && senha === "admin") {
      modal.style.display = "block";
    } else if (nome && senha && nome === "admin" && senha != "admin") {
      modal.style.display = "block";
    } else if (nome && senha && nome != "admin" && senha != "admin") {
      modal.style.display = "block";
    }
  }
}

function showPassword() {
  if (document.getElementById("cbx2").checked == true) {
    document.getElementById("senha").type = 'text';
  } else {
    document.getElementById("senha").type = 'password'
  }
}