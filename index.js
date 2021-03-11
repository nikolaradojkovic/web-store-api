
const products = require('./products.json');
const users = require('./users.json');
const orders = require('./orders.json');
const mongoose = require('mongoose')
const cors = require('cors')
require('dotenv/config')

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const Joi = require('joi');
app.use(cors())

//app.use(express.json());
app.use(bodyParser.json()); //Make sure u have added this line
app.use(bodyParser.urlencoded({ extended: false }));

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", req.header('Origin'));
    res.header("Access-Control-Allow-Credentials", true);
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
    next();
});

//Connect to DB
mongoose.connect(process.env.DB_CONNECTION,
    {useNewUrlParser:true},
    ()=>console.log('connected to DB!'))


//Import routes
const productsRoute = require('./routes/products')
const usersRoute = require('./routes/users')
const ordersRoute = require('./routes/orders')
app.use('/products', productsRoute);
app.use('/users', usersRoute);
app.use('/orders', ordersRoute);

//app.use('/')
app.get('/', (req, res)=>{
    res.send("Hello");
})
app.get('/test', (req, res)=>{
    res.send("Updatedsdad");
})

/*app.get('/products', (req, res)=>{
    res.send(products);
})

app.get('/users', (req, res)=>{
    res.send(users);
})

app.get('/orders', (req, res)=>{
    res.send(orders);
})*/

/*app.get('/products/:id', (req, res)=>{
    let product = returnValueById(products, req.params.id)
    return(!product) ? res.status(404).send('404 Not found') : res.send(product);
})

app.get('/users/:id', (req, res)=>{
    let customer = returnValueById(users, req.params.id)
    return(!customer) ? res.status(404).send('404 Not found') : res.send(customer);
})

app.get('/orders/:id', (req, res)=>{
    let order = returnValueById(orders, req.params.id)
    return(!order) ? res.status(404).send('404 Not found') : res.send(order);
})*/


const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));




/*
function returnValueById(arr, id) {
    return  arr.data.find(v => v.id === id)
}


function insert(arr, object){
    arr.data.push(object);
    console.log(object)
    return object;
}

function deleteById(arr, id) {
    return (arr.data.splice(id, 1).length >0);
}

function updateValue(arr, object) {
    let upd = returnValueById(arr, object.id);
    for (let key of Object.keys(upd)){
        upd[key] = object[key]
    }
    return upd
}

/!**
 * new product  -   newObject(products,["newName", "description", "img-src", "100,99", "562"])
 * new customer -   newObject(users,["amil", "pass"])
 * @param arr
 * @param product
 *!/
function newObject(arr,product) {
    let schema = returnValueById(arr,(arr.data.length-1).toString());
    let newObj = {};
    let i =0;
    for (let key of Object.keys(schema)){
        if(key!=="id")
            newObj[key] = product[i++]
        else
            newObj[key] = arr.data.length.toString()
    }
    return newObj
}

/!**
 *
 * makeOrder(
              ["aaa","bbb","ccc","ddd"],                    //customer data
              [         ["1", "name", "100.99", "4"],       //products data
                        ["2", "name2", "100.99", "1"],
                        ["3", "name3", "100.99", "3"]
              ]
            )
 * @param customer
 * @param purchasedProducts is array of products
 *!/
function makeOrder(customer, purchasedProducts) {
    return {id: orders.data.length.toString(), customer: getCustomerCredentials(customer), products: getProductForOrder(purchasedProducts), order_received:"true"}
}

function getCustomerCredentials(customer) {

    let order = returnValueById(orders, "0")
    let i = 0;
    let customerCredentials = order["customer"]
    for (let key of Object.keys(customerCredentials)){      //full customer
        customerCredentials[key] = customer[i++]
    }
    return customerCredentials;
}

function getProductForOrder(products){
    let order = returnValueById(orders, "0")
    let arrProducts = [];
    for(let product of products){
        let prKey = order["products"][0];
        let newProduct = {}
        let i =0;
        for (let key of Object.keys(prKey)){      //full customer
            newProduct[key] = product[i++]
        }
        arrProducts.push(newProduct)
    }
    return arrProducts
}







































/!*console.log(updateValue(products,{
    "id": "1",
    "prod_name": "nameUpdated",
    "prod_desc": "desc",
    "prod_img": "src",
    "prod_price": "500",
    "prod_quantity": "100"
}))*!/
//console.log(products)

/!*console.log(newObject(products,["newName", "description", "img-src", "100,99", "562"]))*!/
/!*console.log(newObject(users,["amil", "pass","2"]))
console.log(newObject(users,["amil", "pass","2"]))*!/
insert(users, newObject(users,["amil", "pass","2"]))
insert(products,newObject(products,["newName", "description", "img-src", "100,99", "562"]))

//console.log(returnValueById(orders, "0"))
insert(orders,makeOrder(
                        ["aaa","bbb","ccc","ddd"],
                        [["1", "name", "100.99", "4"],
                            ["2", "name2", "100.99", "1"],
                            ["3", "name3", "100.99", "3"]]
                        )
    );
console.log(orders)

//console.log(makeOrder())
*/
