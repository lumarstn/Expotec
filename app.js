window.addEventListener("scroll", () => {
    const navbar = document.querySelector("nav");
    
    // Verifica a posição vertical da página
    if (window.scrollY > 50) {
        navbar.style.top = "0"; // Mostra a navbar
    } else {
        navbar.style.top = "-50px"; // Esconde a navbar
    }
});


document.addEventListener("DOMContentLoaded", function() {
    const bloco_ch_1 = document.getElementsByClassName(".bloco_ch_1");
    
    // Verifique se o elemento foi encontrado
    if (bloco_ch_1) {
        bloco_ch_1.addEventListener("click", function() {
            alert("Você clicou no bloco_ch_1!");
        });
    } else {
        console.error("Elemento com o ID 'bloco_ch_1' não foi encontrado.");
    }
});