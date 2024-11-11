// Ativar Modo Escuro ao pressionar uma tecla específica (ex: D)
document.addEventListener('keydown', function (e) {
    if (e.key === 'd' || e.key === 'D') {
        document.body.classList.toggle('dark-mode');
    }
});
