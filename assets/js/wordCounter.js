const btnCalculate = document.getElementById("btn-calculate");
const btnClear = document.getElementById("btn-clear");

const countdown = () => {
    const showCount = document.getElementById("count-down");
    let counter = 3;

    const interval = setInterval(() => {
        if (counter < 0) {
            clearInterval(interval);
            showCount.innerText = `Tempo para a mensagem ser excluída: ${counter}`;
            showCount.innerText = "";
        } else {
            showCount.innerText = `Tempo para a mensagem ser excluída: ${counter--}`;
        }
    }, 700);
};

const timeToErase = (result) => {
    setTimeout(() => {
        result.innerText = "";
    }, 3000);
};

document.addEventListener("keypress", (event) => {
    if (event.key == "Enter") {
        event.preventDefault();
        btnCalculate.click();
    }
});

const convertToString = (string) => {
    return String(string);
};

const conditionResult = (array, result, textValue) => {
    if (array.length <= 1 && textValue == "") {
        array.length = 0;

        result.innerText = `Você tem: ${array.length} palavras`;
        timeToErase(result);
        countdown();
    } else if (array.length == 1) {
        result.innerText = `Você tem: ${array.length} palavra`;
        timeToErase(result);
        countdown();
    } else {
        result.innerText = `Você tem: ${array.length} palavras`;
        timeToErase(result);
        countdown();
    }
};

btnClear.addEventListener("click", () => {
    document.getElementById("word-counter").value = "";
});

btnCalculate.addEventListener("click", () => {
    const textValue = document.getElementById("word-counter").value;
    const calculationResult = document.getElementById("result");

    const stringTextValue = convertToString(textValue); //deixando o valor em formato de String;
    const wordArray = stringTextValue.split(" "); //Retornando um array com a quantidade de palavras;

    conditionResult(wordArray, calculationResult, textValue);
});
