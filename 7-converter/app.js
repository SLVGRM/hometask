// Задание:

// Создать функцию конвертации валют, принимающую три параметра:
// Сумма для конвертации
// Исходная валюта
// Целевая валюта
// Пример работы функции:

// Примерно $1000 рублей к долларам вернет $30.
// Обработка ошибок:

// Если курс для пары валют неизвестен (например, нет курса рубль к ене), функция вернет 0.
// Логика функции:

// В функции должны содержаться курсы конвертации для поддерживаемых валют (например, рубль к доллару и обратно).
// Реализовать логику конвертации с простыми математическими операциями, исходя из входных параметров.
// Если курс конвертации для заданной пары валют отсутствует, возвращается 0.
// Расширение функциональности:

// Добавьте поддержку нескольких валют, минимум рубли, доллары, евро.
// Протестируйте функцию с различными входными данными.

const usdToRubExchangeRate = 92.28;
const euroToRubExchangeRate = 98.98;

function currencyСonverter (summ, originCurrency, finalCurrency) {
    
    const originCur = originCurrency.toLowerCase();
    const finalCur = finalCurrency.toLowerCase();

    switch(true) {
        case (originCur === 'rub' || originCur === 'рубль') && (finalCur === 'usd' || finalCur === 'доллар') :
            return rubToUsdConverter(summ, originCur, finalCur).toFixed(2);

        case (originCur === 'rub' || originCur === 'рубль') && (finalCur === 'euro' || finalCur === 'евро') :
            return rubToEuroConverter(summ, originCur, finalCur).toFixed(2);

        case (originCur === 'usd' || originCur === 'доллар') && (finalCur === 'rub' || finalCur === 'рубль') :
            return usdToRubConverter(summ, originCur, finalCur).toFixed(2);

        case (originCur === 'euro' || originCur === 'евро') && (finalCur === 'rub' || finalCur === 'рубль') :
            return euroToRubConverter(summ, originCur, finalCur).toFixed(2);
        
        default: 
            return 0;
    }
}

function usdToRubConverter (summ) {
    return summ * usdToRubExchangeRate;
}

function rubToUsdConverter (summ) {
    return summ / usdToRubExchangeRate;
}

function euroToRubConverter (summ) {
    return summ * euroToRubExchangeRate;
}

function rubToEuroConverter (summ) {
    return summ / euroToRubExchangeRate;
}


console.log(currencyСonverter(100, 'rub', 'usd'));

console.log(currencyСonverter(100, 'usd', 'rub'));

console.log(currencyСonverter(100, 'EURO', 'rub'));

console.log(currencyСonverter(100, 'РуБлЬ', 'Евро'));

console.log(currencyСonverter(100, 'йена', 'Евро'));