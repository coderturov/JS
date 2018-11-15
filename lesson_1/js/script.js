var money = prompt("Ваш бюджет на месяц?");
var time = prompt("Введите дату в формате YYYY-MM-DD");

var appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    saving: false
};
var key1 = prompt("введите статью расходов");
appData.expenses[key1] = prompt("во сколько обойдется?");
var key2 = prompt("введите статью расходов");
appData.expenses[key2] = prompt("во сколько обойдется?");
console.log(appData);

document.write(appData.budget/30);