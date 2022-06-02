(() => {
    const btnsRadios = document.querySelectorAll('#btns__radios');
    let contador = 0;

    // Looping para dar checked e unchecked no btnsRadios
    const checkedLoop = (contador) => {
        btnsRadios.forEach((btn, idx) => {
            if (contador !== idx) {
                btn.checked = false
            } else {
                btn.checked = true
            }
        })
    }


    setInterval(() => {
        checkedLoop(contador);
        contador++;

        contador >= 3 ? contador = 0 : contador;
    }, 1000)

    btnsRadios.forEach((btn, idx) => {
        btn.addEventListener('click', () => {
            contador = idx
            checkedLoop(contador)
        })
    })
})()