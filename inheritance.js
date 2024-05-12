// Inheritance
class LivingThing {
    name = ""
    blood = true
    constructor(name, blood){
        this.name = name
        this.blood = blood
    }

    move(){
        console.log("move")
    }
}

class Human extends LivingThing {
    bone = true
    constructor(name, blood){
        super(name, blood)
    }
}

class Animal extends LivingThing {
    constructor(){
        super()
    }
}

let felix = new Human("Felix", true)

console.log(felix)

console.log(felix instanceof Human)
console.log(felix instanceof LivingThing)
console.log(felix instanceof Animal)