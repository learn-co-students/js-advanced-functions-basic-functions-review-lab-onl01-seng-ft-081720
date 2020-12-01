// Your code here
function saturdayFun(activity = "roller-skate"){
    return `This Saturday, I want to ${activity}!`
}

function mondayWork(activity = "go to the office"){
    return `This Monday, I will ${activity}.` 
}

function wrapAdjective(string = "*"){
    let innerFunction = function (word ="special") { 
        return `You are ${string}${word}${string}!` 
    }
    return innerFunction
}
wrapAdjective("%")()

let Calculator = {
    add: function (x, y) {
        return x + y
    },
    subtract: function (x, y) {
        return x - y
    },
    multiply: function (x, y) {
        return x * y
    },
    divide: function (x, y) {
        return x / y
    }
}

function actionApplyer(s, ray){
    let a = s

    for (let i = 0; i < ray.length; i++) {
        a = ray[i](a)
    }
    return a
}