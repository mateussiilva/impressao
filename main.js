

function fabrica1(nome, sobrenome){
    function nomecompleto() {
        return `${nome} ${sobrenome}`
    }
    return {
        nome,
        sobrenome,
        nomecompleto   
    }
}

let pessoa1 = fabrica1("mateus","jose")
console.log(pessoa1.nomecompleto())