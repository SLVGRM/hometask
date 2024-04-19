

//Конечно, стоит обработать и другие невалидные кейсы, но я пока не умею
function GetDistance(posLatitude, posLongitude, destLatitude, destLongitude) {
    // Проверка типов данных
    if (typeof posLatitude !== 'number' || typeof posLongitude !== 'number' || typeof destLatitude !== 'number' || typeof destLongitude !== 'number') {
        console.log("Ошибка: Все параметры должны быть числами.");
        return;
    }
    let distance = Math.sqrt(Math.pow((Number(posLatitude) - destLatitude), 2) + Math.pow((posLongitude - destLongitude), 2));
    console.log(distance);
}

GetDistance(1, 0, 3, 4)