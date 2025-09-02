//Cotação de moedas do dia (valores fictícios/hipotéticos)
const USA = 5.46
const EUR = 6.37
const GBP = 7.31

//Obtendo os elementos do formilário
const form = document.querySelector("form")
const amount = document.getElementById("amount")
const currency = document.getElementById("currency")
const footer = document.querySelector("main footer")
const description = document.getElementById("description")

// Manipulando o input do amount para receber apenas números
amount.addEventListener("input", () => {
  const hasCharactersRegex = /\D+/g
  amount.value = amount.value.replace(hasCharactersRegex, "")
})

//Capturando o evento de submit do form
form.onsubmit = (event) => {
  event.preventDefault()

  switch (currency.value) {
    case "USA":
      convertCurrency(amount.value, USD, "US$")
      break
    case "EUR":
      convertCurrency(amount.value, EUR, "€")
      break
    case "GBP":
      convertCurrency(amount.value, GBP, "£")
      break
  }
}

//Função para converter a moeda
function convertCurrency(amount, price, symbol) {
  try {
    description.textContent = `${symbol} 1 = ${price}`

    //Aplicando a classe e exibe o footer
    
    
    footer.classList.add("show-result")


  } catch (error) {
    //Removendo a classe do footer
    footer.classList.remove("show-result")
    console.log(error)
    alert("Ocorreu um erro ao converter a moeda. Tente novamente mais tarde.")
  }
}