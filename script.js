const buttonss = document.getElementsByClassName("keys");
const input = document.getElementById("result");
const lastResult = document.getElementById("lastResult");
for (let i = 0; i < buttonss.length; i++) {
  buttonss[i].addEventListener("click", buttons);
}

function buttons(event) {
  if (event.target.dataset.valor === "=") {
    let result = eval(input.value);
    input.value = result;
    if (
      JSON.stringify(result).length > 9 &&
      JSON.stringify(result).includes(".")
    ) {
      lastResult.innerHTML = result.toFixed(4);
    } else {
      lastResult.innerHTML = result;
    }
  } else {
    input.value += event.target.dataset.valor;
  }
}

const buttonC = document.getElementById("c");
buttonC.addEventListener("click", C);

function C() {
  input.value = "";
}
