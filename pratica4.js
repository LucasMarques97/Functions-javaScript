// Crie uma um programa de saúde, nesse programa desenvolva uma função
// que calcula o imc de pacientes, a função 
// deverá receber os  seguintes parâmetros, peso e altura.

peso = Number(prompt("Insira seu Peso: "))
altura = Number(prompt("Insira sua Altura: "))

function imc(peso, altura) {

    return (peso/(altura**2))
}
alert(`O seu IMC é: ${Math.round((imc(peso, altura)*100)/100)}`)

if (imc(peso, altura) < 18.5) {
    alert(`O seu IMC é: ${Math.round((imc(peso, altura)*100)/100)} Seu IMC está Abaixo do ideal`)
    
}
if (imc(peso, altura) >= 18.5 && imc(peso, altura) <= 24.9){
    alert(`O seu IMC é: ${Math.round((imc(peso, altura)*100)/100)} Seu IMC está normal`)
   
}
if (imc(peso, altura) >= 25 && imc(peso, altura) <= 29.9){
    alert(`O seu IMC é: ${Math.round((imc(peso, altura)*100)/100)} Seu IMC indica Sobrepeso`)
    
}
if (imc(peso, altura) >= 30 && imc(peso, altura) <= 39.9){
    alert(`O seu IMC é: ${Math.round((imc(peso, altura)*100)/100)} Seu IMC indica Obesidade`)
    
}
if (imc(peso, altura) >= 40){
    alert(`O seu IMC é: ${Math.round((imc(peso, altura)*100)/100)} Seu IMC indica Obessidade Grave`)
    
}

