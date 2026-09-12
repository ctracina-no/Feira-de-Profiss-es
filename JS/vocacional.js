(function () {
  "use strict";

  // ---------------------------------------------------------------------
  // ÁREAS
  // Mesma lógica do teste original: 6 áreas, uma pontuação cada.
  // A ordem das opções em cada pergunta segue sempre esta ordem
  // (opção 1 = tecnologia, 2 = ciencias, 3 = saude, 4 = criatividade,
  //  5 = humanas, 6 = negocios).
  // ---------------------------------------------------------------------
  const AREAS = [
    {
      key: "tecnologia",
      label: "Tecnologia e Exatas",
      descricao: "Você demonstra afinidade com problemas que exigem lógica, análise e raciocínio.",
      areas: ["Computação", "Engenharia", "Matemática", "Tecnologia da Informação", "Ciência de Dados"],
      profissoes: ["Programador", "Engenheiro", "Analista de Sistemas", "Cientista de Dados", "Desenvolvedor de Software"]
    },
    {
      key: "ciencias",
      label: "Ciências e Pesquisa",
      descricao: "Você demonstra curiosidade e interesse em investigar, experimentar e descobrir como o mundo funciona.",
      areas: ["Biologia", "Química", "Física", "Farmácia", "Pesquisa científica"],
      profissoes: ["Biólogo", "Químico", "Físico", "Pesquisador", "Farmacêutico", "Cientista"]
    },
    {
      key: "saude",
      label: "Saúde e Bem-estar",
      descricao: "Você demonstra interesse em pessoas, cuidado, responsabilidade e qualidade de vida.",
      areas: ["Medicina", "Enfermagem", "Psicologia", "Fisioterapia", "Nutrição"],
      profissoes: ["Médico", "Enfermeiro", "Psicólogo", "Fisioterapeuta", "Nutricionista"]
    },
    {
      key: "criatividade",
      label: "Criatividade e Design",
      descricao: "Você demonstra interesse em criar, imaginar, experimentar e desenvolver novas ideias.",
      areas: ["Design", "Arquitetura", "Publicidade", "Audiovisual", "Artes"],
      profissoes: ["Designer", "Arquiteto", "Publicitário", "Ilustrador", "Diretor de Arte", "Designer de Jogos"]
    },
    {
      key: "humanas",
      label: "Humanas e Comunicação",
      descricao: "Você demonstra interesse por pessoas, ideias, sociedade, comunicação e conhecimento.",
      areas: ["Educação", "Direito", "Jornalismo", "História", "Ciências Sociais"],
      profissoes: ["Professor", "Advogado", "Jornalista", "Historiador", "Sociólogo", "Comunicador"]
    },
    {
      key: "negocios",
      label: "Negócios e Liderança",
      descricao: "Você demonstra interesse por planejamento, estratégia, organização e tomada de decisões.",
      areas: ["Administração", "Economia", "Contabilidade", "Empreendedorismo", "Gestão"],
      profissoes: ["Administrador", "Economista", "Contador", "Empreendedor", "Gestor"]
    }
  ];

  // ---------------------------------------------------------------------
  // PERGUNTAS (30) — mesmos textos e mesma ordem de opções do teste original
  // ---------------------------------------------------------------------
  const PERGUNTAS = [
    { pergunta: "Você recebe um problema difícil. O que faria primeiro?", opcoes: ["Tentaria encontrar uma solução lógica", "Pesquisaria para entender a causa", "Pensaria em quem está sendo afetado", "Procuraria uma solução criativa", "Conversaria com outras pessoas", "Organizaria um plano para resolver"] },
    { pergunta: "Qual atividade parece mais interessante?", opcoes: ["Programar ou resolver desafios matemáticos", "Fazer uma experiência científica", "Ajudar alguém com um problema pessoal", "Criar um desenho, vídeo ou projeto", "Debater um assunto social", "Planejar um negócio ou projeto"] },
    { pergunta: "Em um trabalho em grupo, qual função você escolheria?", opcoes: ["Resolver a parte técnica", "Pesquisar informações", "Ajudar os integrantes", "Criar a parte visual", "Apresentar o trabalho", "Organizar o grupo"] },
    { pergunta: "Qual resultado de um trabalho deixaria você mais satisfeito?", opcoes: ["Fazer algo funcionar perfeitamente", "Descobrir algo novo", "Melhorar a vida de alguém", "Criar algo original", "Fazer pessoas entenderem uma ideia", "Fazer um projeto alcançar seus objetivos"] },
    { pergunta: "Qual pergunta desperta mais sua curiosidade?", opcoes: ["Como essa tecnologia funciona?", "Por que esse fenômeno acontece?", "Como o corpo humano reage a isso?", "Como eu poderia criar isso de outra maneira?", "Por que as pessoas agem dessa forma?", "Como transformar isso em uma oportunidade?"] },
    { pergunta: "Qual ambiente de trabalho mais chama sua atenção?", opcoes: ["Computadores e tecnologia", "Laboratórios e centros de pesquisa", "Hospitais ou clínicas", "Estúdios ou ambientes criativos", "Escolas, escritórios ou meios de comunicação", "Empresas e organizações"] },
    { pergunta: "Quando aprende algo novo, você prefere:", opcoes: ["Entender a lógica por trás daquilo", "Investigar e fazer perguntas", "Entender como isso afeta as pessoas", "Experimentar maneiras diferentes de fazer", "Conversar sobre o assunto", "Pensar em como aplicar aquilo na prática"] },
    { pergunta: "Qual projeto você escolheria?", opcoes: ["Desenvolver um aplicativo", "Investigar uma questão científica", "Criar um projeto de saúde", "Produzir um jogo ou animação", "Criar um documentário", "Criar uma empresa"] },
    { pergunta: "O que você mais valoriza em uma profissão?", opcoes: ["Desafios intelectuais", "Possibilidade de descobrir coisas", "Poder ajudar pessoas", "Liberdade para criar", "Poder se comunicar", "Crescimento e liderança"] },
    { pergunta: "Qual desafio você escolheria?", opcoes: ["Corrigir um sistema com defeito", "Resolver um mistério científico", "Encontrar uma solução para ajudar alguém", "Criar algo que nunca existiu", "Defender uma ideia importante", "Transformar uma ideia em um projeto"] },
    { pergunta: "Qual tipo de atividade você preferiria?", opcoes: ["Trabalhar com números e sistemas", "Fazer pesquisas", "Trabalhar diretamente com pessoas", "Produzir conteúdo ou arte", "Escrever, ensinar ou argumentar", "Planejar estratégias"] },
    { pergunta: "Você prefere trabalhar:", opcoes: ["Com sistemas e máquinas", "Com informações e experimentos", "Cuidando e orientando pessoas", "Criando e desenvolvendo ideias", "Conversando e trabalhando em sociedade", "Coordenando projetos e pessoas"] },
    { pergunta: "Qual situação seria mais interessante para você?", opcoes: ["Descobrir por que um programa apresenta erro", "Descobrir por que uma planta não está crescendo", "Acompanhar a recuperação de uma pessoa", "Criar a identidade visual de uma empresa", "Entrevistar alguém sobre um assunto importante", "Planejar o lançamento de uma empresa"] },
    { pergunta: "Quando alguém apresenta uma opinião diferente da sua, você tende a:", opcoes: ["Analisar os argumentos logicamente", "Procurar informações para verificar os fatos", "Tentar entender como a pessoa se sente", "Pensar em uma perspectiva diferente", "Debater e trocar ideias", "Procurar uma solução que funcione para todos"] },
    { pergunta: "Qual destas atividades parece menos cansativa para você?", opcoes: ["Resolver exercícios complexos", "Pesquisar durante bastante tempo", "Conversar e ouvir pessoas", "Criar e modificar projetos", "Ler e discutir assuntos sociais", "Organizar tarefas e metas"] },
    { pergunta: "Imagine que você ganhou bastante dinheiro para realizar um projeto. O que faria?", opcoes: ["Criaria uma tecnologia nova", "Financiaria uma pesquisa", "Criaria um projeto para ajudar pessoas", "Produziria uma obra ou projeto artístico", "Criaria um projeto educacional ou social", "Investiria em um negócio"] },
    { pergunta: "Qual característica você mais gostaria de ter profissionalmente?", opcoes: ["Raciocínio lógico", "Curiosidade científica", "Empatia", "Criatividade", "Boa comunicação", "Liderança"] },
    { pergunta: "Qual situação seria mais gratificante?", opcoes: ["Resolver um problema que ninguém conseguia resolver", "Fazer uma descoberta importante", "Ver alguém melhorar graças ao seu trabalho", "Ver pessoas usando algo que você criou", "Convencer pessoas através de uma boa argumentação", "Ver um projeto crescer graças à sua estratégia"] },
    { pergunta: "Se pudesse fazer um curso livre, escolheria:", opcoes: ["Programação", "Astronomia ou laboratório", "Primeiros socorros ou psicologia", "Fotografia, desenho ou edição", "Filosofia, história ou comunicação", "Empreendedorismo ou administração"] },
    { pergunta: "Você prefere um trabalho que envolva principalmente:", opcoes: ["Computadores e tecnologia", "Pesquisa e conhecimento", "Pessoas e cuidado", "Criação e expressão", "Comunicação e sociedade", "Estratégia e negócios"] },
    { pergunta: "Quando precisa aprender algo difícil, qual estratégia parece mais natural?", opcoes: ["Dividir o problema em partes menores", "Pesquisar diferentes fontes", "Pedir ajuda e conversar sobre o assunto", "Tentar aprender de uma maneira diferente", "Explicar o conteúdo para alguém", "Criar um cronograma"] },
    { pergunta: "Qual tipo de problema mais despertaria sua vontade de trabalhar?", opcoes: ["Um problema tecnológico", "Um problema científico", "Um problema relacionado à saúde", "Um problema de criação ou design", "Um problema social", "Um problema empresarial"] },
    { pergunta: "Qual destas frases combina mais com você?", opcoes: ["Gosto de descobrir como as coisas funcionam.", "Quero entender o mundo através de evidências.", "Gosto de ajudar quem precisa.", "Sempre tenho ideias diferentes.", "Gosto de conversar e trocar ideias.", "Gosto de transformar ideias em resultados."] },
    { pergunta: "Qual profissão você teria mais curiosidade de experimentar por um dia?", opcoes: ["Desenvolvedor de software", "Cientista", "Médico ou psicólogo", "Designer", "Jornalista ou professor", "Empresário ou administrador"] },
    { pergunta: "Qual tipo de reconhecimento profissional seria mais importante para você?", opcoes: ["Ser reconhecido pela capacidade técnica", "Ser reconhecido por uma descoberta", "Ser reconhecido por ajudar pessoas", "Ser reconhecido pela criatividade", "Ser reconhecido pela comunicação", "Ser reconhecido pela liderança"] },
    { pergunta: "Qual dessas atividades você faria mesmo sem receber uma nota?", opcoes: ["Resolver desafios de lógica", "Fazer pesquisas por curiosidade", "Ajudar alguém com um problema", "Criar desenhos, vídeos ou histórias", "Ler ou discutir assuntos interessantes", "Planejar um projeto"] },
    { pergunta: "Imagine seu emprego ideal. Qual característica seria indispensável?", opcoes: ["Trabalhar com problemas complexos", "Ter espaço para investigar", "Ter contato humano significativo", "Poder criar coisas novas", "Poder expressar ideias", "Ter autonomia para tomar decisões"] },
    { pergunta: "Qual tipo de impacto você gostaria de causar?", opcoes: ["Criar tecnologias úteis", "Aumentar o conhecimento humano", "Melhorar a vida e a saúde das pessoas", "Inspirar através da criatividade", "Melhorar a sociedade através da comunicação", "Criar oportunidades e empregos"] },
    { pergunta: "Se você pudesse resolver apenas um destes problemas, qual escolheria?", opcoes: ["Melhorar um sistema tecnológico", "Encontrar a causa de uma doença ou fenômeno", "Ajudar pessoas em situação difícil", "Criar uma solução inovadora", "Resolver um problema social", "Melhorar a organização de uma empresa"] },
    { pergunta: "Pensando no futuro, qual destas possibilidades mais anima você?", opcoes: ["Desenvolver uma tecnologia inovadora", "Participar de uma grande descoberta", "Trabalhar transformando a vida das pessoas", "Criar produtos e experiências originais", "Trabalhar com pessoas, conhecimento e sociedade", "Liderar projetos e construir algo grande"] }
  ];

  const LETRAS = ["A", "B", "C", "D", "E", "F"];

  // ---------------------------------------------------------------------
  // ELEMENTOS
  // ---------------------------------------------------------------------
  const overlay = document.getElementById("vocOverlay");
  const progressBar = document.getElementById("vocProgress");
  const vocBody = document.getElementById("vocBody");
  const closeBtn = document.getElementById("closeVoc");
  const startBtn = document.getElementById("btnStartVoc");

  let perguntaIndex = 0;
  let pontos = {};

  function resetPontos() {
    pontos = {};
    AREAS.forEach(function (a) { pontos[a.key] = 0; });
  }

  // ---------------------------------------------------------------------
  // FLUXO
  // ---------------------------------------------------------------------
  function abrirTeste() {
    perguntaIndex = 0;
    resetPontos();
    overlay.classList.add("open");
    document.body.style.overflow = "hidden";
    renderPergunta();
  }

  function fecharTeste() {
    overlay.classList.remove("open");
    document.body.style.overflow = "";
  }

  function renderPergunta() {
    const total = PERGUNTAS.length;
    progressBar.style.width = Math.round((perguntaIndex / total) * 100) + "%";

    const p = PERGUNTAS[perguntaIndex];
    const opcoesHtml = p.opcoes.map(function (opcao, i) {
      return (
        '<button type="button" class="option-btn" data-area="' + AREAS[i].key + '">' +
        '<span class="option-letter">' + LETRAS[i] + "</span>" +
        "<span>" + opcao + "</span>" +
        "</button>"
      );
    }).join("");

    vocBody.innerHTML =
      '<p class="text-xs font-bold text-ifsp-verde mb-1.5">PERGUNTA ' + (perguntaIndex + 1) + " DE " + total + "</p>" +
      '<h5 class="text-lg font-bold text-ifsp-escuro mb-4">' + p.pergunta + "</h5>" +
      '<div class="flex flex-col gap-2.5">' + opcoesHtml + "</div>";

    vocBody.querySelectorAll("[data-area]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        pontos[btn.getAttribute("data-area")]++;
        perguntaIndex++;
        if (perguntaIndex < total) {
          renderPergunta();
        } else {
          renderResultado();
        }
      });
    });
  }

  function renderResultado() {
    progressBar.style.width = "100%";

    const total = PERGUNTAS.length;
    const ranking = AREAS.slice().sort(function (a, b) { return pontos[b.key] - pontos[a.key]; });
    const vencedora = ranking[0];

    const barrasHtml = ranking.map(function (area) {
      const pct = Math.round((pontos[area.key] / total) * 100);
      const isTop = area.key === vencedora.key;
      return (
        '<div class="bar-row' + (isTop ? " top" : "") + '">' +
        '<span class="bar-label">' + area.label + "</span>" +
        '<div class="bar-track"><div class="bar-fill" style="width:' + pct + '%"></div></div>' +
        '<span class="bar-pct">' + pontos[area.key] + "/" + total + "</span>" +
        "</div>"
      );
    }).join("");

    const areasHtml = vencedora.areas.map(function (a) { return "<li>" + a + "</li>"; }).join("");
    const profissoesHtml = vencedora.profissoes.map(function (p) { return "<li>" + p + "</li>"; }).join("");

    vocBody.innerHTML =
      '<p class="text-xs font-bold text-ifsp-verde mb-1.5">SEU PERFIL PRINCIPAL</p>' +
      '<h5 class="text-2xl font-extrabold text-ifsp-escuro mb-1">' + vencedora.label + "</h5>" +
      '<p class="text-ifsp-textoSuave mb-6">' + vencedora.descricao + "</p>" +
      '<div class="mb-6">' + barrasHtml + "</div>" +
      '<div class="bg-ifsp-suave rounded-[10px] p-4 mb-4 grid grid-cols-1 sm:grid-cols-2 gap-4">' +
      '<div><p class="text-sm font-bold text-ifsp-escuro mb-1.5">Possíveis áreas</p>' +
      '<ul class="list-disc pl-5 text-sm text-ifsp-texto space-y-0.5">' + areasHtml + "</ul></div>" +
      '<div><p class="text-sm font-bold text-ifsp-escuro mb-1.5">Exemplos de profissões</p>' +
      '<ul class="list-disc pl-5 text-sm text-ifsp-texto space-y-0.5">' + profissoesHtml + "</ul></div>" +
      "</div>" +
      '<p class="text-xs text-ifsp-textoSuave mb-6">Este teste não determina qual profissão você deve seguir — é só uma ferramenta de autoconhecimento. Pesquise sobre as profissões, converse com profissionais e conheça os cursos antes de tomar uma decisão.</p>' +
      '<div class="flex gap-3 justify-center flex-wrap">' +
      '<button type="button" class="btn-outline-light" id="btnRefazerVoc">Refazer teste</button>' +
      '<button type="button" class="btn-primary" id="btnFecharVoc">Fechar</button>' +
      "</div>";

    document.getElementById("btnRefazerVoc").addEventListener("click", abrirTeste);
    document.getElementById("btnFecharVoc").addEventListener("click", fecharTeste);
  }

  startBtn.addEventListener("click", abrirTeste);
  closeBtn.addEventListener("click", fecharTeste);
  overlay.addEventListener("click", function (e) {
    if (e.target === overlay) fecharTeste();
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && overlay.classList.contains("open")) fecharTeste();
  });
})();