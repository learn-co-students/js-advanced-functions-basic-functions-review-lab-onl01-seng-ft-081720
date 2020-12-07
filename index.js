// Your code here
function saturdayFun(activity="roller-skate") {
    return `This Saturday, I want to ${activity}!`
};

function mondayWork(work="go to the office") {
    return `This Monday, I will ${work}.`
};

function wrapAdjective(sym="*") {
    return function(adj="special") {
        return `You are ${sym}${adj}${sym}!`
    }
};

const Calculator = {
    add: function(num1, num2) {
        return num1 + num2;
    },
    subtract: function(num1, num2) {
        return num1 - num2;
    },
    multiply: function(num1, num2) {
        return num1 * num2;
    },
    divide: function(num1, num2) {
        return num1 / num2;
    },
};

function actionApplyer(int, array) {
    let a = int

    for (let i = 0; i < array.length; i++ ){
      a = array[i](a)
    }
  
    return a
};

