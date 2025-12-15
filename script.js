// script.js

document.addEventListener('DOMContentLoaded', () => {
    // 1. Seleciona o botão de menu e a navegação
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.getElementById('nav-links');
    const navAnchors = navLinks.querySelectorAll('a'); // Seleciona todos os links dentro da navegação

    // 2. Função para alternar a classe 'active'
    function toggleMenu() {
        navLinks.classList.toggle('active');
        // Atualiza o atributo aria-expanded para acessibilidade
        const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true' || false;
        menuToggle.setAttribute('aria-expanded', !isExpanded);
    }

    // 3. Adiciona o evento de clique no botão de menu
    menuToggle.addEventListener('click', toggleMenu);

    // 4. Adiciona evento de clique em cada link de navegação para fechar o menu
    // Isso é útil para fechar o menu após o usuário clicar em um link
    navAnchors.forEach(anchor => {
        anchor.addEventListener('click', () => {
            if (navLinks.classList.contains('active')) {
                toggleMenu(); // Se o menu estiver aberto, fecha
            }
        });
    });
});