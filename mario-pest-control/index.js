const form = document.getElementById("marioForm")

form.addEventListener("submit", function(event) {
    event.preventDefault()

    let totalCoins = (form.goombaNumber.value * 5) + (form.bobombsNumber.value * 7) + (form.cheepCheepNumber.value * 11)

    const coinsDiv = document.getElementById("coinsTotal")

    coinsDiv.textContent = ("Total Coins: " + totalCoins)

    
})