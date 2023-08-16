const rollButton = document.getElementById("rollButton");
        const resultElement = document.getElementById("result");
        const diceTypeElement = document.getElementById("diceType");

        rollButton.addEventListener("click", () => {
            const selectedDice = diceTypeElement.value;
            let result = 0;

            switch (selectedDice) {
                case "d6":
                    result = Math.floor(Math.random() * 6) + 1;
                    break;
                case "d8":
                    result = Math.floor(Math.random() * 8) + 1;
                    break;
                case "d10":
                    result = Math.floor(Math.random() * 10) + 1;
                    break;
                case "d12":
                    result = Math.floor(Math.random() * 12) + 1;
                    break;
                case "d20":
                    result = Math.floor(Math.random() * 20) + 1;
                    break;
                case "d100":
                    result = Math.floor(Math.random() * 100) + 1;
                    break;
                default:
                    result = "Invalid dice type";
            }

            resultElement.textContent = `You rolled a ${selectedDice}: ${result}`;
        });