
        document.getElementById("submit").addEventListener("click", function (){
            var roupasContainer = {
                "Moletom": 150,
                "Camiseta": 80,
                "Calça Jeans": 200,
                "Shorts": 90
            };

            var selectedRoupa = document.getElementById('roupas').value;
            var resultText = document.querySelector("h5");

            if (selectedRoupa in roupasContainer) {
                resultText.textContent = `O valor do ${selectedRoupa} é de R$${roupasContainer[selectedRoupa]},00`;
            } else {
                resultText.textContent = "Nenhum produto selecionado";
            }
        });
  





