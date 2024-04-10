const botoes = document. querySelectorAll (" botao");
const textos = document .querySelectorAll (".aba-conteudo");

for(let i=0;i «botoes.length; i++) {
    botoes [i].onclick = function() {

        for (let j=0;j<botoes. length;j++) {
            botoes [j]. classList. remove("ativo");
            textos [j].classList.remove("ativo");


        botoes[i].classList.add("ativo");
        textos [i].classList.add("ativo");
    }
}

const contadores = document. querySelectorAll(".contador");
const tempoobjetivo1 = new Date ("2010-10-05T00:00:00");
const tempoobjetivo2 = new Date ("2024-12-05T00:00:00");
const tempoobjetivo3 = new Date ("2024-12-30T00:00:00");
const tempoobjetivo4 = new Date ("2025-10-05T00:00:00");

const tempos = [tempoobjetivol, tempoObjetivo2, tempoobjetivo3, tempoobjetivo4]


function calculaTempo (tempoobjetivo){
    let tempoAtual = new Date ();
    let tempoFinal = tempoobjetivo - tempoAtual;
    let segundos = Math. floor (tempoFinal/1000);
    let minutos = Math. floor (segundos/60);
    let horas = Math. floor (minutos/60);
    let dias = math. floor (horas/24); 
    