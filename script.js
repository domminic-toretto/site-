// Dados do projeto
const questions = [
    {
        question: "Qual é a quantidade recomendada de água que uma pessoa deve beber por dia?",
        answers: ["1 litro", "2-3 litros", "5 litros", "500ml"],
        correct: 1,
        explanation: "A quantidade recomendada é de 2-3 litros por dia, variando conforme idade, peso e atividade física."
    },
    {
        question: "Qual dessas práticas contribui MAIS para a conservação da água?",
        answers: [
            "Tomar banhos longos",
            "Deixar a torneira aberta ao escovar os dentes", 
            "Reutilizar a água da máquina de lavar",
            "Regar plantas no meio do dia"
        ],
        correct: 2,
        explanation: "Reutilizar a água da máquina de lavar para outras atividades é uma excelente forma de conservação."
    },
    {
        question: "O que é saneamento básico?",
        answers: [
            "Apenas o tratamento de água potável",
            "Água, esgoto, resíduos sólidos e drenagem urbana",
            "Só a coleta de lixo",
            "Apenas a construção de banheiros"
        ],
        correct: 1,
        explanation: "Saneamento básico inclui abastecimento de água, esgotamento sanitário, limpeza urbana/resíduos sólidos e drenagem."
    },
    {
        question: "Qual é a principal causa da poluição das águas?",
        answers: [
            "Chuvas ácidas",
            "Descarte inadequado de esgoto e resíduos",
            "Evaporação da água",
            "Peixes nos rios"
        ],
        correct: 1,
        explanation: "O descarte inadequado de esgoto e resíduos é a principal causa de poluição hídrica."
    },
    {
        question: "Como podemos identificar água contaminada?",
        answers: [
            "Apenas pela cor",
            "Só pelo cheiro",
            "Análises laboratoriais e características físicas",
            "Somente bebendo"
        ],
        correct: 2,
        explanation: "A identificação de água contaminada requer análises laboratoriais e observação de características como cor, odor e turbidez."
    },
    {
        question: "Em que ano foi iniciado o projeto Guardiãs das Águas?",
        answers: [
            "2018",
            "2020",
            "2022",
            "2024"
        ],
        correct: 1,
        explanation: "O projeto Guardiãs das Águas foi iniciado em 2020 com foco na educação ambiental e protagonismo feminino na ciência."
    },
    {
        question: "Qual é uma forma eficiente de reutilizar água em casa?",
        answers: [
            "Usar água da máquina de lavar para regar plantas",
            "Deixar a torneira pingando",
            "Tomar banhos mais longos",
            "Lavar o carro todos os dias"
        ],
        correct: 0,
        explanation: "A água da máquina de lavar (do enxágue) pode ser reutilizada para regar plantas e limpar áreas externas."
    },
    {
        question: "Quantos estados brasileiros são atendidos pelo projeto Guardiãs das Águas?",
        answers: [
            "2 estados",
            "3 estados", 
            "4 estados",
            "5 estados"
        ],
        correct: 2,
        explanation: "O projeto atende 4 estados brasileiros: Ceará, Sergipe, Mato Grosso, Rio Grande do Sul e Minas Gerais."
    },
    {
        question: "Qual das opções NÃO faz parte do saneamento básico?",
        answers: [
            "Abastecimento de água potável",
            "Coleta e tratamento de esgoto",
            "Energia elétrica",
            "Manejo de resíduos sólidos"
        ],
        correct: 2,
        explanation: "Energia elétrica não faz parte do saneamento básico. Os componentes são: água, esgoto, resíduos sólidos e drenagem urbana."
    }
];

