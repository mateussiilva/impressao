#!/usr/bin/env nodejs


const configuracoesImpressoras = {
    "1604": 9,
    "1602": 17,
    "1904": 58,
};

const configuracoesMaterias = {
    "tactel": 2.0,
    "malha": 1.5,
}

const MINUTOS = 60;

function calcularTempoImpressao(metros_por_minuto, metros) {
    return Math.ceil(metros / metros_por_minuto * 60)
}

function calcularTempoDeCalandra(metros,tempoMaterial){
    return Math.ceil(metros / tempoMaterial )
}

function TempoDeImpressão() {
    let metrosImpressao = parseFloat(document.querySelector("#imetros").value);
    let impressoraSelecionada = document.querySelector("#iimpressoras").value;
    let materialSelecionado = document.querySelector("#itiposMaterias").value;
    let resultImpressao = document.querySelector("#resImpressao")
    let resultCalandra = document.querySelector("#resCalandra")
    let resultProducao = document.querySelector("#resProducao")
    let areaLgo = document.querySelector("#subAreaLog")

    for (impresora in configuracoesImpressoras) {
        if (impresora === impressoraSelecionada) {
            let metrosPorMinuto = configuracoesImpressoras[impresora]
            let tempoDeImpressão = calcularTempoImpressao(metrosPorMinuto, metrosImpressao)
            let tempoDeCalandra = calcularTempoDeCalandra(metrosImpressao,configuracoesMaterias[materialSelecionado])
            let msg =`${tempoDeImpressão} minutos`
            let msg1 =`${tempoDeCalandra} minutos`
            let msg2 =`${(tempoDeCalandra + tempoDeImpressão * 0.5) +tempoDeCalandra + tempoDeImpressão} minutos`
            resultImpressao.innerText = msg
            resultCalandra.innerText = msg1
            resultProducao.innerText = msg2
            let d = document.createElement("div")
            d.innerText = `${msg},${msg1},${msg2}`
            areaLgo.appendChild(d)
        }
    }

}

function clearAreaLog(){
    let areaLgo = document.querySelector("#subAreaLog")
    areaLgo.innerHTML = ""


}