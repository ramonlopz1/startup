const showAcessMenu = () => {
    const btnAcess = document.querySelector('.acess__btn__login')
    const acessMenu = document.querySelector('#acess__menu')

    btnAcess.addEventListener('mouseover', event => {
        event.preventDefault()
        acessMenu.classList.add('acess__menu__hover')
    })

    btnAcess.addEventListener('mouseleave', event => {
        event.preventDefault()
        acessMenu.classList.remove('acess__menu__hover')
    })
}

showAcessMenu()
