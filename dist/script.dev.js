"use strict";

document.querySelector(".hamburguer").addEventListener("click", function () {
  return document.querySelector(".container").classList.toggle("show-menu");
});
document.querySelector("#qtde").addEventListener("change", atualizarPreco);
document.querySelector("#js").addEventListener("change", atualizarPreco);
document.querySelector("#layout-sim").addEventListener("change", atualizarPreco);
document.querySelector("#layout-nao").addEventListener("change", atualizarPreco);
document.querySelector("#prazo").addEventListener("change", function () {
  var prazo = document.querySelector("#prazo").value;
  document.querySelector("label[for=prazo]").innerHTML = "Prazo: ".concat(prazo, " semana(s)");
  atualizarPreco();
});

function atualizarPreco() {
  var qtde = document.querySelector("#qtde").value;
  var temJS = document.querySelector("#js").checked;
  var incluiLayout = document.querySelector("#layout-sim").checked;
  var prazo = document.querySelector("#prazo").value;
  var preco = qtde * 100;
  if (temJS) preco *= 1.1;
  if (incluiLayout) preco += 500;
  var taxaDeUrgencia = 1 - prazo * 0.1;
  preco *= 1 + taxaDeUrgencia;
  document.querySelector("#preco").innerHTML = "R$ ".concat(preco.toFixed(2));
}