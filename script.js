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
