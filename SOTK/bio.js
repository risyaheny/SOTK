const container = document.getElementById('container');
const aboutBtn = document.getElementById('about');
const bioBtn = document.getElementById('bio');

aboutBtn.addEventListener('click', () => {
    container.classList.add("active");
});

bioBtn.addEventListener('click', () => {
    container.classList.remove("active");
});