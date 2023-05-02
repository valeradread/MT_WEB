const navListOpener = document.getElementById('nav_list_opener');
const navList = document.getElementById('nav_list');

navListOpener.addEventListener('click', (e) => {
    navList.classList.toggle('hidden');
});

