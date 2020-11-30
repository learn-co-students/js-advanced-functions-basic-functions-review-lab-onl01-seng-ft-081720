// Your code here
function saturdayFun(x = 'roller-skate'){
    return `This Saturday, I want to ${x}!`
}

function mondayWork(x = 'go to the office'){
    return `This Monday, I will ${x}.`
}

function wrapAdjective(x, y = "*"){
    return `You are ${y}${x}${y}`
}

const Calculator = {
    add: function(x,y){
        return x + y
    },
    subtract: function(x,y){
        return x - y
    }, 
    multiply: function(x,y){
        return x * y
    },
    divide: function(x,y){
        return x / y
    }
}

function actionApplyer(integer, array){
    if (array.length === 0){
        return integer
    } else {
        let x = integer
        for (let i = 0; i < array.length; i++){
            x = array[i](x)
        }
        return x
    }
}