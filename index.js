// Your code here
function saturdayFun(activity="roller-skate"){
    return `This Saturday, I want to ${activity}!`
}

function mondayWork(activity="go to the office"){
    return `This Monday, I will ${activity}.`
}

function wrapAdjective(flair="*"){
    return function(adj="special"){
        return `You are ${flair}${adj}${flair}!`
    }
}

let Calculator = {
    add: function(a, b){
        return a + b
    },
    subtract: function(a, b){
        return a - b
    },
    multiply: function(a, b){
        return a * b
    },
    divide: function(a, b){
        return a / b
    }
}

function createFareMultiplier(int){
    debugger
    if (int == 4){
        return fareDoubler()
    } else if (int == 3){
        return fareTripler()
    } else if (int == 2){
        return fareQuadrupler()
    } else {
        return int
    }
}

function actionApplyer(int, equations){
    console.log(int, equations)
    
    if (equations.length == 0){
        return int

    } else {
        equations.forEach(function(eq){
            // console.log(int)
            int = eq(int)
            console.log(eq(int))
        })
        return int
    }
}

const fareDoubler = function(fare){
    return fare * 2
}
const fareTripler = function(fare){
    return fare * 3
}
const fareQuadrupler = function(fare){
    return fare * 4
}