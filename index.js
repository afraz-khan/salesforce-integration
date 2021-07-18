const express = require('express');
const {getProductItems, getProductQuantity} = require('./src/queries');
const compression = require('compression');
const helmet = require('helmet');

const HOST = 'localhost';
const PORT = '3000';

const app = express();
app.use(compression());
app.use(helmet());
// app.route('/productItems');

app.get('/productItems', async (req, res) => {
    try {
        const productItems = await getProductItems();
        res.json(productItems);
    } catch (error) {
        res.json(JSON.stringify(error));
    }
})

app.get('/productItems/:productItemNum', async (req, res) => {
    try {
        const quantity = await getProductQuantity(req.params.productItemNum);
        res.json(quantity);
    } catch (error) {
        res.json(JSON.stringify(error));
    }
})

app.listen(PORT, ()=>{
    console.log('Server Started on ' + HOST + ' on port ' + PORT);
})