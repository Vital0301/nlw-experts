const perguntas = [
    {
      pergunta: "Qual filme ganhou o Oscar de Melhor Filme em 2020?",
      respostas: [
        "1917",
        "Parasita",
        "Coringa",
      ],
      correta: 1
    },
    {
      pergunta: "Quem dirigiu o filme 'A Origem'?",
      respostas: [
        "Christopher Nolan",
        "Quentin Tarantino",
        "Steven Spielberg",
      ],
      correta: 0
    },
    {
      pergunta: "Qual ator interpretou o personagem Wolverine na série de filmes 'X-Men'?",
      respostas: [
        "Chris Hemsworth",
        "Hugh Jackman",
        "Ryan Reynolds",
      ],
      correta: 1
    },
    {
      pergunta: "Qual destes filmes não é baseado em uma obra literária?",
      respostas: [
        "Harry Potter e a Pedra Filosofal",
        "O Senhor dos Anéis: A Sociedade do Anel",
        "Jurassic Park",
      ],
      correta: 2
    },
    {
      pergunta: "Qual é o filme mais lucrativo de todos os tempos nas bilheterias mundiais?",
      respostas: [
        "Vingadores: Ultimato",
        "Avatar",
        "Titanic",
      ],
      correta: 0
    },
    {
      pergunta: "Em qual filme famoso o personagem Forrest Gump diz 'A vida é como uma caixa de chocolates, você nunca sabe o que vai encontrar'?",
      respostas: [
        "Forrest Gump",
        "O Poderoso Chefão",
        "Matrix",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é o título do primeiro filme da saga 'Star Wars' lançado em 1977?",
      respostas: [
        "Star Wars: O Despertar da Força",
        "Star Wars: Uma Nova Esperança",
        "Star Wars: O Império Contra-Ataca",
      ],
      correta: 1
    },
    {
      pergunta: "Quem interpretou o Coringa no filme de 2019?",
      respostas: [
        "Joaquin Phoenix",
        "Heath Ledger",
        "Jack Nicholson",
      ],
      correta: 0
    },
    {
      pergunta: "Qual filme foi dirigido por Martin Scorsese e estrelado por Robert De Niro?",
      respostas: [
        "Pulp Fiction",
        "O Poderoso Chefão",
        "Taxi Driver",
      ],
      correta: 2
    },
    {
      pergunta: "Qual é o filme com a duração mais longa já lançado?",
      respostas: [
        "Gone With the Wind",
        "Lawrence da Arábia",
        "Cleópatra",
      ],
      correta: 2
    }
  ];
  
  const quiz = document.querySelector('#quiz')
  const template = document.querySelector('template')
  
  const corretas = new Set()
  const totalDePerguntas = perguntas.length
  const mostrarTotal = document.querySelector('#acertos span')
  mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  
  // loop ou laço de repetição
  for(const item of perguntas) {
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta
  
    for(let resposta of item.respostas) {
      const dt = quizItem.querySelector('dl dt').cloneNode(true)
      dt.querySelector('span').textContent = resposta
      dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
      dt.querySelector('input').value = item.respostas.indexOf(resposta)
      dt.querySelector('input').onchange = (event) => {
        const estaCorreta = event.target.value == item.correta
  
        corretas.delete(item)
        if(estaCorreta) {
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