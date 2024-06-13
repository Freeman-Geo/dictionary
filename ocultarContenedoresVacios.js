document.addEventListener('DOMContentLoaded', function() {
    const containers = document.querySelectorAll('.dic--sub-container');

    containers.forEach(container => {
        const word = container.querySelector('.dic--word').textContent.trim();
        const definition = container.querySelector('.dic--mean').textContent.trim();
        
        if (!word && !definition) {
            container.classList.add('hidden');
        }
    });
});
