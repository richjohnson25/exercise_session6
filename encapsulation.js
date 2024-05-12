// Encapsulation, Getter and Setter
class Person {
    name = "anonim"
    stand = ""

    set setName(name){
        if(!name){
            console.log("name must be filled")
            return false
        }

        if(name.length <= 3){
            console.log("name must be more than 3 chars")
            return false
        }
        this.name = name
    }

    get getName(){
        return this.name
    }

    set setStand(stand){
        this.stand = stand
    }

    get getStand(){
        return this.stand
    }
}

let dimas = new Person()
dimas.setName = "Dimas"
dimas.setStand = "Star Platinum Over Heaven"
console.log(dimas)
console.log(dimas.getStand)