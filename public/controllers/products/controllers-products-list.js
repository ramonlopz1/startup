import{services}from"../../services/services-product.js";const renderizarProdutos=async()=>{(await services.getProdutos()).forEach((r=>{console.log(r)}))};renderizarProdutos();