document.addEventListener('click', () => {
    const menuButton = document.getElementById('menu');
    
    if (menuButton) {
        const navList = document.getElementById('list');
        const links = document.querySelectorAll('.nav_list li')
        
        if (navList) {
            navList.classList.toggle('nav_list_active');
            menuButton.classList.toggle('mobile_menu_active')

            links.forEach((link) =>{
            link.style.animation ? (link.style.animation = "") : (link.style.animation = 'fadeNav 0.2s ease forwards 0.2s')
        })
        }
    }
});