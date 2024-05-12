let str = new String("abcd")
let str2 = "abcd"
console.log(str)
//console.log(str2.push(2))

let arr = []
let arr2 = new Array([1,2,3])

arr2.join(",")

let car = {
    name:"BMW",
    color:"black",
    run:() => {
        console.log("run at 199km/h")
    }
}
console.log(car)

let car2 = new Object({
    name:"BMW",
    color:"black"
})
console.log(car2)

let date1 = new Date("2022-01-02")
let date2 = new Date("2021-04-09")

console.log(date1 - date2)

let car3 = {
    1:2,
    name:"Lamborghini",
    color:"black",
    foo:"bar",
    run:() => {
        console.log("run at 199km/h")
    }
}

console.log(car.name)
car3.price = 100000000

console.log(car3)
car3.run()

car3.drive = function(){
    console.log("let's drive")
    return "GO"
}

console.log(car3.drive())

//let name = "color"

String.prototype.getName = function(){
    console.log("hello ", this)
}

//name.getName()

delete car3.foo

console.log(car3)

console.log(car3['color'])
console.log(car3[1])
let name = "sdfdsfdsfdsf"
console.log(car3[name])

let age = 33 >= 17 ? "punya KTP" : "tidak punya KTP"

let person = {
    address:{
        city:"jakarta"
    },
    name:"dimas",
    age:33,
    greet:function(){
        console.log(this)
        console.log(this.name, " say hello ")
    }
}

console.log(person.address)
console.log(person.address?.city)
console.log(person.address ? person.address.city : person.address)

console.log(Object.keys(person))

for(abc in person){
    console.log(abc," --> ", person.abc, person[abc])
}

for(let i = 0; i < 5; i+=3){
    person.age += 1
}

console.log(person.age)
console.log(person.address[2])
console.log(person.address.city[2])

let num1 = [1,2,3]
let num2 = [4,5,6]

let obj1 = { name:'dimas' }
let obj2 = { age:33 }

let result = [...num1, ...num2]
console.log(result)
let result2 = [num1, num2]
console.log(result2)

let result3 = {...obj1, ...obj2}
console.log(result3)

let result4 = {obj1, obj2}
console.log(result4)

person.greet()

console.log(Object.is(person, person))
console.log(Object.is(person, {}))
console.log(Object.is(1,1))
console.log(Object.is(false, false))

console.log(Object.assign(person))
console.log(Object.create(person))
console.log(Object.entries(person))

Object.freeze(person)

person.name = "Rian"

console.log(person)

let target = { a:1, b:2 }
let source = { b:6, c:5 }

Object.assign(target, source)

console.log(target)

class User {
    constructor(name){
        console.log(" ini constructor di class User")
        this.name = name
    }
    greeting(){
        console.log(this.name, " says the World over heaven")
    }
}

function User2(name){
    this.name = name
}

const User3 = () => {
    name=""
}

const User4 = class {
    constructor(name){
        this.name = name
    }
}

class User5 {
    name = ""
    constructor(name){
        this.name = name
    }

    #stand = "Cheap Trick"
    getStand(){
        console.log(this.#stand)
    }
    setStand(){
        this.#stand = stand
    }

    static ability = "attack"
    static getAbility(){
        console.log(" get ability")
        console.log(" name --> ", this.name)
        console.log(" ability --> ", this.ability)
    }
}

let objUser = new User("Dimas")
console.log(objUser)

let objUser2 = new User2("Richard")
console.log(objUser2)

let objUser4 = new User4("Indriyanus")

console.log(typeof User)
let objUser5 = new User5
let objUser5b = new User5
console.log(objUser5)
console.log(objUser5b)

objUser5.name = "aries dimas"
objUser5.age = 33

console.log(objUser5)
console.log(objUser5b)

let rian = new User("rian")
console.log(rian)
let vian = new User("vian")
vian.greeting()
let dio = new User("Dio Brando")
console.log(dio)
let jotaro = new User5()
let josuke = new User5("Josuke")

josuke.setStand("Crazy Diamond")

josuke.getStand()

dio.greeting()
jotaro.getStand()
//console.log(jotaro.#stand)

console.log(jotaro.ability)
console.log(User5.ability)
User5.getAbility()

class Fruit {
    name = ""
    power = ""
    constructor(name, power){
        this.name = name
        this.power = power
    }

    getPower(){
        console.log("power : ", this.power)
    }

    static type = ""
    static getType(){
        console.log("type : ", this.type)
    }
}

let fruit1 = new Fruit("Mera mera no mi","Fire")
console.log(fruit1)
console.log(fruit1.name)
fruit1.user = "Sabo"
console.log(fruit1)

let fruit2 = new Fruit("Pika pika no mi","Light")
console.log(fruit2)

Fruit.type = "Logia"
console.log(Fruit.type)