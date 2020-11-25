// Your code here
function saturdayFun(activity = 'roller-skate') {
    return `This Saturday, I want to ${activity}!` 
}

function mondayWork(activity = 'go to the office') {
    return `This Monday, I will ${activity}.`
}

function wrapAdjective(emphasis = '*') {
    return function(s = 'special') {
        let wrapper = `${emphasis}${s}${emphasis}`
        return `You are ${wrapper}!`
    }
}

let Calculator = {
    
    add: function(num1, num2) {
        return num1 + num2
    },

    subtract: function(num1, num2) {
        return num1 - num2
    },

    multiply: function(num1, num2) {
        return num1 * num2
    },

    divide: function(num1, num2) {
        return num1 / num2
    }
}

function actionApplyer(array) {
    if (array == []) {
        return 0
    }
    else {
        return (array * 2 + 1000) % 7
    }
}