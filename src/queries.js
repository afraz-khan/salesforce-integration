const { ConnectedAppClient } = require('./ConnectedAppClient')

var connection = null
ConnectedAppClient()
  .then((conn) => {
    connection = conn
  })
  .catch((err) => {
    console.error(err)
    throw err
  })

async function getProductItems() {
  const productItems = await connection.query(
    'SELECT ProductName, ProductItemNumber FROM ProductItem',
  )
  return productItems
}

async function getProductQuantity(productItemNum) {
  const quantity = await connection.query(
    `SELECT QuantityOnHand FROM ProductItem WHERE ProductItemNumber='${productItemNum}'`,
  )
  if (quantity.totalSize === 0) {
    throw new Error('Product Item not found.')
  }
  return quantity
}

module.exports = {
  getProductItems,
  getProductQuantity,
}
