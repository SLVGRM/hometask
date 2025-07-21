// Дан массив чисел: arr = [1, 40, -5, 10, 0]

// Написать функцию, которая сортирует данный массив при помощи циклов.

// Подсказка:

// Нужно использовать 2 цикла, вложенных друг в друга
// Нужно сравнивать и менять элементы

const arr = [1, 40, -5, 10, 0];

function getSortedArr(arr){
    const sortedArr = [...arr];
    for (let i = 0; i < sortedArr.length; i++){
        for (let j = 0; j < sortedArr.length; j++){
            if (sortedArr[i] < sortedArr[j]){
                let temp = sortedArr[i]
                sortedArr[i] = sortedArr[j]
                sortedArr[j] = temp
                console.log(sortedArr)
            }
        console.log(sortedArr)
        }
    }
    return sortedArr
}

console.log(getSortedArr(arr))




