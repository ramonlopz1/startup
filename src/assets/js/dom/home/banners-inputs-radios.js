(() => {
    const btnsRadios = document.querySelectorAll('#btns__radios');
    let contador = 0;


    // soma + 1 para que o loop aconteça.
    setInterval(() => {
        checkBtnRadio(contador);
        changeBackGround(contador)
        contador++;

        contador >= 3 ? contador = 0 : contador;
    }, 3500)

    // altera o contador para o índice do botão clicado, mudando a animação.
    btnsRadios.forEach((btn, idx) => {
        btn.addEventListener('click', () => {
            contador = idx;
            checkBtnRadio(contador);
            changeBackGround(contador);
        })
    })
    
    // Looping para dar checked e unchecked no btnsRadios
    const checkBtnRadio = (contador) => {
        btnsRadios.forEach((btn, idx) => {
            if (contador !== idx) {
                btn.checked = false
            } else {
                btn.checked = true
            }
        })
    }

    const changeBackGround = (contador) => {
       const bg = document.querySelector("#home__main__banners");
       bg.style.backgroundImage = `url('../assets/img/home/banners/first_banner/${contador}.jpg')`
    }
})();