import { services } from "../../services/services-product.js";


const renderizarProdutos = async () => {
    const produtos = await services.getProdutos();

    produtos.forEach(produto => {
        console.log(produto)
    })
}
    
renderizarProdutos()