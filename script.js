// Objeto com os textos das abas para inserção dinâmica
const conteudos = {
    entender: `
        <h2>Vamos Entender Sobre?</h2>
        <p>O <strong>Agro Forte e Sustentável</strong> é o modelo de produção agrícola que une alta produtividade com a preservação dos recursos naturais. Significa produzir alimentos utilizando tecnologias que economizam água, protegem o solo contra a erosão, reduzem a emissão de carbono e respeitam a biodiversidade local.</p>
    `,
    receita: `
        <h2>Receitas do Campo</h2>
        <div class="receita-item">
            <h3>1. Bolo de Fubá com Casca de Goiaba</h3>
            <p><strong>Ingredientes:</strong> 2 xícaras de fubá, 1 xícaras de farinha, 3 ovos caipiras, 1 xícara de leite fresco, cascas de 4 goiabas.</p>
            <p><strong>Preparo:</strong> Bata as cascas, ovos e leite no liquidificador. Misture com os secos e asse até dourar.</p>
        </div>
        <hr class="divisor">
        <div class="receita-item">
            <h3>2. Sopa de Carne com Talos e Raízes</h3>
            <p><strong>Ingredientes:</strong> 500g de carne, 2 mandiocas, talos de couve/brócolis, 1 abóbora com casca.</p>
            <p><strong>Preparo:</strong> Cozinhe a carne e as raízes. No final, adicione os talos picados para aproveitar tudo.</p>
        </div>
    `,
    colaboradores: `
        <h2>Nossos Colaboradores</h2>
        <p>Conheça a equipe que faz o projeto acontecer. Unimos produtores locais, engenheiros agrônomos, técnicos em meio ambiente e designers focados em espalhar a conscientização do campo para a cidade.</p>
    `
};

// Perguntas estruturadas do Quiz
const perguntasQuiz = [
    {
        q: "Qual o objetivo do Agro Sustentável?",
        opcoes: ["Apenas lucrar mais", "Equilibrar produção e preservação", "Usar mais químicos"],
        correta: 1
    },
    {
        q: "O que é rotação de culturas?",
        opcoes: ["Mudar as plantas de lugar", "Alternar espécies no mesmo solo", "Plantar só uma coisa sempre"],
        correta: 1
    },
    {
        q: "Como a tecnologia economiza água?",
        opcoes: