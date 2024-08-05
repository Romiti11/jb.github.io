function checkOrientation() {
    const content = document.getElementById('content');
    const rotateMessage = document.getElementById('rotate-message');

    const isPortrait = window.matchMedia("(orientation: portrait)").matches;

    if (isPortrait) {
        // Si está en portrait, mostrar el mensaje
        content.style.display = 'none';
        rotateMessage.style.display = 'block';
    } else {
        // Si está en landscape, mostrar el contenido
        content.style.display = 'block';
        rotateMessage.style.display = 'none';
    }
}

window.addEventListener('resize', checkOrientation);
window.addEventListener('load', checkOrientation);
