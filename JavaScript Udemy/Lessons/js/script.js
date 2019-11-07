let money, time;

function start() {                                                      //Функція старту
    money = +prompt("Ваш бюджет на месяц?", '');
    time = prompt('Введите дату в формате YYYY-MM-DD', '');
    
    while (isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?", '');
    }
}

start();


let appData = {
	budget: money,
	expenses: {},
	optionalExpenses: {},
	income: [],
	timeData: time,
    savings: true,
    choseExpenses: function () {
        for (let i = 0; i < 2; i++) {
            let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
                b = prompt("Во сколько обойдется?", '');
                
            if ((typeof(a)) === 'string' && ((typeof(a)) != null) && ((typeof(b)) != null) && a != "" && b != "" && a.length < 50)  {
                    console.log('done');
        
                appData.expenses[a] = b; 
            } else {
                console.log ("bad result");
                i = i - 1;
            }
                
        }
    },
    detectDayBudget: function () {
        appData.moneyPorDay = (appData.budget / 30).toFixed();
        alert('Ваш бюджет на один день составляет : ' + appData.moneyPorDay + ' доларов');
    },
    detectLevel: function () {
        if (appData.moneyPorDay < 100) {
            console.log('Минимальный уровень достатка');
        } else if (appData.moneyPorDay > 100 && appData.moneyPorDay < 2000 ) {
            console.log('Средний уровень достатка');
        } else if (appData.moneyPorDay > 2000) {
            console.log('Высокий оровень достатка');
        } else {
            console.log('Произошла ошибка');
        }
    },
    checkSavings: function () {
        if (appData.savings == true) {
            let save = +prompt('Какова сума накоплений'),
                percent = +prompt('Под какой процент');
    
            appData.monthIncome = save/100/12*percent;
            
            alert('Доход с вашего депозита: ' + appData.monthIncome);
        }
    },
    chooseOptExpenses: function () {
        for (let i = 0; i < 3; i++) {
            let opt = prompt('Статья необязательных расходов?');
            appData.optionalExpenses[i] = opt;
           
        }
    },
    chooseIncome: function () {
        for (let i = 0; i < 1; i++) {
            let items = prompt('Что принесет дополнительный доход. (Перечислите через запятую)', '');
            if ((typeof(items)) === 'string' && items != '' && items != null) {
                appData.income = items.split(', ');
                appData.income.push(prompt('Может вы что-то забыли?'));
                appData.income.sort();
                appData.income.forEach (function (item, i) {
                    alert("Способы доп. заработка: " + (i+1) + " - " + item);
                });
            } else {
                alert('Поле заполнено неверно, или осталось пустым. (Нужно ввести названия. Не оставляйте поле пустым)');
                i--;
            }
        }
    }
};

for (let key in appData) {
    console.log("Наша программа включает в себя данные: " + key + " - " + appData[key]);
}
