
/* ==========================================================================
   FILE: js/main.js
   Purpose: Interatividade e Animações de Interface
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

    /* 1. Cabeçalho Dinâmico (Sombra ao descer a página) */
    const header = document.querySelector('.main-header');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('header-scrolled');
        } else {
            header.classList.remove('header-scrolled');
        }
    });

    /* 2. Animação de Entrada Suave (Fade-in on Scroll) */
    // Configura o observador para disparar quando 15% do elemento estiver visível
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15 
    };

    const fadeObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Adiciona a classe que faz o elemento aparecer
                entry.target.classList.add('is-visible');
                // Deixa de observar depois de aparecer a primeira vez
                observer.unobserve(entry.target); 
            }
        });
    }, observerOptions);

    // Seleciona todas as secções, cartões e grelhas que queremos animar
    const elementsToAnimate = document.querySelectorAll('section, .showcase-card, .editorial-text, .editorial-image');
    
    elementsToAnimate.forEach(el => {
        // Esconde os elementos inicialmente
        el.classList.add('fade-element');
        // Começa a observar
        fadeObserver.observe(el);
    });

});
