document.getElementById('letra-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const letra = document.getElementById('letra').value.toLowerCase();
    const containers = document.querySelectorAll('.dic--sub-container');
    let found = false;

    containers.forEach(container => {
        const word = container.querySelector('.dic--word').textContent.trim().toLowerCase();
        if (word.startsWith(letra)) {
            container.classList.remove('hidden');
            found = true;
        } else {
            container.classList.add('hidden');
        }
    });

    if (!found) {
        alert(`No se encontraron palabras que empiecen con la letra "${letra.toUpperCase()}"`);
    }
});
