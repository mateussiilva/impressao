
export function calcularMetrosPorMinuto(metros) {
    return {
        "mutoh": () => { return Math.ceil(metros / 9 * 60) },
        "jet": () => { return Math.ceil(metros / 17 * 60) },
        "tex": () => { return Math.ceil(metros / 58 * 60) },
    }
}

export  function calcularTempoDeCalandra(metros) {
    return {
        "tactel": () => { return metros / 2 },
        "malha": () => { return metros / 1.5 },
        "dasminys": () => { return metros / 2 },
    }
}

// export default calcularTempoDeCalandra };