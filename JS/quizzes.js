(function () {
  "use strict";

  // ---------------------------------------------------------------------
  // DADOS DOS QUIZZES
  // Cada quiz tem 5 perguntas. "correta" é o índice (0-based) da opção certa.
  // Pra adicionar um quiz novo, basta copiar um objeto deste array e editar.
  // ---------------------------------------------------------------------
  const QUIZZES = [
    {
      id: "historia",
      tag: "HISTÓRIA",
      titulo: "História Geral",
      resumo: "Dos grandes marcos mundiais à história do Brasil.",
      perguntas: [
        {
          pergunta: "Qual evento costuma marcar o início da Idade Moderna?",
          opcoes: [
            "A queda de Constantinopla, em 1453",
            "O descobrimento do Brasil",
            "A Revolução Francesa",
            "A independência dos Estados Unidos"
          ],
          correta: 0,
          explicacao: "A tomada de Constantinopla pelos turcos otomanos, em 1453, é um dos marcos mais usados para dividir Idade Média e Idade Moderna."
        },
        {
          pergunta: "A Revolução Industrial teve início em qual país?",
          opcoes: ["França", "Inglaterra", "Alemanha", "Itália"],
          correta: 1,
          explicacao: "A Inglaterra reunia carvão, capital e mão de obra disponível, o que a tornou o berço da Revolução Industrial no século XVIII."
        },
        {
          pergunta: "O que foi, de fato, a Guerra Fria?",
          opcoes: [
            "Um conflito armado direto entre EUA e URSS",
            "Uma disputa ideológica e geopolítica sem confronto direto entre as potências",
            "Uma guerra apenas entre países europeus",
            "Uma revolução comunista na China"
          ],
          correta: 1,
          explicacao: "EUA e URSS nunca entraram em guerra direta — a disputa se deu por influência política, corrida armamentista e conflitos indiretos (guerras \"por procuração\")."
        },
        {
          pergunta: "A Proclamação da República no Brasil ocorreu em:",
          opcoes: ["1822", "1888", "1889", "1500"],
          correta: 2,
          explicacao: "A República foi proclamada em 15 de novembro de 1889, encerrando o período monárquico brasileiro."
        },
        {
          pergunta: "O Iluminismo influenciou diretamente qual movimento histórico?",
          opcoes: ["As Cruzadas", "A Revolução Francesa", "O Renascimento", "A Reforma Protestante"],
          correta: 1,
          explicacao: "Ideias iluministas de liberdade, igualdade e soberania popular alimentaram diretamente a Revolução Francesa de 1789."
        }
      ]
    },
    {
      id: "geografia",
      tag: "GEOGRAFIA",
      titulo: "Geografia",
      resumo: "Clima, relevo, biomas e cidades — o espaço que a gente vive.",
      perguntas: [
        {
          pergunta: "O que é uma bacia hidrográfica?",
          opcoes: [
            "Um conjunto de rios que deságuam em um rio principal",
            "Um tipo de relevo montanhoso",
            "Uma camada da atmosfera",
            "Uma divisão política de um país"
          ],
          correta: 0,
          explicacao: "A bacia hidrográfica é a área de terra drenada por um rio principal e seus afluentes."
        },
        {
          pergunta: "Qual é o maior bioma brasileiro em extensão?",
          opcoes: ["Mata Atlântica", "Cerrado", "Amazônia", "Caatinga"],
          correta: 2,
          explicacao: "A Amazônia ocupa cerca de metade do território brasileiro, sendo o maior bioma do país."
        },
        {
          pergunta: "O que caracteriza o clima tropical?",
          opcoes: [
            "Temperaturas baixas o ano todo",
            "Duas estações bem definidas — seca e chuvosa — com temperaturas altas",
            "Neve frequente",
            "Umidade baixa o ano todo"
          ],
          correta: 1,
          explicacao: "O clima tropical típico tem temperaturas médias altas e uma estação chuvosa bem marcada, alternada com uma mais seca."
        },
        {
          pergunta: "A região litorânea de Caraguatatuba faz parte de qual bioma?",
          opcoes: ["Cerrado", "Mata Atlântica", "Pampa", "Caatinga"],
          correta: 1,
          explicacao: "O litoral norte de São Paulo, incluindo Caraguatatuba, está inserido no domínio da Mata Atlântica."
        },
        {
          pergunta: "O que é urbanização?",
          opcoes: [
            "A redução da população nas cidades",
            "O processo de crescimento das cidades em relação ao campo",
            "A migração da cidade para o campo",
            "A criação de parques rurais"
          ],
          correta: 1,
          explicacao: "Urbanização é o processo pelo qual a população e as atividades se concentram cada vez mais nas cidades."
        }
      ]
    },
    {
      id: "filosofia",
      tag: "FILOSOFIA",
      titulo: "Filosofia",
      resumo: "Grandes perguntas, grandes pensadores.",
      perguntas: [
        {
          pergunta: "Sócrates é conhecido por qual método de ensino?",
          opcoes: ["Método dedutivo", "Maiêutica — ensinar por meio de perguntas e diálogo", "Empirismo", "Dogmatismo"],
          correta: 1,
          explicacao: "A maiêutica socrática usa perguntas sucessivas para levar a pessoa a construir seu próprio raciocínio."
        },
        {
          pergunta: "Qual frase resume o método de Descartes?",
          opcoes: ["\"Conhece-te a ti mesmo\"", "\"Penso, logo existo\"", "\"O homem é a medida de todas as coisas\"", "\"Só sei que nada sei\""],
          correta: 1,
          explicacao: "\"Penso, logo existo\" (cogito, ergo sum) é o ponto de partida do método cartesiano: duvidar de tudo até achar uma certeza inabalável."
        },
        {
          pergunta: "O que é ética, na filosofia?",
          opcoes: ["O estudo dos astros", "A reflexão sobre valores e comportamento humano", "O estudo da matéria", "A análise de textos literários"],
          correta: 1,
          explicacao: "Ética é o ramo da filosofia que reflete sobre o que é certo, justo e desejável no comportamento humano."
        },
        {
          pergunta: "A quem se atribui a frase \"Só sei que nada sei\"?",
          opcoes: ["Aristóteles", "Platão", "Sócrates", "Kant"],
          correta: 2,
          explicacao: "A frase resume a postura socrática de reconhecer os limites do próprio conhecimento como ponto de partida da sabedoria."
        },
        {
          pergunta: "O que a lógica estuda?",
          opcoes: ["A estrutura válida do raciocínio", "A composição química da matéria", "Fenômenos sociais", "A formação de rochas"],
          correta: 0,
          explicacao: "A lógica investiga as regras que tornam um raciocínio válido, independentemente do conteúdo específico dele."
        }
      ]
    },
    {
      id: "sociologia",
      tag: "SOCIOLOGIA",
      titulo: "Sociologia",
      resumo: "Como a gente vive, se organiza e se relaciona em grupo.",
      perguntas: [
        {
          pergunta: "Quem é considerado um dos fundadores da Sociologia?",
          opcoes: ["Isaac Newton", "Émile Durkheim", "Charles Darwin", "Galileu Galilei"],
          correta: 1,
          explicacao: "Durkheim é um dos pais da Sociologia moderna, conhecido por estudar os \"fatos sociais\" com método científico."
        },
        {
          pergunta: "O que é um \"fato social\", segundo Durkheim?",
          opcoes: [
            "Um evento raro e individual",
            "Uma maneira de agir, pensar e sentir exterior e coercitiva ao indivíduo",
            "Um fenômeno da natureza",
            "Uma invenção tecnológica"
          ],
          correta: 1,
          explicacao: "Fatos sociais são padrões coletivos (normas, valores, costumes) que existem fora do indivíduo e influenciam seu comportamento."
        },
        {
          pergunta: "O que caracteriza a globalização?",
          opcoes: [
            "O isolamento entre países",
            "A integração econômica, cultural e social em escala mundial",
            "O fim do comércio internacional",
            "A redução do uso de tecnologia"
          ],
          correta: 1,
          explicacao: "Globalização é o processo de intensificação das conexões econômicas, culturais e sociais entre diferentes partes do mundo."
        },
        {
          pergunta: "O que é desigualdade social?",
          opcoes: [
            "A distribuição igual de renda e oportunidades",
            "As diferenças de acesso a bens, direitos e oportunidades entre grupos",
            "A ausência de classes sociais",
            "A uniformidade cultural entre grupos"
          ],
          correta: 1,
          explicacao: "Desigualdade social é a distribuição desigual de recursos, direitos e oportunidades entre diferentes grupos de uma sociedade."
        },
        {
          pergunta: "De forma geral, o que a Sociologia estuda?",
          opcoes: [
            "A vida em sociedade e as relações sociais",
            "Apenas fenômenos biológicos",
            "Somente questões econômicas",
            "Fenômenos exclusivamente naturais"
          ],
          correta: 0,
          explicacao: "A Sociologia estuda como os indivíduos se organizam, se relacionam e constroem a vida coletiva em sociedade."
        }
      ]
    }
  ];

  // ---------------------------------------------------------------------
  // ELEMENTOS
  // ---------------------------------------------------------------------
  const quizGrid = document.getElementById("quizGrid");
  const overlay = document.getElementById("quizOverlay");
  const modalTitle = document.getElementById("quizModalTitle");
  const progressBar = document.getElementById("quizProgress");
  const quizBody = document.getElementById("quizBody");
  const closeBtn = document.getElementById("closeQuiz");

  const LETRAS = ["A", "B", "C", "D", "E"];

  let quizAtual = null;
  let perguntaIndex = 0;
  let acertos = 0;

  // ---------------------------------------------------------------------
  // GRID DE CARDS
  // ---------------------------------------------------------------------
  function renderGrid() {
    quizGrid.innerHTML = QUIZZES.map(function (quiz) {
      return (
        '<button type="button" class="text-left bg-white border border-ifsp-borda rounded-xl p-5 flex flex-col gap-2 transition hover:shadow-card hover:border-ifsp-verde" data-quiz="' +
        quiz.id +
        '">' +
        '<span class="text-xs font-bold text-ifsp-verde uppercase tracking-wide">' + quiz.tag + "</span>" +
        '<span class="text-base font-extrabold text-ifsp-escuro">' + quiz.titulo + "</span>" +
        '<span class="text-sm text-ifsp-textoSuave flex-1">' + quiz.resumo + "</span>" +
        '<span class="text-xs font-semibold text-ifsp-verde mt-1">' + quiz.perguntas.length + " perguntas →</span>" +
        "</button>"
      );
    }).join("");

    quizGrid.querySelectorAll("[data-quiz]").forEach(function (card) {
      card.addEventListener("click", function () {
        abrirQuiz(card.getAttribute("data-quiz"));
      });
    });
  }

  // ---------------------------------------------------------------------
  // MODAL DO QUIZ
  // ---------------------------------------------------------------------
  function abrirQuiz(id) {
    quizAtual = QUIZZES.find(function (q) { return q.id === id; });
    if (!quizAtual) return;
    perguntaIndex = 0;
    acertos = 0;
    modalTitle.textContent = quizAtual.titulo;
    overlay.classList.add("open");
    document.body.style.overflow = "hidden";
    renderPergunta();
  }

  function fecharQuiz() {
    overlay.classList.remove("open");
    document.body.style.overflow = "";
    quizAtual = null;
  }

  function renderPergunta() {
    const total = quizAtual.perguntas.length;
    const pct = Math.round((perguntaIndex / total) * 100);
    progressBar.style.width = pct + "%";

    const p = quizAtual.perguntas[perguntaIndex];

    const opcoesHtml = p.opcoes.map(function (opcao, i) {
      return (
        '<button type="button" class="option-btn" data-opcao="' + i + '">' +
        '<span class="option-letter">' + LETRAS[i] + "</span>" +
        "<span>" + opcao + "</span>" +
        "</button>"
      );
    }).join("");

    quizBody.innerHTML =
      '<p class="text-xs font-bold text-ifsp-verde mb-1.5">PERGUNTA ' + (perguntaIndex + 1) + " DE " + total + "</p>" +
      '<h5 class="text-lg font-bold text-ifsp-escuro mb-4">' + p.pergunta + "</h5>" +
      '<div class="flex flex-col gap-2.5" id="opcoesContainer">' + opcoesHtml + "</div>" +
      '<div id="feedbackContainer"></div>';

    document.getElementById("opcoesContainer").querySelectorAll("[data-opcao]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        responder(parseInt(btn.getAttribute("data-opcao"), 10));
      });
    });
  }

  function responder(escolhida) {
    const p = quizAtual.perguntas[perguntaIndex];
    const botoes = document.querySelectorAll("#opcoesContainer [data-opcao]");

    botoes.forEach(function (btn) {
      btn.disabled = true;
      const idx = parseInt(btn.getAttribute("data-opcao"), 10);
      if (idx === p.correta) btn.classList.add("correct");
      else if (idx === escolhida) btn.classList.add("wrong");
    });

    const acertou = escolhida === p.correta;
    if (acertou) acertos++;

    const feedback = document.getElementById("feedbackContainer");
    feedback.innerHTML =
      '<div class="feedback' + (acertou ? "" : " wrong") + '">' +
      "<strong>" + (acertou ? "Isso mesmo! " : "Quase — a resposta certa é a " + LETRAS[p.correta] + ". ") + "</strong>" +
      p.explicacao +
      "</div>" +
      '<button type="button" class="btn-primary mt-4" id="btnProximo">' +
      (perguntaIndex + 1 < quizAtual.perguntas.length ? "Próxima pergunta" : "Ver resultado") +
      "</button>";

    document.getElementById("btnProximo").addEventListener("click", function () {
      perguntaIndex++;
      if (perguntaIndex < quizAtual.perguntas.length) {
        renderPergunta();
      } else {
        renderResultado();
      }
    });
  }

  function renderResultado() {
    progressBar.style.width = "100%";
    const total = quizAtual.perguntas.length;
    quizBody.innerHTML =
      '<div class="text-center py-4">' +
      '<p class="text-sm font-bold text-ifsp-verde mb-1.5">QUIZ CONCLUÍDO</p>' +
      '<h5 class="text-3xl font-extrabold text-ifsp-escuro mb-2">' + acertos + " / " + total + "</h5>" +
      '<p class="text-ifsp-textoSuave mb-6">' + mensagemResultado(acertos, total) + "</p>" +
      '<div class="flex gap-3 justify-center flex-wrap">' +
      '<button type="button" class="btn-outline-light" id="btnRefazer">Refazer quiz</button>' +
      '<button type="button" class="btn-primary" id="btnFecharResultado">Fechar</button>' +
      "</div></div>";

    document.getElementById("btnRefazer").addEventListener("click", function () {
      abrirQuiz(quizAtual.id);
    });
    document.getElementById("btnFecharResultado").addEventListener("click", fecharQuiz);
  }

  function mensagemResultado(acertos, total) {
    const proporcao = acertos / total;
    if (proporcao === 1) return "Mandou muito bem — acertou tudo!";
    if (proporcao >= 0.6) return "Bom domínio do assunto!";
    return "Vale a pena revisar o tema — bora tentar de novo?";
  }

  closeBtn.addEventListener("click", fecharQuiz);
  overlay.addEventListener("click", function (e) {
    if (e.target === overlay) fecharQuiz();
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && overlay.classList.contains("open")) fecharQuiz();
  });

  renderGrid();
})();