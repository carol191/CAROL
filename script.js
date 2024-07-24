const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "O que você acha sobre igualdade social entre homens e mulheres?",
        alternativas: [
            {
                texto: "Isso é terrível!",
                afirmacao: "negativo"
            },
            {
                texto: "Acho algo que seria necessário, pois todos devemos ter direitos iguais" ,
                afirmacao: "justo" 
            }

        ]
    },
    {
        enunciado: "Na sua opinião as mulheres deveriam ter as mesmas condições salarias e mesmo cargo que os homens?",
        alternativas: [
            {
                texto: "Não, deve continuar do jeito que está!",
                afirmacao: "negativo"
            },
            {
                texto: "Sim, pois as mulheres são capazes assim como os homens.",
                afirmacao: "justo"
            }
        ]
    },
    {
        enunciado: "Você é a favor da igualdade social?",
        alternativas: [
            {
                texto: "Não!",
                afirmacao: "negativo"
            },
            {
                texto: "Sim!",
                afirmacao: "justo"
            }

        ]
    },
    {
        enunciado: "As mulheres merecem ter mais visibilidade e oportunidades assim como os homens?",
        alternativas: [
            {
                texto: "Não!",
                afirmacao: "negativo"
            },
            {
                texto: "Sim!",
                afirmacao: "justo"
            }


        ]
    },
    {
        enunciado: "Qual sua opinião final referente a igualdade social entre homens e mulheres?",
        alternativas: [
            {
                texto: "Na minha opinião, não deveria haver mudança e continuaria da forma que está!",
                afirmacao: "negativo"
            },
            {
                texto:"Na minha opinião, as mulheres merecem o mesmo reconhecimento que os homens, pois são esforçadas e dedicadas no que fazem!",
                afirmacao: "justo"
            }
        ]
    },
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();