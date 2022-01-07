var num1 = 10; 
var num2 = 0;

function atividade(num1,num2){
    console.log(num1,num2);
    
    if (num1 <= num2){
        console.log('o numero 1 é menor que o 2');
    }else if(num1 >= num2){
        console.log('o numero 1 é maior que o 2');
    }else if(num1 === num2){
        console.log('os numeros são iguais');
    }else if (num1 === num2){
        console.log('os numeros não são iguais')
    }

    if(num1 + num2 >= 10){
        console.log('a soma entre os numeros são maior que 10')
    }else if (num1 + num2 < 10){
        console.log('a soma entre os numeros são menores que 10')

    }if (num1 + num2 <= 20){
        console.log('a soma entre os numeros são menores que 20')
    }else if(num1 + num2 >= 20){
        console.log('a soma entre os numero são maiores que 20')
    }
}
atividade(num1,num2);

