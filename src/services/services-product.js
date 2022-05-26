const getProdutos = async () => {
    const dados = await fetch("http://localhost:5000/api/products")
    const produtos = dados.json()
    return produtos
  }


export const services = {
    getProdutos
}