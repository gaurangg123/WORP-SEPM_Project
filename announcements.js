// Toggle Dark Mode
const body = document.querySelector('body');
const toggleDarkMode = document.querySelector('#toggleDarkMode');

toggleDarkMode.addEventListener('click', () => {
	body.classList.toggle('dark');
});
