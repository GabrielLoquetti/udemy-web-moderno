// O LET também é usado para armazenar variáveis, porém apenas daquele escopo
let produto = "Mouse"
let preco = 19.90
let desconto = 0.4

// ao invés de fazer isso ------- console.log(19.90 * 0.6)

// fazemos isso
let precoComDesconto = preco * (1 - desconto);
console.log(precoComDesconto) // Preço com desconto

// Identando STRINGS
let nome_produto = "Mouse"
let categoria = "Periféricos"
console.log(`Produto: ${nome_produto} - Categoria: ${categoria}`); 
// ou
console.log("Produto: " + nome_produto + " - Categoria: " + categoria);