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
	savings: true
};


function choseExpenses () {                                                             //Функція обовязкових витрат
    for (let i = 0; i < 2; i++) {
        let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
            b = prompt("Во сколько обойдется?", '');
            
        if ((typeof(a)) === 'string' && ((typeof(a)) != null) && ((typeof(b)) != null) && a != "" && b != "" && a.length < 50)  {
                console.log('done');
    
            appData.expenses[a] = b; 
        } else {
            console.log ("bad result");
            i--;
        }
            
    }
}

choseExpenses();

function chooseOptExpenses () {                                                 //Функція необовязкових витрат
    for (let i = 0; i < 3; i++) {
        let questionOptExpenses = prompt('Статья необязательных расходов?');

        if ((typeof(questionOptExpenses) == 'string' && (typeof(questionOptExpenses) != null) && questionOptExpenses != '' && questionOptExpenses.length < 50)) {
            console.log('nice');

            appData.optionalExpenses[i] = questionOptExpenses;
        } else {
            console.log('bed result');
            i--;
        }
    }
}

chooseOptExpenses ();


function detectDayBudget () {                                                         //Функція коштів на 1 день
    appData.moneyPorDay = (appData.budget / 30).toFixed();
    alert('Ваш бюджет на один день составляет : ' + appData.moneyPorDay + '' + 'доларов');
}

detectDayBudget();


function detectLevel () {                                                           //Функція рівня достатку
    if (appData.moneyPorDay < 100) {
        console.log('Минимальный уровень достатка');
    } else if (appData.moneyPorDay > 100 && appData.moneyPorDay < 2000 ) {
        console.log('Средний уровень достатка');
    } else if (appData.moneyPorDay > 2000) {
        console.log('Высокий оровень достатка');
    } else {
        console.log('Произошла ошибка');
    }
}

detectLevel();



function checkSavings () {                                                      //Функція кількості накопичень
    if (appData.savings == true) {
        let save = +prompt('Какова сума накоплений'),
            percent = +prompt('Под какой процент');

        appData.monthIncome = save/100/12*percent;
        
        alert('Доход с вашего депозита: ' + appData.monthIncome);
    }
}

checkSavings();