const projects = [
    {
        state: "CE",
        city: "Juazeiro do Norte",
        title: "Monitoramento da Qualidade da Água",
        description: "Projeto de análise da qualidade da água em reservatórios locais utilizando métodos científicos e tecnologia.",
        image: "https://images.unsplash.com/photo-1576086213369-97a306d36557?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
        bgColor: "bg-primary-purple"
    },
    {
        state: "SE",
        city: "Aracaju",
        title: "Sistema de Tratamento Sustentável",
        description: "Desenvolvimento de sistema de tratamento de água usando materiais locais e técnicas sustentáveis.",
        image: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
        bgColor: "bg-blue-1"
    },
    {
        state: "MT",
        city: "Cuiabá",
        title: "Captação de Água da Chuva",
        description: "Implementação de sistema de captação e aproveitamento de água pluvial em ambiente escolar.",
        image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
        bgColor: "bg-blue-2"
    },
    {
        state: "RS",
        city: "Rio Grande",
        title: "Educação para Conservação",
        description: "Programa educativo sobre conservação da água para crianças do ensino fundamental.",
        image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
        bgColor: "bg-blue-3"
    },
    {
        state: "MG",
        city: "Uberlândia",
        title: "Gestão de Resíduos",
        description: "Projeto integrado de gestão de resíduos sólidos e tratamento de efluentes domésticos.",
        image: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
        bgColor: "bg-primary-purple"
    },
    {
        state: "MG",
        city: "Uberaba",
        title: "Campanha de Conscientização",
        description: "Desenvolvimento de campanha educativa sobre uso consciente da água na comunidade local.",
        image: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
        bgColor: "bg-purple-light"
    }
];

const teamMembers = [
    {
        name: "Dra. Maria Silva",
        role: "Coordenadora Geral",
        description: "Especialista em recursos hídricos e educação ambiental",
        image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400"
    },
    {
        name: "Dr. João Santos",
        role: "Especialista em Saneamento",
        description: "Engenheiro sanitarista com foco em educação",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400"
    },
    {
        name: "Ana Oliveira",
        role: "Educadora Ambiental",
        description: "Pedagoga especializada em educação científica",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400"
    },
    {
        name: "Carlos Tech",
        role: "Coordenador de Tecnologia",
        description: "Desenvolvedor de soluções educacionais digitais",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400"
    }
];

const resources = [
    {
        title: "Cartilhas Educativas",
        description: "Materiais didáticos sobre saneamento básico e conservação da água",
        icon: "fas fa-book",
        bgColor: "gradient-purple-dark",
        buttonText: "Download",
        buttonColor: "bg-white text-primary-purple hover:bg-blue-50"
    },
    {
        title: "Vídeos Educativos",
        description: "Conteúdo audiovisual para diferentes faixas etárias",
        icon: "fas fa-video",
        bgColor: "gradient-blue-1-2",
        buttonText: "Assistir",
        buttonColor: "bg-white text-blue-1 hover:bg-blue-50"
    },
    {
        title: "Experimentos",
        description: "Roteiros de experimentos práticos para sala de aula",
        icon: "fas fa-flask",
        bgColor: "gradient-blue-2-3",
        buttonText: "Explorar",
        buttonColor: "bg-white text-blue-2 hover:bg-blue-50"
    },
    {
        title: "Agenda de Eventos",
        description: "Workshops, palestras e atividades educativas",
        icon: "fas fa-calendar-alt",
        bgColor: "border-primary-purple",
        textColor: "text-primary-purple",
        buttonText: "Ver Agenda",
        buttonColor: "bg-primary-purple text-white hover:bg-purple-dark"
    },
    {
        title: "Blog & Notícias",
        description: "Artigos e atualizações sobre o projeto",
        icon: "fas fa-newspaper",
        bgColor: "border-blue-1",
        textColor: "text-blue-1",
        buttonText: "Ler Mais",
        buttonColor: "bg-blue-1 text-white hover:bg-blue-2"
    },
    {
        title: "Contatos Úteis",
        description: "Órgãos ambientais e canais de denúncia",
        icon: "fas fa-phone",
        bgColor: "border-blue-2",
        textColor: "text-blue-2",
        buttonText: "Ver Lista",
        buttonColor: "bg-blue-2 text-white hover:bg-blue-3"
    }
];

// Variáveis do jogo
let gameState = 'start';
let currentQuestion = 0;
let score = 0;
let selectedAnswer = null;
let showFeedback = false;

// Funções de utilidade
function scrollToSection(sectionId) {
    const element = document.querySelector(sectionId);
    if (element) {
        element.scrollIntoView({ behavior: "smooth" });
    }
}

function toggleMobileMenu() {
    const mobileMenu = document.getElementById('mobile-menu');
    const menuButton = document.getElementById('mobile-menu-button');
    const icon = menuButton.querySelector('i');
    
    mobileMenu.classList.toggle('hidden');
    
    if (mobileMenu.classList.contains('hidden')) {
        icon.className = 'fas fa-bars h-6 w-6';
    } else {
        icon.className = 'fas fa-times h-6 w-6';
    }
}

