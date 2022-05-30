const showAcessMenu = () => {
    const btnAcess = document.querySelector('.acess__btn__login')
    const acessMenu = document.querySelector('#acess__menu')
    const containerArea = document.querySelector('#acess__btns')
    

    btnAcess.addEventListener('mouseover', event => {
        event.preventDefault()
        acessMenu.classList.add('acess__menu__hover')
        containerArea.classList.add('acess__btns__hover')
    })

    containerArea.addEventListener('mouseleave', event => {
        event.preventDefault()
        acessMenu.classList.remove('acess__menu__hover')
        containerArea.classList.remove('acess__btns__hover')
        
    })
}

showAcessMenu()
