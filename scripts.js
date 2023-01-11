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

const user = {
    name: "Theo",
    sayUserName() {
        var self = this
        setTimeout(function() {
            console.log(self)
            console.log("Username: " + self.name)
        }, 500)
    },
    sayUserNameArrow() {
        setTimeout(() => {
            console.log(this)
            console.log("Username: " + this.name)
        }, 700)
    }
}

user.sayUserName()
user.sayUserNameArrow()