// Funções do jogo
function startGame() {
    gameState = 'playing';
    currentQuestion = 0;
    score = 0;
    selectedAnswer = null;
    showFeedback = false;
    
    updateGameDisplay();
    showNextQuestion();
}

function updateGameDisplay() {
    document.getElementById('current-question').textContent = currentQuestion + 1;
    document.getElementById('total-questions').textContent = questions.length;
    document.getElementById('score').textContent = score;
    
    const progressPercentage = ((currentQuestion + 1) / questions.length) * 100;
    document.getElementById('progress-bar').style.width = `${progressPercentage}%`;
}

function showNextQuestion() {
    const startScreen = document.getElementById('start-screen');
    const gameScreen = document.getElementById('game-screen');
    const endScreen = document.getElementById('end-screen');
    
    startScreen.classList.add('hidden');
    gameScreen.classList.remove('hidden');
    endScreen.classList.add('hidden');
    
    const questionData = questions[currentQuestion];
    document.getElementById('question-text').textContent = questionData.question;
    
    const answersContainer = document.getElementById('answers-container');
    answersContainer.innerHTML = '';
    
    questionData.answers.forEach((answer, index) => {
        const button = document.createElement('button');
        button.className = 'w-full text-left p-4 border rounded-lg transition-colors border-gray-200 hover:border-primary-purple hover:bg-blue-50';
        button.textContent = answer;
        button.onclick = () => selectAnswer(index);
        answersContainer.appendChild(button);
    });
    
    document.getElementById('feedback').classList.add('hidden');
}

function selectAnswer(answerIndex) {
    if (selectedAnswer !== null) return;
    
    selectedAnswer = answerIndex;
    const questionData = questions[currentQuestion];
    const isCorrect = answerIndex === questionData.correct;
    
    if (isCorrect) {
        score += 20;
        document.getElementById('score').textContent = score;
    }
    
    // Atualizar aparência dos botões
    const buttons = document.querySelectorAll('#answers-container button');
    buttons.forEach((button, index) => {
        button.disabled = true;
        if (index === answerIndex && isCorrect) {
            button.className = 'w-full text-left p-4 border rounded-lg bg-green-100 border-green-500';
        } else if (index === answerIndex && !isCorrect) {
            button.className = 'w-full text-left p-4 border rounded-lg bg-red-100 border-red-500';
        } else if (index === questionData.correct) {
            button.className = 'w-full text-left p-4 border rounded-lg bg-green-100 border-green-500';
        }
    });
    
    // Mostrar feedback
    const feedback = document.getElementById('feedback');
    feedback.className = `mt-6 p-4 rounded-lg ${isCorrect ? 'bg-green-100 border border-green-200' : 'bg-red-100 border border-red-200'}`;
    feedback.innerHTML = `
        <p><strong>${isCorrect ? 'Correto!' : 'Incorreto.'}</strong> ${questionData.explanation}</p>
        <button onclick="nextQuestion()" class="mt-4 bg-primary-purple text-white px-6 py-2 rounded-full font-semibold hover:bg-purple-dark transition-colors">
            ${currentQuestion + 1 >= questions.length ? 'Ver Resultado' : 'Próxima Pergunta'}
        </button>
    `;
    feedback.classList.remove('hidden');
}

function nextQuestion() {
    if (currentQuestion + 1 >= questions.length) {
        endGame();
    } else {
        currentQuestion++;
        selectedAnswer = null;
        updateGameDisplay();
        showNextQuestion();
    }
}

function endGame() {
    gameState = 'end';
    
    const startScreen = document.getElementById('start-screen');
    const gameScreen = document.getElementById('game-screen');
    const endScreen = document.getElementById('end-screen');
    
    startScreen.classList.add('hidden');
    gameScreen.classList.add('hidden');
    endScreen.classList.remove('hidden');
    
    document.getElementById('final-score').textContent = `${score}/100 pontos`;
    document.getElementById('progress-bar').style.width = '100%';
}

