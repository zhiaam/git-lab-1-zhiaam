
console.log('Git Lab is awesome!');
document.addEventListener('DOMContentLoaded', function() {
console.log('Page loaded successfully');
});

function toggleDarkMode() {
document.body.classList.toggle('dark-mode');
const isDark = document.body.classList.contains('dark-mode');
localStorage.setItem('darkMode', isDark);
console.log('Dark mode:', isDark ? 'ON' : 'OFF');
}

// Check saved preference
if (localStorage.getItem('darkMode') === 'true') {
document.body.classList.add('dark-mode');
}

