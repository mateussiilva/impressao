#!/usr/bin/env nodejs

function calcularMetrosPorMinuto(metros) {
    return {
        "mutoh": () => { return Math.ceil(metros / 9 * 60) },
        "jet": () => { return Math.ceil(metros / 17 * 60) },
        "tex": () => { return Math.ceil(metros / 58 * 60) },
    }
}
function calcularTempoDeCalandra(metros) {
    return {
        "tactel": () => { return metros / 2 },
        "malha": () => { return metros / 1.5 },
        "dasminys": () => { return metros / 2 },
    }
}


const MINUTOS = 60;

function calcularTempoImpressao(metros_por_minuto, metros) {
    return Math.ceil(metros / metros_por_minuto * 60)
}



function TempoDeImpressão() {
    let metrosImpressao = parseFloat(document.querySelector("#imetros").value);
    
    const metrosPorMinuto = calcularMetrosPorMinuto(metrosImpressao)
    let impressoraSelecionada = document.querySelector("#iimpressoras").value;
    let resultImpressao = document.querySelector("#resImpressao")
    let resultCalandra = document.querySelector("#resCalandra")
    let resultProducao = document.querySelector("#resProducao")

    let materialSelecionado = document.querySelector("#itiposMaterias").value;



    const tempoDeImpressão = metrosPorMinuto[impressoraSelecionada]()
    const tempoDeCalandra = calcularTempoDeCalandra(metrosImpressao)[materialSelecionado]()
    let msg = `${tempoDeImpressão} minutos`
    let msg1 = `${tempoDeCalandra} minutos`
    let msg2 = `${(tempoDeCalandra + tempoDeImpressão * 0.5) + tempoDeCalandra + tempoDeImpressão} minutos`
    resultImpressao.innerText = msg
    resultCalandra.innerText = msg1
    resultProducao.innerText = msg2
        


}

function AdicionarLinhaTabela() {
    const metrosTecido = Number(document.querySelector("#imetrosTecido").value);
    if (Number(metrosTecido) > 0) {
        const tecidoSelecionado = document.querySelector("#itipostecidos").value;
        const obsTecido = document.getElementById("obsTecidos").value;
        const arrayDados = [tecidoSelecionado, metrosTecido, obsTecido]
        const bodyTable = document.querySelector("#bodytable");
        const line = document.createElement("tr");
        for (const value of arrayDados) {
            let td = document.createElement("td")
            td.innerText = value
            line.appendChild(td)

        }
        bodyTable.appendChild(line)
    }
    else {
        alert("Insira a metragem")
    }
}


