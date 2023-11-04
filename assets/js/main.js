function escopo() {
    const form = document.querySelector(".form");

    function submit(evento) {
        evento.preventDefault();
        const peso = document.querySelector("#peso");
        const altura = document.querySelector("#altura");

        function isNumber(peso, altura) {
            if (isNaN(peso) || isNaN(altura)) { 
                return backgroundColor('orange'), createMsg(0);
            } else if (peso === "" || peso === " " || altura === "" || altura === " ") { 
                return backgroundColor('orange'), createMsg(1);
            }
            limites(peso, altura);
        }

        function limites(peso, altura) {
            if (peso < 15 || peso > 500) {
                return backgroundColor("red"), createMsg(2);
            } else if (altura < 30 || altura > 300) {
                return backgroundColor("red"), createMsg(3);
            }
            calcular(peso, altura);
        }

        function calcular(peso, altura) {
            const resultado = peso / (altura / 100) ** 2;
            return definirImc(resultado.toFixed(2));
        }

        function definirImc(result) {
            if (result > 39.9) {
                return backgroundColor("red"), createMsg(9, result);
            }
            if (result > 34.9) {
                return backgroundColor("red"), createMsg(8, result);
            }
            if (result > 29.9) {
                return backgroundColor("red"), createMsg(7, result);
            }
            if (result > 24.9) {
                return backgroundColor("orange"), createMsg(6, result);
            }
            if (result > 18.5) {
                return backgroundColor("green"), createMsg(5, result);
            }
            return backgroundColor("orange"), createMsg(4, result);
        }

        function createMsg(index, result) {
            const levels = [
                //error Alerts
                "Apenas números podem ser inseridos!",
                "Insira números!",
                "Limites de peso entre 15 Kg e 500 Kg!",
                "Limites de altura entre 30 cm e 300 cm!",
                //levels
                "Abaixo do peso",
                "Peso normal",
                "Sobrepeso",
                "Obesidade grau 1",
                "Obesidade grau 2",
                "Obesidade grau 3",
            ];
            const inserirResult = document.querySelector(".resultado");
            inserirResult.innerText = '';
            const p = document.createElement("p");
            inserirResult.appendChild(p);
            index  < 4
                ? (p.innerText = `${levels[index]}`)
                : (p.innerText = `Seu IMC é ${result} (${levels[index]})`);
            return;
        }

        function backgroundColor(background) {
            switch (background) {
                case "green":
                    document.documentElement.style.setProperty("--result-color", "green");
                    return;
                case "orange":
                    document.documentElement.style.setProperty("--result-color", "orange");
                    return;
                case "red":
                    document.documentElement.style.setProperty("--result-color", "red");
                    return;
            }
        }

        isNumber(peso.value, altura.value);
    }

    form.addEventListener("submit", submit);
}
escopo();
