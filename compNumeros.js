n1 = Number(prompt(" Entre com o primeiro número!"))
n2 = Number(prompt("Entre com  o segundo número!"))
 
function entradaNumero() {

    const comparacao = comparacaoIgualdade( n1, n2  )
    const maiorMenor = maiorMenorQue ( n1, n2 )
    
    if (!n1 || !n2) {
        alert("Erro! Valor não permitido ");

       
    }
    else{
       console.log( `${comparacao}${maiorMenor}`)
    }
}

function comparacaoIgualdade( n1, n2,  ) {
    let fraseIgualdade = `Os números ${n1} e ${n2} não são iguais `

    if (n1 === n2) {
        fraseIgualdade = `Os números ${n1} e ${n2} são iguais `
    }

    return fraseIgualdade;

}

function maiorMenorQue ( n1, n2 ){
    const soma = n1+n2
    let fraseMaiorMenorDez = "  maior que 10 "
    let fraseMaiorMenorVinte = " maior que 20 "
    
    if(soma < 10){
        fraseMaiorMenorDez = "menor que 10 "
    }

    if (soma < 20){
        fraseMaiorMenorVinte = " menor que 20 "
    }
    return `Sua soma é ${soma}, que é ${fraseMaiorMenorDez} e ${fraseMaiorMenorVinte}`
}

entradaNumero()