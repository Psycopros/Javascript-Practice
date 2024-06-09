function roll(){

    const numOfDice = document.getElementById("numOfDice").value;
    const resultText = document.getElementById("resultText");
    const results = document.getElementById("results");
    const images = document.getElementById("images");
    const textTotal = document.getElementById("textTotal");
    const diceSum = document.getElementById("diceSum");

    const diceValues = [];
    const diceImages = [];
    let total = 0;

    for(let i = 0; i < numOfDice; i++){

        const diceValue = Math.floor(Math.random() * 6) + 1;
        diceValues.push(diceValue);
        diceImages.push(`<img src="./img/${diceValue}.PNG">`);

    }

    for(const diceValue of diceValues){
        total += diceValue;
    }

    resultText.textContent = ("Dice result");
    results.textContent = (diceValues.join(", "));
    images.innerHTML = (diceImages.join(""));


    textTotal.textContent = ("Total Dice Roll");
    diceSum.textContent = (total);

}