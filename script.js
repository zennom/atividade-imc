let calcular = document.getElementById('calcular');

function imc(){
    let nome = document.getElementById('nome').value;
    let altura = document.getElementById('altura').value;
    let peso = document.getElementById('peso').value;
    let resultado = document.getElementById('resultado');

    if(nome !== '' && altura !== '' && peso !== ''){

        let valorIMC = (peso / (altura * altura)).toFixed(1);
        //toFixed serve para arrumar o decimal, 1 casa após a virgula

        if(valorIMC < 18.5){
            tipoIMC = 'Magreza';
        }else if(valorIMC < 25){
            tipoIMC = 'Normal';
        }else if(valorIMC < 30){
            tipoIMC = 'Sobrepeso';
        }else if(valorIMC < 35){
            tipoIMC = 'obesidade grau 1';
        }else if(valorIMC < 40 ){
            tipoIMC = 'obesidade grau 2';
        } else { 
            tipoIMC = 'obesidade grau 3';
        }
        resultado.textContent = `${nome} seu IMC é ${valorIMC} e você está ${tipoIMC}`;
    }else{
        resultado.textContent = "Preencha todos os campos!";
    }
}
calcular.addEventListener('click',imc);



