
function saturdayFun(activity="roller-skate") {
    return `This Saturday, I want to ${activity}!`;
}

function mondayWork(activity="go to the office") {
    return `This Monday, I will ${activity}.`
}

function wrapAdjective(excl="*") {
    return function(param="special") {
        return `You are ${excl}${param}${excl}!`;
    }
}

let Calculator = {
    add: function(a, b) {
        return a + b;
    },

    subtract: function(a, b) {
        return a - b;
    },

    multiply: function(a, b) {
        return a * b;
    },

    divide: function(a, b) {
        return a / b;
    }
}

function actionApplyer(int, arrFunc) {
    let r = int
    
    for (let i = 0; i < arrFunc.length; i++) {
       r = arrFunc[i](r);
    }
    return r;
}
