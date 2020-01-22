const { mysql } = require('../helpers/index')

exports.getProducts = (req, res) => {
  console.log()
  mysql.getProducts.then((response) => {
    res.status(200).send(response)
  }).catch(e => res.status(500).send({ error: e.message }))
}