let money = prompt("Ваш бюджет на месяц?", ''),
	time = prompt('Введите дату в формате YYYY-MM-DD', '');

let appData = {
	budget: money,
	expenses: {},
	optionalExpenses: {},
	income: [],
	timeData: time,
	savings: false
};

let a1 = prompt("Введите обязательную статью расходов в этом месяце", ''),
	a2 = prompt("Во сколько обойдется?", ''),
	a3 = prompt("Введите обязательную статью расходов в этом месяце", ''),
	a4 = prompt("Во сколько обойдется?", '');

appData.expenses.a1 = a2;
appData.expenses.a3 = a4;

console.log(appData.expenses.a1);
console.log(appData.expenses.a3);
alert(appData.budget / 30);

/*Вопросы к этому заданию:
Сколько типов данных существует в JS?
ответ - 7

Как вывести информацию в консоль?
ответ - через команду console.log();

Какая функция операторов || и &&?
ответ - || вернет true если хоть одно из значений верно
        && вернет true если оба значение верны.
*/