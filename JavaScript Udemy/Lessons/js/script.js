let money = prompt('Ваш бюджет на месяц?'),
    time = prompt('Введите дату в формате YYYY-MM-DD');

let appData = {
    budget : money,
    timeData : time,
    expenses: {
        moneyForMonth: prompt("Введите обязательную статью расходов в этом месяце"),
        howMany: prompt('Во сколько обойдется?') 
    },
    income: [],
    savings: false
};

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