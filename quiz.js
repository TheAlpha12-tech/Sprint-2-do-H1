const questions = [
    {
        question: "Qual é o objetivo principal de uma senha forte?",
        options: [
            "Para decorar o login",
            "Para proteger contra acesso não autorizado",
            "Para aumentar a velocidade do sistema",
            "Para reduzir a memória do computador"
        ],
        correctAnswer: 1,
        explanation: "Senhas fortes têm como principal objetivo proteger contra acessos não autorizados aos seus dados e contas."
    },
    {
        question: "O que é um 'firewall'?",
        options: [
            "Um tipo de vírus que danifica arquivos",
            "Um tipo de software que bloqueia acesso não autorizado à rede",
            "Um tipo de atualização de sistema operacional",
            "Um tipo de conexão de internet mais rápida"
        ],
        correctAnswer: 1,
        explanation: "Firewall é um sistema de segurança que monitora e controla o tráfego de rede, bloqueando acessos não autorizados."
    },
    {
        question: "Qual é o objetivo do 'backup' de dados?",
        options: [
            "Para apagar arquivos antigos",
            "Para reduzir o espaço em disco",
            "Para aumentar a velocidade do sistema",
            "Para proteger contra perda de dados devido a falhas ou ataques cibernéticos"
        ],
        correctAnswer: 3,
        explanation: "Backups são cópias de segurança dos dados importantes, que podem ser restaurados em caso de perda, falhas ou ataques."
    },
    {
        question: "O que é um ataque de phishing e como pode ser evitado?",
        options: [
            "Um ataque de phishing é um tipo de malware que infecta o computador, e pode ser evitado com um antivírus atualizado.",
            "Um ataque de phishing é uma tentativa de obter informações confidenciais por meio de e-mails ou mensagens fraudulentas, e pode ser evitado com educação e cautela ao clicar em links ou fornecer informações.",
            "Um ataque de phishing é um tipo de ataque de negação de serviço, e pode ser evitado com firewalls e sistemas de detecção de intrusão.",
            "Um ataque de phishing é um tipo de ataque de força bruta, e pode ser evitado com senhas fortes e autenticação de dois fatores."
        ],
        correctAnswer: 1,
        explanation: "Phishing é um tipo de fraude onde criminosos tentam obter informações sensíveis se passando por fontes confiáveis. A melhor defesa é a educação e cautela ao interagir com mensagens suspeitas."
    },
    {
        question: "Quais são as principais diferenças entre um vírus e um malware?",
        options: [
            "Um vírus é um tipo de malware que se replica automaticamente, enquanto o malware é um termo mais amplo que inclui todos os tipos de software malicioso.",
            "Um vírus é um tipo de malware que é mais perigoso do que o malware.",
            "Um vírus é um tipo de software legítimo, enquanto o malware é um tipo de software malicioso.",
            "Um vírus e um malware são a mesma coisa."
        ],
        correctAnswer: 0,
        explanation: "Vírus é um tipo específico de malware que tem a capacidade de se autorreplicar, enquanto malware é um termo genérico para qualquer software malicioso."
    },
    {
        question: "Como funciona um ataque de ransomware e quais são as consequências para as vítimas?",
        options: [
            "Um ataque de ransomware é um tipo de ataque que rouba informações confidenciais, e as consequências incluem perda de dados.",
            "Um ataque de ransomware é um tipo de ataque que criptografa os dados da vítima e exige um resgate para descriptografá-los, e as consequências incluem perda de dados e pagamento de resgate.",
            "Um ataque de ransomware é um tipo de ataque que derruba o sistema, e as consequências incluem perda de produtividade.",
            "Um ataque de ransomware é um tipo de ataque que não tem consequências graves."
        ],
        correctAnswer: 1,
        explanation: "Ransomware criptografa os arquivos da vítima e exige pagamento (resgate) para liberar o acesso aos dados. Além do prejuízo financeiro, pode causar perda permanente de dados."
    },
    {
        question: "O que é autenticação de dois fatores (2FA) e por que é importante para a segurança online?",
        options: [
            "A autenticação de dois fatores é um processo que exige apenas uma senha para acessar uma conta, e é importante para a segurança online porque é fácil de usar.",
            "A autenticação de dois fatores é um processo que exige uma senha e um código de verificação enviado para o telefone ou e-mail, e é importante para a segurança online porque adiciona uma camada extra de segurança.",
            "A autenticação de dois fatores é um processo que exige apenas um código de verificação enviado para o telefone ou e-mail, e é importante para a segurança online porque é mais seguro do que as senhas.",
            "A autenticação de dois fatores é um processo que não é necessário para a segurança online."
        ],
        correctAnswer: 1,
        explanation: "2FA adiciona uma segunda camada de segurança além da senha, tornando muito mais difícil para invasores acessarem suas contas mesmo que descubram sua senha."
    },
    {
        question: "Qual dos itens abaixo é um exemplo de autenticação multifator (MFA)?",
        options: [
            "Login com usuário e senha",
            "Senha combinada com data de nascimento",
            "Impressão digital e senha",
            "Pergunta secreta e número de telefone"
        ],
        correctAnswer: 2,
        explanation: "MFA combina dois ou mais fatores de autenticação independentes (algo que você sabe, algo que você tem ou algo que você é). Impressão digital (biometria) + senha é um exemplo clássico."
    },
    {
        question: "Qual é o principal objetivo da criptografia em segurança da informação?",
        options: [
            "Garantir o acesso remoto seguro",
            "Impedir o uso de softwares não autorizados",
            "Ocultar informações durante a transmissão e armazenamento",
            "Eliminar todos os tipos de malware"
        ],
        correctAnswer: 2,
        explanation: "A criptografia transforma dados em formato ilegível para quem não tem a chave de decodificação, protegendo a confidencialidade das informações."
    },
    {
        question: "O que caracteriza um ataque do tipo 'phishing'?",
        options: [
            "A interceptação de dados durante uma conexão",
            "O envio de e-mails falsos para enganar o usuário",
            "A instalação de software legítimo com funcionalidades maliciosas",
            "O bloqueio de sistemas com exigência de resgate"
        ],
        correctAnswer: 1,
        explanation: "Phishing envolve enganar a vítima para que revele informações sensíveis, geralmente através de e-mails ou mensagens que parecem legítimas."
    },
    {
        question: "Se sua senha fosse uma fechadura, qual seria mais segura: '123456' ou 'M3uC4ch0rr012024'? Por quê?",
        options: [
            "'123456' porque é mais fácil de lembrar",
            "'123456' porque é mais curta e prática",
            "'M3uC4ch0rr012024' porque é mais longa e complexa",
            "Ambas são igualmente seguras"
        ],
        correctAnswer: 2,
        explanation: "Senhas longas e complexas com combinação de letras, números e símbolos são muito mais difíceis de serem quebradas por ataques de força bruta."
    },
    {
        question: "O que você faria se recebesse um e-mail dizendo que ganhou um prêmio, mas nunca participou de nenhum sorteio?",
        options: [
            "Clicaria no link para reivindicar o prêmio",
            "Responderia ao e-mail pedindo mais informações",
            "Ignoraria e deletaria o e-mail sem clicar em nada",
            "Encaminharia para amigos para ver se é legítimo"
        ],
        correctAnswer: 2,
        explanation: "E-mails inesperados sobre prêmios são uma tática comum de phishing. A ação mais segura é não interagir com a mensagem."
    },
    {
        question: "Se um vírus de computador fosse um vilão de filme, qual seria sua missão e como você o derrotaria?",
        options: [
            "Sua missão seria roubar dados, e você o derrotaria com um super antivírus",
            "Sua missão seria dominar o mundo, e você o derrotaria desconectando a internet",
            "Sua missão seria causar caos, e você o derrotaria com backups e sistemas atualizados",
            "Sua missão seria ser famoso, e você o derrotaria ignorando-o"
        ],
        correctAnswer: 2,
        explanation: "Assim como vilões, vírus tentam causar danos. A melhor defesa é prevenção com backups regulares e sistemas atualizados."
    }
];
let currentQuestionIndex = 0;
let score = 0;
let quizStarted = false;
const startScreen = document.getElementById('start-screen');
const quizScreen = document.getElementById('quiz-screen');
const resultsScreen = document.getElementById('results-screen');
const startBtn = document.getElementById('start-btn');
const nextBtn = document.getElementById('next-btn');
const restartBtn = document.getElementById('restart-btn');
const questionsContainer = document.getElementById('questions-container');
const questionCounter = document.getElementById('question-counter');
const scoreText = document.getElementById('correct-answers');
const totalQuestions = document.getElementById('total-questions');
const feedbackText = document.getElementById('feedback-message');
const progressBar = document.querySelector('.progress-bar');
startBtn.addEventListener('click', startQuiz);
nextBtn.addEventListener('click', nextQuestion);
restartBtn.addEventListener('click', restartQuiz);
function startQuiz() {
    quizStarted = true;
    startScreen.style.display = 'none';
    quizScreen.style.display = 'block';
    currentQuestionIndex = 0;
    score = 0;
    showQuestion();
}

