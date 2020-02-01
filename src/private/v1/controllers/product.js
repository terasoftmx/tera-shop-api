const { mysql } = require('../helpers/index')
const { Product } = require('../../../utils/index')

exports.getProducts = (req, res) => {
  mysql.getProducts().then((response) => {
    const products = []
    const dataResponse = _transformDbResponseToProductObject(response)
    if (dataResponse) {
      res.status(200).json({data: dataResponse})
    } else {
      res.status(404).json({data: 'not found'})
    }
    res.status(200).json({data: products})
  }).catch(e => res.status(500).json({ error: e.message }))
}

exports.getProduct = (req, res) => {
  const productId = req.params.productId
  mysql.getProductById(productId).then((response) => {
    const dataResponse = _transformDbResponseToProductObject(response)
    if (dataResponse) {
      res.status(200).json({data: dataResponse})
    } else {
      res.status(404).json({data: 'not found'})
    }
  }).catch(e => res.status(500).json({ error: e.message }))
}

const _transformDbResponseToProductObject = dbResponse => {
  if (dbResponse.length === 0) {
    return false
  }

  if (dbResponse.length === 1) {
    const rowRaw = dbResponse[0]

    return _createProductObject(rowRaw)
  }

  if (dbResponse.length > 1) {
    const products = []
    dbResponse.forEach(rowRaw => {
      products.push(_createProductObject(rowRaw))
    })

    return products
  }
}

const _createProductObject = rowRaw => {
  return new Product(
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
}
