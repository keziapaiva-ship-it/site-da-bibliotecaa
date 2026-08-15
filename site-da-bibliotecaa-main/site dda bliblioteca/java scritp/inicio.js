document.addEventListener("DOMContentLoaded", function () {

    // =========================
    // 1. LÓGICA DA PÁGINA INICIAL (Redirecionamento)
    // =========================
    const searchForm = document.getElementById('search-form');
    if (searchForm) {
        searchForm.addEventListener('submit', function (event) {
            event.preventDefault();

            const searchInput = document.getElementById('search-input');
            const query = searchInput ? searchInput.value.trim() : "";

            if (query !== "") {
                window.location.href = `catalogo.html?q=${encodeURIComponent(query)}`;
            }
        });
    }

    // =========================
    // 2. LÓGICA DA PÁGINA DE CATÁLOGO (Filtragem por URL)
    // =========================
    const urlParams = new URLSearchParams(window.location.search);
    const searchQuery = urlParams.get('q');

    if (searchQuery) {
        const termo = searchQuery.toLowerCase();
        const cardsLivros = document.querySelectorAll('.livro-card'); // Ajuste para a classe real dos cards

        cardsLivros.forEach(card => {
            const tituloElemento = card.querySelector('.livro-titulo');
            if (tituloElemento) {
                const titulo = tituloElemento.textContent.toLowerCase();
                if (titulo.includes(termo)) {
                    card.style.display = "block";
                } else {
                    card.style.display = "none";
                }
            }
        });
    }

    // =========================
    // 3. PESQUISA EM TEMPO REAL (Opcional, se houver input na mesma tela)
    // =========================
    const pesquisa = document.getElementById("pesquisa");
    const btnPesquisar = document.getElementById("btnPesquisar");
    const livros = document.querySelectorAll(".livro");

    if (pesquisa) {
        pesquisa.addEventListener("input", function () {
            const termo = pesquisa.value.toLowerCase();
            livros.forEach(livro => {
                const texto = livro.textContent.toLowerCase();
                livro.style.display = texto.includes(termo) ? "block" : "none";
            });
        });
    }

    if (btnPesquisar && pesquisa) {
        btnPesquisar.addEventListener("click", function () {
            const termo = pesquisa.value.toLowerCase();
            livros.forEach(livro => {
                const texto = livro.textContent.toLowerCase();
                livro.style.display = texto.includes(termo) ? "block" : "none";
            });
        });
    }
});