function restartGame() {
    gameState = 'start';
    
    const startScreen = document.getElementById('start-screen');
    const gameScreen = document.getElementById('game-screen');
    const endScreen = document.getElementById('end-screen');
    
    startScreen.classList.remove('hidden');
    gameScreen.classList.add('hidden');
    endScreen.classList.add('hidden');
    
    document.getElementById('progress-bar').style.width = '0%';
}

// Função para carregar projetos
function loadProjects() {
    const projectsGrid = document.getElementById('projects-grid');
    projectsGrid.innerHTML = '';
    
    projects.forEach((project) => {
        const projectCard = document.createElement('div');
        projectCard.className = 'bg-gray-50 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow';
        
        projectCard.innerHTML = `
            <img 
                src="${project.image}"
                alt="${project.title}"
                class="w-full h-48 object-cover"
                onerror="this.src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAwIiBoZWlnaHQ9IjQwMCIgdmlld0JveD0iMCAwIDgwMCA0MDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI4MDAiIGhlaWdodD0iNDAwIiBmaWxsPSIjRjNGNEY2Ii8+CjxwYXRoIGQ9Ik00MDAgMjAwTDM1MCAyNTBIMzAwVjMwMEgyNTBWMzUwSDQ1MFYzMDBINTAwVjI1MEg0NTBMMzUwIDEzMEw0MDAgMjAwWiIgZmlsbD0iIzlDQTNBRiIvPgo8L3N2Zz4K'"
            />
            <div class="p-6">
                <div class="flex items-center mb-3">
                    <span class="${project.bgColor} text-white text-xs px-2 py-1 rounded-full font-semibold">
                        ${project.state}
                    </span>
                    <span class="ml-2 text-sm text-gray-600">${project.city}</span>
                </div>
                <h3 class="text-lg font-bold text-gray-900 mb-2">${project.title}</h3>
                <p class="text-gray-600 text-sm">
                    ${project.description}
                </p>
            </div>
        `;
        
        projectsGrid.appendChild(projectCard);
    });
}



// Função para lidar com o formulário de contato
function handleContactForm(event) {
    event.preventDefault();
    
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());
    
    // Aqui você poderia enviar os dados para um servidor
    console.log('Dados do formulário:', data);
    
    alert('Obrigado pela sua mensagem! Entraremos em contato em breve.');
    
    // Limpar o formulário
    event.target.reset();
}

// Event listeners
document.addEventListener('DOMContentLoaded', function() {
    // Carregar conteúdo
    loadProjects();
    
    // Event listeners do menu mobile
    document.getElementById('mobile-menu-button').addEventListener('click', toggleMobileMenu);
    
    // Event listeners do jogo
    document.getElementById('start-game').addEventListener('click', startGame);
    document.getElementById('restart-game').addEventListener('click', restartGame);
    
    // Event listener do formulário de contato
    document.getElementById('contact-form').addEventListener('submit', handleContactForm);
    
    // Fechar menu mobile ao clicar nos links
    document.querySelectorAll('#mobile-menu button').forEach(button => {
        button.addEventListener('click', toggleMobileMenu);
    });
    
    // Smooth scroll para navegação
    document.querySelectorAll('[onclick^="scrollToSection"]').forEach(element => {
        element.addEventListener('click', function(e) {
            e.preventDefault();
            const sectionId = this.getAttribute('onclick').match(/'([^']+)'/)[1];
            scrollToSection(sectionId);
        });
    });
});

// Função para navegação suave
window.scrollToSection = scrollToSection;

// Função para fechar menu mobile ao redimensionar a tela
window.addEventListener('resize', function() {
    if (window.innerWidth >= 768) {
        const mobileMenu = document.getElementById('mobile-menu');
        const menuButton = document.getElementById('mobile-menu-button');
        const icon = menuButton.querySelector('i');
        
        mobileMenu.classList.add('hidden');
        icon.className = 'fas fa-bars h-6 w-6';
    }
});

// Detectar scroll para efeito na navegação
window.addEventListener('scroll', function() {
    const nav = document.getElementById('navigation');
    if (window.scrollY > 10) {
        nav.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
    } else {
        nav.style.backgroundColor = 'rgba(255, 255, 255, 0.9)';
    }
});

// Funções globais para serem acessadas no HTML
window.nextQuestion = nextQuestion;
window.restartGame = restartGame;
window.selectAnswer = selectAnswer;
