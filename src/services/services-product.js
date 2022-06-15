// faz um get na rota api/products, que retorna a lista de produtos
const getProducts = async () => {
    const data = await fetch("http://localhost:5000/api/products")
    const products = data.json()
    return products
  }


export const services = {
  getProducts
}