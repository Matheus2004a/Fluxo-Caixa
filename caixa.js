const form = document.querySelector("form")
form.addEventListener("submit", sendForm)

const family = {
    incomes: [],
    expenses: []
}

let output = document.querySelector(".output")

function sendForm(e) {
    e.preventDefault()
    let income = Number(document.querySelector("#income").value)
    let expense = Number(document.querySelector("#expense").value)

    let isFieldsEmpty = income === "" && expense === ""
    let oneFieldIsEmpty = income === "" || expense === ""
    let valuesIsZero = income < 0 && expense < 0
    let oneValueIsZero = income < 0 || expense < 0

    if (isFieldsEmpty || oneFieldIsEmpty) {
        return alert("Preencha um valor")
    } else if (valuesIsZero || oneValueIsZero) {
        return alert("Digite um valor maior ou igual 0")
    }

    calculateBalance(income, expense)
}

function sum(array, value) {
    array.push(value)
    let total = array.reduce((accumulator, values) => accumulator += values)
    return total
}

function calculateBalance(income, expense) {
    const totalIncome = sum(family.incomes, income)
    const totalExpense = sum(family.expenses, expense)

    const totalBalance = totalIncome - totalExpense
    const balanceFinal = document.createElement("p")
    balanceFinal.innerHTML = `Seu saldo foi de: ${totalBalance.toLocaleString("pt-BR", {
        style: "currency", currency: "BRL"
    })}`

    output.append(balanceFinal)
    
    const result = totalBalance >= 0 ? "Saldo positivo" : "Saldo negativo"
    const statusBalance = document.createElement("p")
    statusBalance.innerHTML = result
    
    output.append(statusBalance)
}