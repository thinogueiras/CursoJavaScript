/* Crie um função que ao ser executada no terminal leia um valor e escrever a frase "É  MAIOR  QUE  10!" se o valor lido for maior que 10, caso contrário escrever "NÃO É MAIOR QUE 10!" */

function verificaSeMaiorQueDez(valor) {
    if (valor > 10) {
        console.log('É MAIOR QUE 10!');
    } else {
        console.log('NÃO É MAIOR QUE 10!');
    }
}

// Cenários de teste

verificaSeMaiorQueDez(11);
verificaSeMaiorQueDez(10);
verificaSeMaiorQueDez(9);
