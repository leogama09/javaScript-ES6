// 1- var, let e const
var x = 10
var y = 15

if(y > 10) {
    var x = 5
    console.log(x)
}

console.log(x)

let a = 10
let b = 15

if(b > 10) {
    let a = 5
    console.log(a)
}

console.log(a)

let i = 100

for(let i = 0; i < 5; i++) {
    console.log(i)
}
    

console.log(i)

function logName() {
    const name = 'Leonardo'
    console.log(name)
}

const name = 'Pedro'

logName()

console.log(name)

// 2- arrow function
const sum = function sum(a, b) {
    return a + b
}

const arrowSum = (a, b) => a + b

console.log(sum(5, 5))
console.log(arrowSum(5, 5))

const greeting = (name) => {
    if(name) {
        return "Olá " + name + "!"
    } else {
        return "Olá!"
    }
}

console.log(greeting("Leonardo"))
console.log(greeting)

const testeArrow = () => console.log("testou!")

testeArrow()

// const user = {
//     name: "Theo",
//     sayUserName() {
//         var self = this
//         setTimeout(function() {
//             console.log(self)
//             console.log("Username: " + self.name)
//         }, 500)
//     },
//     sayUserNameArrow() {
//         setTimeout(() => {
//             console.log(this)
//             console.log("Username: " + this.name)
//         }, 700)
//     }
// }

// user.sayUserName()
// user.sayUserNameArrow()

// 3- Filter
const arr  = [1, 2, 3, 4, 5]

console.log(arr)

const highNumbers = arr.filter((n) => {
    if(n >= 3) {
        return n
    }
})

console.log(highNumbers)

const users = [
    { name: "Leonardo", available: true },
    { name: "Pedro", available: false },
    { name: "Marcos", available: false },
    { name: "Júlio", available: true },
]

const availableUsers = users.filter((user) => user.available)
const notAvailableUsers = users.filter((user) => !user.available)

console.log(availableUsers)
console.log(notAvailableUsers)


// 4- Map
const products = [
    {name: 'Camisa', price: 10.99, category: 'Roupas'},
    {name: 'Chaleira  Elétrica', price: 49.99, category: 'Eletro'},
    {name: 'Fogão', price: 400, category: 'Eletro'},
    {name: 'Calça jeans', price: 50.99, category: 'Roupas'},
]

products.map((product) => {
    if(product.category === 'Roupas') {
        product.onSale = true
    }
})

console.log(products)

// 5- Template literals
const  userName = "Leonardo"
const age = 26

console.log(`O nome do usuário é ${userName} e ele tem ${age} anos.`)

// 6- Destructuring
const fruits = ["Maçã", "Laranja", "Mamão"]

const[f1, f2, f3] = fruits

console.log(f1)

console.log(f3)

const productDetails = {
    name: "Mouse Gamer",
    price: 299.90,
    category: "Periféricos",
    color: "Cinza"
}

const {name: productName, price, category: productCategory, color} = productDetails

console.log(`O nome do produto é ${productName}, custa R$${price}, pertence a categoria ${productCategory} e é da cor ${color}`)