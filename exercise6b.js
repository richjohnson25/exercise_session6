/* Exercise 2: Create a program to create transaction
● Product Class
○ Properties
■ Name
■ Price
● Transaction Class
○ Properties
■ Total
■ Product
● All product data
● Qty
○ Add to cart method → Add product to transaction
○ Show total method → Show total current transaction
○ Checkout method → Finalize transaction, return transaction data*/

class Product {
    #name = ""
    #price = 0

    set setName(name){
        if(!name){
            return "name must be filled"
        }

        if(name.length <= 3){
            return "name must be more than 3 chars"
        }
        this.#name = name
    }

    get getName(){
        return this.#name
    }

    set setPrice(price){
        this.#price = price
    }

    get getPrice(){
        return this.#price
    }

    static warehouse = []
}

class Transaction {
    #total = 0
    cart = []
    addToCart(product){
        this.cart.push(product)
        this.#total += product.total
    }

    get showTotal(){
        return this.#total
    }

    get checkOut(){
        return {
            cart:this.cart,
            total:this.#total
        }
    }
}

let rtx3060 = new Product()
rtx3060.setName = "GPU RTX 3060 12GB msi"
rtx3060.setPrice = 8000000
//console.log(rtx3060.getName, rtx3060.getPrice)

let nzxtBlack = new Product()
nzxtBlack.setName = "NZXT tower matte black"
nzxtBlack.setPrice = 1500000

let monitor = new Product()
monitor.setName = "LG LED 27inch 265hz 4K"
monitor.setPrice = 4600000

let processor = new Product()
processor.setName = "Intel i9 core 14"
processor.setPrice = 9000000

Product.warehouse.push(rtx3060, nzxtBlack, monitor, processor)

console.log(Product.warehouse)

let transaction = new Transaction()
/*transaction.cart.push({
    name:Product.warehouse[0].getName,
    price:Product.warehouse[0].getPrice,
    qty:10,
    total: Product.warehouse[0].getPrice * 10
}, {
    name:Product.warehouse[3].getName,
    price:Product.warehouse[3].getPrice,
    qty:15,
    total: Product.warehouse[3].getPrice * 15
})*/

transaction.addToCart({
    name:Product.warehouse[0].getName,
    price:Product.warehouse[0].getPrice,
    qty:10,
    total: Product.warehouse[0].getPrice * 10
})

transaction.addToCart({
    name:Product.warehouse[3].getName,
    price:Product.warehouse[3].getPrice,
    qty:15,
    total: Product.warehouse[3].getPrice * 15
})

console.log(transaction.cart)
console.log(transaction.showTotal)
console.log(transaction.checkOut)