const perguntas = [
    {
      pergunta: "O que é JavaScript?",
      respostas: [
        "Uma linguagem de programação para design gráfico",
        "Um sistema operacional para navegadores web",
        "Uma linguagem de programação para desenvolvimento web",
      ],
      correta: 2
    },
    {
      pergunta: "Qual palavra-chave é usada para declarar uma variável em JavaScript?",
      respostas: [
        "let",
        "var",
        "const",
      ],
      correta: 0
    },
    {
      pergunta: "O que é o DOM em JavaScript?",
      respostas: [
        "Um método de criptografia",
        "Uma estrutura de dados para armazenar dados temporários",
        "Um modelo de objeto para representar a estrutura de um documento HTML",
      ],
      correta: 2
    },
    {
      pergunta: "Qual é a função do operador '==' em comparações JavaScript?",
      respostas: [
        "Verificar igualdade de valor e tipo",
        "Verificar igualdade de valor apenas",
        "Verificar igualdade de tipo apenas",
      ],
      correta: 1
    },
    {
      pergunta: "O que é uma função em JavaScript?",
      respostas: [
        "Um bloco de código que é executado automaticamente",
        "Um conjunto de instruções que realiza uma tarefa específica e pode ser reutilizado",
        "Uma variável global",
      ],
      correta: 1
    },
    {
      pergunta: "Como você escreve um comentário de uma linha em JavaScript?",
      respostas: [
        "// Isso é um comentário",
        "/* Isso é um comentário */",
        "<!-- Isso é um comentário -->",
      ],
      correta: 0
    },
    {
      pergunta: "O que é AJAX em JavaScript?",
      respostas: [
        "Um tipo de detergente",
        "Uma técnica para fazer requisições assíncronas no navegador",
        "Uma linguagem de programação",
      ],
      correta: 1
    },
    {
      pergunta: "Qual é a finalidade do método 'querySelector' em JavaScript?",
      respostas: [
        "Selecionar um elemento pelo seu identificador",
        "Selecionar todos os elementos de uma página",
        "Criar um novo elemento no DOM",
      ],
      correta: 0
    },
    {
      pergunta: "O que é um evento em JavaScript?",
      respostas: [
        "Um erro no código",
        "Uma função que retorna um valor",
        "Uma ação detectada pelo navegador que pode ser manipulada",
      ],
      correta: 2
    },
    {
      pergunta: "Qual é a principal diferença entre 'let' e 'const' em declarações de variáveis?",
      respostas: [
        "'let' é usado para variáveis que não podem ser reatribuídas, enquanto 'const' pode ser reatribuído",
        "'const' é usado para variáveis que não podem ser reatribuídas, enquanto 'let' pode ser reatribuído",
        "Não há diferença entre 'let' e 'const'",
      ],
      correta: 1
    },
  ];

  const quiz = document.querySelector('#quiz')
  const template = document.querySelector('template')

  const corretas = new Set()
  const totalDePerguntas = perguntas.length
  const mostrarTotal = document.querySelector('#acertos span')
  mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas

  // loop ou laço de repetição
  for (const item of perguntas) {
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta

    for (let resposta of item.respostas) {
        const dt = quizItem.querySelector('dl dt').cloneNode(true)
        dt.querySelector('span').textContent = resposta
        dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))  
        dt.querySelector('input').value = item.respostas.indexOf(resposta) 
        dt.querySelector('input').onchance = (event) => {
            const estaCorreta = event.target.value == item.correta

            corretas.delete(item)
            if (estaCorreta) {
                corretas.add(item)
            }

            mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
        }
        quizItem.querySelector('dl').appendChild(dt)
    }


    quizItem.querySelector('dl dt').remove()


    // coloca a pergunta na tela
    quiz.appendChild(quizItem)
  }