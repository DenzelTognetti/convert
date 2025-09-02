//Obtendo os elementos do formilário
const form = document.querySelector("form")
const amount = document.getElementById("amount")
const currency = document.getElementById("currency")

// Manipulando o input do amount para receber apenas números
amount.addEventListener("input", () => {
  const hasCharactersRegex = /\D+/g
  amount.value = amount.value.replace(hasCharactersRegex, "")
})

//Capturando o evento de submit do form
form.onsubmit = (event) => {
  event.preventDefault()
}