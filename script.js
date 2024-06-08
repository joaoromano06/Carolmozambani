const menuToggle = document.getElementById('menuToggle');
const mainMenu = document.getElementById('mainMenu');

menuToggle.addEventListener('click', () => {
    mainMenu.classList.toggle('show'); 
});

const links = document.querySelectorAll('nav ul li a'); 

links.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault(); 
        const targetId = link.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 60, // Ajuste para o header
                behavior: 'smooth' // Rolagem suave
            });
        }
    });
});

/* Adiciona efeito de transição ao clicar no menu */
links.forEach(link => {
    link.addEventListener('click', () => {
        link.classList.add('active'); // Adiciona a classe "active" ao link clicado

        // Remove a classe "active" de todos os outros links após um tempo
        setTimeout(() => {
            links.forEach(otherLink => {
                if (otherLink !== link) {
                    otherLink.classList.remove('active');
                }
            });
        }, 200); // Tempo em milissegundos (200ms = 0.2 segundos)
    });
});
