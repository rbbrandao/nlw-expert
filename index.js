const perguntas = [
    {
      pergunta: "O que é JavaScript?",
      respostas: [
        "Uma linguagem de programação de servidor",
        "Uma linguagem de marcação",
        "Uma linguagem de programação de alto nível",
      ],
      correta: 2
    },
    {
      pergunta: "Qual é a principal finalidade do operador 'typeof' em JavaScript?",
      respostas: [
        "Comparar tipos de dados",
        "Retornar o tipo de dado de uma expressão",
        "Executar uma operação de multiplicação",
      ],
      correta: 1
    },
    {
      pergunta: "O que é uma variável em JavaScript?",
      respostas: [
        "Um valor constante",
        "Um contêiner para armazenar dados",
        "Um operador aritmético",
      ],
      correta: 1
    },
    {
      pergunta: "Como se declara uma função em JavaScript?",
      respostas: [
        "função minhaFuncao()",
        "declare função minhaFuncao()",
        "function minhaFuncao()",
      ],
      correta: 2
    },
    {
      pergunta: "O que é um objeto em JavaScript?",
      respostas: [
        "Um tipo de dado primitivo",
        "Um bloco de código executável",
        "Uma coleção de pares chave-valor",
      ],
      correta: 2
    },
    {
      pergunta: "Qual é a diferença entre 'let' e 'const' na declaração de variáveis?",
      respostas: [
        "Não há diferença, são sinônimos",
        "'let' é usado para variáveis mutáveis, 'const' para constantes",
        "'const' é usado para variáveis mutáveis, 'let' para constantes",
      ],
      correta: 1
    },
    {
      pergunta: "O que é o evento 'click' em JavaScript?",
      respostas: [
        "Um tipo de dado",
        "Uma função incorporada",
        "Uma ação que ocorre quando um elemento é clicado",
      ],
      correta: 2
    },
    {
      pergunta: "Como se faz um comentário de linha única em JavaScript?",
      respostas: [
        "// Comentário aqui",
        "/* Comentário aqui */",
        "' Comentário aqui",
      ],
      correta: 0
    },
    {
      pergunta: "O que é o método 'split()' em JavaScript?",
      respostas: [
        "Um método para unir strings",
        "Um método para dividir uma string em um array",
        "Um método para converter uma string em minúsculas",
      ],
      correta: 1
    },
    {
      pergunta: "Qual é a função do operador ternário em JavaScript?",
      respostas: [
        "Atribuir um valor a uma variável",
        "Realizar uma operação ternária",
        "Criar uma condição com base em uma expressão",
      ],
      correta: 2
    }
  ];
  
  const quiz = document.querySelector('#quiz')
  const template = document.querySelector('template')
  const quizItem = template.content.cloneNode(true)
  
  const corretas = new Set()
  const totalDePerguntas = perguntas.length
  const mostrarTotal = document.querySelector('#acertos span')
  mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  
  for(let item of perguntas) {
  const quizItem =  template.content.cloneNode(true)
  //Modificando o H3
  quizItem.querySelector('h3').textContent = item.pergunta
  
   for(let resposta of item.respostas){
     const dt = quizItem.querySelector('dl dt').cloneNode(true)
      dt.querySelector('span').textContent = resposta
      dt.querySelector('input').setAttribute('name',
   'pergunta-' + perguntas.indexOf(item))
       dt.querySelector('input').value = item.respostas.indexOf(resposta)
        dt.querySelector('input').onchange = (event) => {
          const estaCorreta = event.target.value == item.correta
         
          corretas.delete(item)
          if(estaCorreta){
            corretas.add(item)
         }
         mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
        }
  
      quizItem.querySelector('dl').appendChild(dt)
   }
   quizItem.querySelector('dl dt').remove()
  
  //Coloca a pergunta na tela - esta linha é sempre no final
  quiz.appendChild(quizItem)
  }