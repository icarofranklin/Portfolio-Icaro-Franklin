document.addEventListener('DOMContentLoaded', () => {

    /*1. ANIMAÇÃO DE SCROLL*/
    const elementsToAnimate = document.querySelectorAll('.scroll-hidden');

    const scrollObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('scroll-visible');                
            }
        });
    }, {
        threshold: 0.1 // Dispara quando 10% do elemento estiver visível
    });

    elementsToAnimate.forEach((element) => {
        scrollObserver.observe(element);
    });


    /*2. ALTERNADOR DE TEMA (Dark/Light Mode)*/
    const themeCheckbox = document.getElementById('checkbox-theme');
    
    if (themeCheckbox) {
        const currentTheme = localStorage.getItem('theme');

        // Se o usuário preferir dark mode, liga o botão e aplica a classe
        if (currentTheme === 'dark') {
            document.body.classList.add('dark-theme');
            themeCheckbox.checked = true; // Desliza a bolinha para a direita
        }

        // Quando o botão for clicado (mudar de estado)
        themeCheckbox.addEventListener('change', () => {
            document.body.classList.toggle('dark-theme');
            
            // Salva a escolha baseada na posição do botão
            if (document.body.classList.contains('dark-theme')) {
                localStorage.setItem('theme', 'dark');
            } else {
                localStorage.setItem('theme', 'light');
            }
        });
    }

});