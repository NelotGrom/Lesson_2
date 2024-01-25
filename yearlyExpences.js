let expencesExamples = [ // кажется в задании опечатка в слове expen'c'es
    { yearlyExpences: [2500, 6000, 7000, 6000, 3, 9, 700, 8000, 655, 5700, 340, 5390] },
    { yearlyExpences: [500, 1000, 90000, 80, 980, 9000, 10, 400, 3000, 250, 45000, 1200] },
    { yearlyExpences: [20, 200, 8900, 3300, 2300, 1009, 1200, 2000, 670, 900, 900, 7000] },
   ];

function getExpensesLowerThanK (array) { // расчёт суммы затрат на один массив
    let yearlySum =0;
        for (i=0; array.length > i; i++) {
        if (array[i]>1000) {            //считаем затраты за 1к +
            yearlySum += array[i];
        } else {                                  //врываемся в затраты меньше либо равные 1000 
            let date = new Date;            //создаём дата объект
            date.setMonth(i);           // присваеваем ему значение месяца из индекса текущей итерации
            console.log(date.toLocaleString('en-US', { month: 'long' }))            //трансформируем в стрингу, отсылаем в консоль
        }
    }
    console.log(`За год ${yearlySum}`); 
}

// console.log(expencesExamples[0].yearlyExpences); 
// getExpensesLowerThanK(expencesExamples[0].yearlyExpences); //вызов функции для подсчёта одного массива

expencesExamples.forEach(function (eE) { // к каждому элементу expencesExamples(eE) обращаемся с функцией подсчёта
    getExpensesLowerThanK(eE.yearlyExpences); // в аргумент передаём свойство еЕ : массив затрат
    console.log('=================================================')            // графический консольный разделитель
});