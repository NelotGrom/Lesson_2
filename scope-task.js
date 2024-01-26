
const calculateBonus =   (a, b) => {
    let bonus; // bonuses уже объявлена, но значение не задано (т.е. неопределено)
    const sum = a + b;
    debugger; // в переменную sum записано значение суммы двух аргументов
    sum > 50 ? (bonus = 50) : (bonus = sum);
    debugger; // переменной bonus присвоилось значение из переменной sum
    return bonus;
};

calculateBonus(1,2) // вызвал функцию, потому что без передачи в неё аргументов логично в тело функции не попадал