import { services } from "../../services/services-product.js";


const renderizarProdutos = async () => {
    const produtos = await services.getProdutos();

    produtos.forEach(produto => {
        elementTemplate(produto)
    })
}
    
renderizarProdutos()

const elementTemplate = (produto) => {
    const target = document.querySelector("[append-product]")

    const element = document.createElement('div')
    element.className = 'maisvendidos__list__element'

    element.innerHTML = `
    <div class="element__img">
      <img src="" alt="Imagem do produto">
    </div>
    <div class="element__info">
      <span class="element__info__name">
        ${produto.title}
      </span>
      <div class="element__info__rate">
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
      </div>
      <span class="element__info__price">
        ${produto.price}
      </span>
      <span class="element__info__installment">
        10x de 273,37 s/juros
      </span>
    </div>`

  target.appendChild(element)
}