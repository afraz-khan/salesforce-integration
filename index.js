const express = require('express')
const { getProductItems, getProductQuantity } = require('./src/queries')
const compression = require('compression')
const helmet = require('helmet')
const path = require('path')

const HOST = process.env.HOST
const PORT = process.env.PORT

const app = express()
const router = express.Router('/productItems')

// get all product Items.
router.get('/', async (req, res) => {
  try {
    const productItems = await getProductItems()
    const responseData = productItems['records'].map((item) => {
      delete item.attributes
      return item
    })
    res.status(200)
    res.json(responseData)
  } catch (error) {
    console.error(error)
    res.status(500)
    res.json(error.message)
  }
})

// get stock for a single productitem
router.get('/:productItemNum', async (req, res) => {
  try {
    const quantity = await getProductQuantity(req.params.productItemNum)
    const responseData = {
      quantity: quantity['records'][0].QuantityOnHand,
    }
    res.status(200)
    res.json(responseData)
  } catch (error) {
    console.error(error)
    res.status(500)
    res.json(error.message)
  }
})

app.use(compression())
app.use(
  helmet.contentSecurityPolicy({
    useDefaults: true,
    directives: {
      'script-src': [
        "'self'",
        'code.jquery.com',
        'cdnjs.cloudflare.com',
        'stackpath.bootstrapcdn.com',
      ],
    },
  }),
)
app.use('/', express.static(path.join(__dirname + '/client/build')))
app.use('/productItems', router)
app.listen(PORT, () => {
  console.log('Server Started on ' + HOST + ' on port ' + PORT)
})
