const btns = document.querySelectorAll(".tabs__btns")

btns.forEach((btn, idx1) => {
    btn.addEventListener("click", () => {
        btns.forEach((btn, idx2) => {

            if (idx1 == idx2) {
                btn.style.backgroundColor = '#c24b61'
                
            } else {
                btn.style.backgroundColor = 'whitesmoke'
            }
        })
    })
})