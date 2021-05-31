function gerar() {
    var txt = document.getElementById('res')
    txt.innerHTML = ''
    let minText = document.getElementById('min')
    let maxText = document.getElementById('max')
    let qtText = document.getElementById('qt')
    let min = Number(minText.value)
    let max = Number(maxText.value)
    let qt = Number(qtText.value)

    for (let i = 0; i < qt; i++) {
        let n = aleatorio(min, max)
        txt.innerHTML += i == (qt - 1) ? `${n}`:`${n} `
    }
    
}

var aleatorio = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min
}

function copiar() {
    let txt = document.getElementById('res')
    var content = txt.value
    if (content.length == 0) {
        alert('Erro! Você deve primeiro gerar números!')
    } else {
        txt.select()
        txt.setSelectionRange(0, 99999)

        document.execCommand("copy")

        alert('O seguinte texto foi copiado para a sua área de transferência: "' + content + '"')
    }
}