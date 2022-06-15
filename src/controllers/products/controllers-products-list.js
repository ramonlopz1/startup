import { services } from "../../services/services-product.js";

const renderProducts = async () => {
    const products = await services.getProducts();

    products.forEach(product => {
        elementTemplate(product)
    })
}
    
renderProducts()

const elementTemplate = (product) => {
    const target = document.querySelector("[append-product]")

    const element = document.createElement('div')
    element.className = 'bestsales__list__element'

    element.innerHTML = `
    <div class="element__img">
      <img src="" alt="Imagem do product">
    </div>
    <div class="element__info">
      <span class="element__info__name">
        ${product.title}
      </span>
      <div class="element__info__rate">
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
      </div>
      <span class="element__info__price">
        ${product.price}
      </span>
      <span class="element__info__installment">
        10x de 273,37 s/juros
      </span>
    </div>`

  target.appendChild(element)
}