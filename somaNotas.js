const parametro = 10;

let nota1 = prompt("Digite o valor da nota 1");


nota1 = parseInt(nota1)

let nota2 = prompt("Digite o valor da nota 2");


nota2 = parseInt(nota2)

let total = nota1+nota2; 

document.write(total)



if(total>=parametro){
document.write("<br>Aprovado")
} else{
    document.write("<br>Reprovado")
}




