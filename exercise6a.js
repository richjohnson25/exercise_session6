/* Exercise 1: Create a function to calculate array of student data
● The object has this following properties :
○ Name → String
○ Email → String
○ Age → Date
○ Score → Number
● Parameters : array of student
● Return values :
○ Object with this following properties :
■ Score
● Highest
● Lowest
● Average
■ Age
● Highest
● Lowest
● Average*/
function calculateStudentData(studentArr){
    totalScore = 0
    totalAge = 0
    let result = {
        score:{
            highest:studentArr[0].score,
            lowest:studentArr[0].score,
            average:0
        },
        age:{
            highest:calculateAge(studentArr[0].birthDate),
            lowest:calculateAge(studentArr[0].birthDate),
            average:0
        }
    }

    for(let i = 0; i < studentArr.length; i++){
        // Score
        // Highest score
        if(studentArr[i].score > result.score.highest){
            result.score.highest = studentArr[i].score
        }
        // Lowest score
        if(studentArr[i].score < result.score.lowest){
            result.score.lowest = studentArr[i].score
        }
        // Score sum
        totalScore += studentArr[i].score

        // Age
        // Oldest person
        if(calculateAge(studentArr[i].birthDate) > result.age.highest){
            result.age.highest = calculateAge(studentArr[i].birthDate)
        }
        // Youngest person
        if(calculateAge(studentArr[i].birthDate) < result.age.lowest){
            result.age.lowest = calculateAge(studentArr[i].birthDate)
        }
        // Age sum
        totalAge += calculateAge(studentArr[i].birthDate)
    }

    result.score.average = Math.floor(totalScore / studentArr.length)
    result.age.average = Math.floor(totalAge / studentArr.length)

    return result
}

function calculateAge(birthDate){
    /*console.log(new Date() - birthDate)
    console.log(birthDate)*/
    return Math.floor((new Date() - birthDate) / (365 * 24 * 60 * 60 * 1000))
}

console.log(calculateStudentData([
    {
        name:"Aulia Permana",
        email:"pramana.aulia@gmail.com",
        birthDate:new Date("1995-10-14"),
        score:80
    },
    {
        name:"Felix Lie Pratama",
        email:"felix.lie@gmail.com",
        birthDate:new Date("2000-02-18"),
        score:85
    },
    {
        name:"Indriyanus",
        email:"indri.yanus@gmail.com",
        birthDate:new Date("1997-06-25"),
        score:92
    },
    {
        name:"Rexy Hartono",
        email:"rexy.h@gmail.com",
        birthDate:new Date("2000-08-30"),
        score:70
    }
]))