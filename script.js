function navigate(pageId) {
    // Esconde todas as páginas
    document.querySelectorAll('.page').forEach(page => {
        page.classList.add('hidden');
    });
    // Mostra a página selecionada
    document.getElementById(pageId).classList.remove('hidden');
}

// Inicializa a página com a primeira página visível
navigate('page1');
