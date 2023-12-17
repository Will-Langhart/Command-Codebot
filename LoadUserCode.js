function loadUserCode() {
            const userInput = document.getElementById("userCodeInput").value;
            const generatedCodeArea = document.getElementById("generatedCode");
            generatedCodeArea.textContent = userInput;
        }
