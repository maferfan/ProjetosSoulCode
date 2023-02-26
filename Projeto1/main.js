//Projeto1SoulCode


//Defina valores para as variáveis: nome do produto, preço do produto, desconto do produto e desconto válido (booleano);
//Caso desconto válido seja verdadeiro. Realize o cálculo do desconto e salve em uma nova variável: preço final. Caso contrário, apenas repasse o valor do produto para variável de preço final;
//Faça a seguinte verificação: Se o preço final do produto for maior que 1000, reduza 50 reais. Caso contrário, apenas mostre uma mensagem na tela com o valor do preço final;
//Crie um array de demandas com os valores: 10, 2, 1, 30, 5. Cada item no array representa a demanda de um cliente diferente. Por exemplo o primeiro cliente está solicitando 10 produtos.
//Para cada demanda no array calcule quanto cada cliente deverá pagar e mostre a mensagem no formato: "O cliente 1 deverá pagar: R$ 585". Salve o total de cada cliente em um novo array que deverá começar vazio.
//Mostre o total obtido de todos os clientes no console. No formato: "O total de lucro é de R$ 5000", por exemplo.

let nome_do_produto = "Geladeira"
let preço_do_produto = 500
let desconto_do_produto = 0.5
let desconto_valido = true
let soma1 = 0
let soma2 = 0
let demanda = [10, 2, 1, 30, 5]
var demandaFinal = []

//Neste exercício decidi incrementar a questão do valor booleano;
//Digamos que caso o "desconto_valido = true || desconto_valido = false", todos os valores do array terão desconto ou não;
//No mundo real, normalmente, o cliente que solicita a maior demanda recebe um desconto. Então atribui-se que: se o cliente tem uma demanda igual ou acima de 10, considerei que este recebe desconto de R$ 50,00.

console.log("------------------------------")
for (let i = 0; i < demanda.length; i++){
    let demandaDesconto = demanda[i];
    if (desconto_valido == true && demandaDesconto >= 10){
        produto = preço_do_produto*desconto_do_produto*demandaDesconto
        demandaFinal.push(produto)
        console.log("o valor bruto desta demanda é de R$" + produto)}
    else{
        produto = preço_do_produto*demandaDesconto
        demandaFinal.push(produto)
        console.log("o valor bruto desta demanda é de R$" + produto)
        }

}

console.log("------------------------------")

for (let j = 0; j < demandaFinal.length; j++) {
    let demandaDesconto = demandaFinal[j];
        if (demandaDesconto > 1000){
            produto = demandaDesconto - 50 
            soma2 += produto
            console.log("O cliente " + j + " deverá pagar R$" + produto + " por sua " + nome_do_produto + ".") 
        }else{
            produto = demandaDesconto
            soma2 += produto
            console.log("O cliente " + j + " deverá pagar R$" + produto +  " por sua " + nome_do_produto + " e não terá desconto.")}   
}       

console.log("------------------------------")
console.log("O total de lucro é de: R$" + soma2 + ".") 