#!/usr/bin/env nodejs

import  {calcularMetrosPorMinuto,calcularTempoDeCalandra}  from "./main.js"



const metrosImpressao = 20
const metrosPorMinuto = calcularMetrosPorMinuto(metrosImpressao)
console.log(metrosPorMinuto.tex()," minutos")
console.log(calcularTempoDeCalandra(metrosImpressao).tactel()," minutos")




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