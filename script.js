const listQuestions = [
    {
      question: "Quem é o sensei da equipe 7, composta por Naruto, Sasuke e Sakura?",
      answers:[
        "Kakashi Hatake",
        "Jiraiya",
        "Tsunade",
        "Hiruzen Sarutobi"
      ],
      correct: 0
    },
    {
      question: "Qual é o sobrenome de Naruto?",
      answers:[
        "Uchiha",
        "Hatake",
        "Namikaze",
        "Hyuga"
      ],
      correct: 2
    },
    {
      question: "Qual é o nome do clã ao qual Sasuke pertence?",
      answers:[
        "Uzumaki",
        "Hyuga",
        "Uchiha",
        "Nara"
      ],
      correct: 2
    },
    {
      question: "Qual é o nome do professor responsável pela turma de Naruto na Academia Ninja?",
      answers:[
        "Iruka Umino",
        "Shikamaru Nara",
        "Kurenai Yuhi",
        "Asuma Sarutobi"
      ],
      correct: 0
    },
    {
      question: "Quem é o mentor de Jiraiya e um dos Três Sannin lendários?",
      answers:[
        "Minato Namikaze",
        "Hiruzen Sarutobi",
        "Tobirama Senju",
        "Orochimaru"
      ],
      correct: 1
    },
    {
      question: "Qual é o nome da aldeia ninja onde Naruto e seus companheiros vivem?",
      answers:[
        "Vila Oculta da Folha",
        "Vila Oculta da Névoa",
        "Vila Oculta da Areia",
        "Vila Oculta da Pedra"
      ],
      correct: 0
    },
    {
      question: "Quem é o pai de Sasuke Uchiha?",
      answers:[
        "Itachi Uchiha",
        "Fugaku Uchiha",
        "Madara Uchiha",
        "Obito Uchiha"
      ],
      correct: 1
    },
    {
      question: "Qual é o nome do animal que é parceiro de Naruto e é uma espécie de sapo?",
      answers:[
        "Katsuyu",
        "Gamabunta",
        "Gamakichi",
        "Pakkun"
      ],
      correct: 2
    },
    {
      question: "Quem é o irmão mais velho de Gaara?",
      answers:[
        "Kankuro",
        "Temari",
        "Orochimaru",
        "Itachi Uchiha"
      ],
      correct: 1
    },
    {
      question: "Quem é o líder da Akatsuki, uma organização criminosa de ninjas renegados?",
      answers:[
        "Orochimaru",
        "Madara Uchiha",
        "Pain (Nagato)",
        "Obito Uchiha"
      ],
      correct: 2
    }
  ];
  
  const quiz = document.querySelector('#quiz');
  const template = document.querySelector('template');
  
  const answersCorrects = new Set();
  const totalQuestions = listQuestions.length;
  const showTotalAnswersCorrects = document.querySelector('#acertos span');
  showTotalAnswersCorrects.textContent = answersCorrects.size + ' de ' + totalQuestions;


  for (const item of listQuestions) {
    const quizItem = template.content.cloneNode(true);
    quizItem.querySelector('h3').textContent = item.question;

    for (let answer of item.answers) {
        const dt = quizItem.querySelector('dl dt').cloneNode(true);
        dt.querySelector('span').textContent = answer;
        dt.querySelector('input').setAttribute('name', 'question-' + listQuestions.indexOf(item));
        dt.querySelector('input').value = item.answers.indexOf(answer);
        dt.querySelector('input').onchange = (event) => {
          const isCorrect = event.target.value == item.correct;

          answersCorrects.delete(item);
          if (isCorrect) {
            
            answersCorrects.add(item);
          }
          
          if (answersCorrects.size === 10) {            
            alert("Parabéns, fez o mínimo acertando as 10 perguntas")            
          }
          
          showTotalAnswersCorrects.textContent = answersCorrects.size + ' de ' + totalQuestions;
        }

        quizItem.querySelector('dl').appendChild(dt);
    }
    quizItem.querySelector('dl dt').remove();
    

    quiz.appendChild(quizItem);
  }
  
  