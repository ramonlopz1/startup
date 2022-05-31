(() => {
    let contador = 0
    const btnsRadios = document.querySelectorAll('#btns__radios')

    setInterval(() => {
        btnsRadios[contador].checked = true

        btnsRadios.forEach((btn, idx) => {
            if (idx !== contador) {
                btn.checked = false
            } else {
                btn.checked = true
            }
        })

        contador++
        contador >= 3 ? contador = 0 : contador

    }, 1000)

    btnsRadios.forEach((btn, idx) => {
        

        btn.addEventListener('click', () => {
            contador = idx
        })
    })
})()