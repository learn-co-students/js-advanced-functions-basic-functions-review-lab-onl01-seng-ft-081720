function saturdayFun(activity="roller-skate"){
    return `This Saturday, I want to ${activity}!`;
}

function mondayWork(activity="go to the office"){
    return `This Monday, I will ${activity}.`;
}

function wrapAdjective(star="*") {
    return function(adjective="special") {
      return `You are ${star}${adjective}${star}!`
    }
  }

const Calculator = {
    add(a,b) {
        return a + b;
      },
      subtract(a,b) {
        return a - b
      },
      multiply(a,b) {
        return a * b
      },
      divide(a,b) {
        return a / b;
      }
    }

function actionApplyer(strtpt, arr){
    let num = strtpt 
    for (const fun of arr){
        num = fun(num)
    }
    return num;
}