function calcMedia() {
    var Nome1 = document.getElementById("inNome");
    var inNota1 = document.getElementById("inNota1");
    var inNota2 = document.getElementById("inNota2");
    var outSituation = document.getElementById("outSituacao");
    var outMedia = document.getElementById("outMedia");
    var nome = inNome.value;
    var nota1 = Number(inNota1.value);
    var nota2 = Number(inNota2.value);
    var media = (nota1 + nota2) / 2;
    

    outMedia.textContent = "Média das Notas:" + media.toFixed(1);

    if(media >= 7) {
        outSituation.textContent = "Parabéns " + nome + "! Voce foi aprovado(a)";
        outSituation.style.color = "blue";
    } else if(media >= 4) {
        outSituation.textContent = "Atenção " + nome + ". Voce está em exame"
        outSituation.style.color = "green"
    } else {
        outSituation.textContent = "Ops " + nome + "... Voce foi reprovado(a)";
        outSituation.style.color = "red";
    }
}

var btResultado = document.getElementById("btResultado");
    btResultado/addEventListener("click", calcMedia);