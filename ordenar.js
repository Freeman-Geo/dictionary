function ordenarDiccionario() {
    const containers = document.querySelectorAll('.dic--sub-container');
    const containerArray = Array.from(containers);

    const wordContainerPairs = containerArray.map(container => {
        const word = container.querySelector('.dic--word').textContent.trim();
        return { word, container };
    });

    wordContainerPairs.sort((a, b) => a.word.localeCompare(b.word));

    const parent = containerArray[0].parentNode;
    wordContainerPairs.forEach(pair => {
        parent.appendChild(pair.container);
    });
}
