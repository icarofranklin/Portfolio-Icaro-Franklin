document.addEventListener('DOMContentLoaded', () => {
    
    // Seleciona todos os elementos que queremos animar
    const elementsToAnimate = document.querySelectorAll('.scroll-hidden');

    // Cria o observador
    // O IntersectionObserver é uma API moderna do navegador que detecta
    // quando um elemento entra na tela. É muito mais leve que usar eventos de 'scroll'.
    const myObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            // Se o elemento estiver visível na tela
            if (entry.isIntersecting) {
                // Adiciona a classe que faz ele aparecer
                entry.target.classList.add('scroll-visible');
            }
        });
    }, {
        threshold: 0.1 // Dispara quando 10% do elemento estiver visível
    });

    // Manda o observador vigiar cada elemento da nossa lista
    elementsToAnimate.forEach((element) => {
        myObserver.observe(element);
    });
});