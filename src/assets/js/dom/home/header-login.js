const showAcessMenu = () => {
    const btnAcess = document.querySelector('#acess__btns')


    btnAcess.addEventListener('click', event => {
        event.preventDefault()

        btnAcess.appendChild(CreateHtmlTemplate())
    })
}

showAcessMenu()

const CreateHtmlTemplate = () => {
    const element = document.createElement('div')
    element.classList.add('acess__appended__container')
    element.innerHTML = 
    ` <div id="acess__menu">
        <span>
            Insira as suas credenciais para uma melhor experiência
        </span>

        <div id="acess__menu__btns">
            <a href="">entrar</a>
            <a href="">cadastrar</a>
        </div>
    </div>`
    return element
}