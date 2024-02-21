#!/usr/bin/env nodejs

const configuracoesImpressoras = {
    
};


function calcularMetrosPorMinuto(metros){
    return {
        "1604": ()=> {return metros / 9 * 60 },
        "1602": ()=> {return metros / 17 * 60 },
        "1904": ()=> {return metros / 58 * 60 },
    }
}


const configuracoesMaterias = {
    "tactel": 2.0,
    "malha": 1.5,
}

const metrosPorMinuto = calcularMetrosPorMinuto(12)
console.log(metrosPorMinuto[1602]())


// const MINUTOS = 60;

// function calcularTempoImpressao(metros_por_minuto, metros) {
//     return Math.ceil(metros / metros_por_minuto * MINUTOS)
// }

// function calcularTempoDeCalandra(metros,tempoMaterial){
//     return Math.ceil(metros / tempoMaterial )
// }

// function displayResult(msg, content){
    
// }




// function TempoDeImpressão() {
//     let metrosImpressao = parseFloat(document.querySelector("#imetros").value);
//     let impressoraSelecionada = document.querySelector("#iimpressoras").value;
//     let materialSelecionado = document.querySelector("#itiposMaterias").value;
//     let resultImpressao = document.querySelector("#resImpressao")
//     let resultCalandra = document.querySelector("#resCalandra")
//     let resultProducao = document.querySelector("#resProducao")

//     for (impresora in configuracoesImpressoras) {
//         if (impresora === impressoraSelecionada) {
//             let metrosPorMinuto = configuracoesImpressoras[impresora]
//             let tempoDeImpressão = calcularTempoImpressao(metrosPorMinuto, metrosImpressao)
//             let tempoDeCalandra = calcularTempoDeCalandra(metrosImpressao,configuracoesMaterias[materialSelecionado])
//             let msg =`${tempoDeImpressão} minutos`
//             let msg1 =`${tempoDeCalandra} minutos`
//             let msg2 =`${(tempoDeCalandra + tempoDeImpressão * 0.5) +tempoDeCalandra + tempoDeImpressão} minutos`
//             resultImpressao.innerText = msg
//             resultCalandra.innerText = msg1
//             resultProducao.innerText = msg2
//         }
//     }

// }