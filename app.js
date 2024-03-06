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

function calcularTempoDeCalandra(metros, tempoMaterial) {
    return Math.ceil(metros / tempoMaterial)
}

function TempoDeImpressão() {
    let metrosImpressao = parseFloat(document.querySelector("#imetros").value);
    let impressoraSelecionada = document.querySelector("#iimpressoras").value;
    let materialSelecionado = document.querySelector("#itiposMaterias").value;
    let resultImpressao = document.querySelector("#resImpressao")
    let resultCalandra = document.querySelector("#resCalandra")
    let resultProducao = document.querySelector("#resProducao")

    for (impresora in configuracoesImpressoras) {
        if (impresora === impressoraSelecionada) {
            let metrosPorMinuto = configuracoesImpressoras[impresora]
            let tempoDeImpressão = calcularTempoImpressao(metrosPorMinuto, metrosImpressao)
            let tempoDeCalandra = calcularTempoDeCalandra(metrosImpressao, configuracoesMaterias[materialSelecionado])
            let msg = `${tempoDeImpressão} minutos`
            let msg1 = `${tempoDeCalandra} minutos`
            let msg2 = `${(tempoDeCalandra + tempoDeImpressão * 0.5) + tempoDeCalandra + tempoDeImpressão} minutos`
            resultImpressao.innerText = msg
            resultCalandra.innerText = msg1
            resultProducao.innerText = msg2
        }
    }

}

function AdicionarLinhaTabela() {
    const metrosTecido = Number(document.querySelector("#imetrosTecido").value);
    if (Number(metrosTecido) > 0) {
        const tecidoSelecionado = document.querySelector("#itipostecidos").value;
        const obsTecido = document.getElementById("obsTecidos").value;
        const arrayDados = [tecidoSelecionado,metrosTecido,obsTecido]
        const bodyTable = document.querySelector("#bodytable");
        const line = document.createElement("tr");
        for (const value of arrayDados) {
            let td = document.createElement("td")
            td.innerText = value
            line.appendChild(td)
        }
        bodyTable.appendChild(line)
    }
    else{
        alert("Insira a metragem")
    }
}