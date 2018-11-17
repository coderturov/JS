/*var num = 50;

switch(num) {
    case 30:
        console.log("no");
        break;
    case num > 55:
        console.log("nono");
        break;
    case num < 60:
        console.log("perfect");
        break;
    default:
        console.log("не получилось((");
        break;
}*/

var money = +prompt("Ваш бюджет на месяц?");
var time = prompt("Введите дату в формате YYYY-MM-DD");

var appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    saving: false
};


/*for (let i = 0; i < 2; i++) {

    let a = prompt("введите статью расходов"),
        b = prompt("во сколько обойдется?");

    if ( (typeof(a))=== 'string' && (typeof(a)) != null && (typeof(b)) != null 
    && a != '' && b != '' && a.length < 10) {
        console.log("done");
        appData.expenses[a] = b;
    }  
};*/
/*let i = 0;
while (i < 2) {
    let a = prompt("введите статью расходов"),
        b = prompt("во сколько обойдется?");
        if ( (typeof(a))=== 'string' && (typeof(a)) != null && (typeof(b)) != null 
    && a != '' && b != '' && a.length < 10) {
        console.log("done");
        appData.expenses[a] = b;  
    } 
    i++;            
}*/
let i = 0;
do {
    let a = prompt("введите статью расходов"),
        b = prompt("во сколько обойдется?");
        if ( (typeof(a))=== 'string' && (typeof(a)) != null && (typeof(b)) != null 
&& a != '' && b != '' && a.length < 10) {
        console.log("done");
        appData.expenses[a] = b;
}
        i++;         
}
while (i < 2);

appData.moneyPerDay = appData.budget / 30;

alert("Ежедневный бюджет:" + appData.moneyPerDay);
if(appData.moneyPerDay < 100) {
    console.log("Минимальный уровень достатка");
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
        console.log("Средний уровень достатка");
    }   else if (appData.moneyPerDay > 2000) {
        console.log("Высокий уровень достатка")
    }   else {
        console.log("Произошла ошибка");
    }

console.log(appData);
