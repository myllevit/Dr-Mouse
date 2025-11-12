// Pegando a imagem e o áudio
const imagem = document.getElementById('imagem');
const som = document.getElementById('som');

// Adicionando um ouvinte de clique na imagem
imagem.addEventListener('click', function() {
    som.play(); // Reproduz o áudio ao clicar na imagem
    
     // Adiciona a classe para iniciar a animação
    imagem.classList.add('animacao-click');

    // Remove a classe após a animação terminar (meia duração da animação)
    setTimeout(() => {
        imagem.classList.remove('animacao-click');
    }, 500);  // 500ms é o tempo da animação
});
