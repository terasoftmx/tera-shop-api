const { mysql } = require('../helpers/index')
const { Product } = require('../../../utils/index')

exports.getProducts = (req, res) => {
  mysql.getProducts().then((response) => {
    const products = []
    response.forEach(rowRaw => {
      const product = new Product(
        rowRaw.ID_CART,
        rowRaw.CART,
        rowRaw.NART,
        rowRaw.CATEGORIA,
        rowRaw.MARCA,
        rowRaw.MODELO,
        rowRaw.COLOR,
        rowRaw.MEDIDAS,
        rowRaw.PRECIOA,
        rowRaw.PRECIOB,
        rowRaw.PRECIOC,
        rowRaw.PRECIOD,
        rowRaw.PRECIOE,
        rowRaw.PRECIOF,
        rowRaw.EXTENCION,
        rowRaw.PROV,
        rowRaw.FAB,
        rowRaw.PROMO,
        rowRaw.PMES,
      )
      products.push(product)
    })
    res.status(200).json({data: products})
  }).catch(e => res.status(500).json({ error: e.message }))
}

exports.getProduct = (req, res) => {
  const productId = req.params.productId
  mysql.getProductById(productId).then((response) => {
    if (rowRaw.length === 0) {
      res.status(404).json({data: 'product not found'})
    }

    const rowRaw = response[0]
    const product = new Product(
      rowRaw.ID_CART,
      rowRaw.CART,
      rowRaw.NART,
      rowRaw.CATEGORIA,
      rowRaw.MARCA,
      rowRaw.MODELO,
      rowRaw.COLOR,
      rowRaw.MEDIDAS,
      rowRaw.PRECIOA,
      rowRaw.PRECIOB,
      rowRaw.PRECIOC,
      rowRaw.PRECIOD,
      rowRaw.PRECIOE,
      rowRaw.PRECIOF,
      rowRaw.EXTENCION,
      rowRaw.PROV,
      rowRaw.FAB,
      rowRaw.PROMO,
      rowRaw.PMES,
    )
    res.status(200).json({data: product})
  }).catch(e => res.status(500).json({ error: e.message }))
}