function showQuestion() {
    if (!quizStarted) return;
    
    const currentQuestion = questions[currentQuestionIndex];
    questionsContainer.innerHTML = '';
    const questionBox = document.createElement('div');
    questionBox.className = 'question-box';
    const questionText = document.createElement('h2');
    questionText.className = 'question-text';
    questionText.textContent = currentQuestion.question;
    questionBox.appendChild(questionText);
    const optionsContainer = document.createElement('div');
    optionsContainer.className = 'options-container';
    currentQuestion.options.forEach((option, index) => {
        const optionBtn = document.createElement('div');
        optionBtn.className = 'option';
        optionBtn.textContent = option;
        
        optionBtn.addEventListener('click', () => {
            if (!optionBtn.classList.contains('selected')) {
                selectOption(index, optionBtn);
            }
        });
        
        optionsContainer.appendChild(optionBtn);
    });
    
    questionBox.appendChild(optionsContainer);
    questionsContainer.appendChild(questionBox);
    updateProgress();
    nextBtn.style.display = 'none';
}

function selectOption(selectedIndex, selectedElement) {
    const currentQuestion = questions[currentQuestionIndex];
    const options = document.querySelectorAll('.option');
    options.forEach(option => {
        option.classList.remove('selected', 'correct', 'incorrect');
    });
    selectedElement.classList.add('selected');
    if (selectedIndex === currentQuestion.correctAnswer) {
        selectedElement.classList.add('correct');
        score++;
    } else {
        selectedElement.classList.add('incorrect');
        options[currentQuestion.correctAnswer].classList.add('correct');
    }
    nextBtn.style.display = 'block';
}

function nextQuestion() {
    currentQuestionIndex++;
    
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showResults();
    }
}

function showResults() {
    quizScreen.style.display = 'none';
    resultsScreen.style.display = 'block';
    
    scoreText.textContent = score;
    totalQuestions.textContent = questions.length;
    const percentage = (score / questions.length) * 100;
    if (percentage >= 80) {
        feedbackText.textContent = "Excelente! Você é um expert em segurança digital!";
    } else if (percentage >= 60) {
        feedbackText.textContent = "Bom trabalho! Você tem um bom conhecimento.";
    } else if (percentage >= 40) {
        feedbackText.textContent = "Você sabe o básico, mas pode melhorar!";
    } else {
        feedbackText.textContent = "Hora de estudar mais sobre segurança da informação!";
    }
}

function restartQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    resultsScreen.style.display = 'none';
    startQuiz();
}

function updateProgress() {
    const progressPercent = ((currentQuestionIndex + 1) / questions.length) * 100;
    progressBar.style.width = `${progressPercent}%`;
    questionCounter.textContent = `Pergunta ${currentQuestionIndex + 1}/${questions.length}`;
}
document.addEventListener('DOMContentLoaded', () => {
    totalQuestions.textContent = questions.length;
});