// Написать функцию проверки номера карты алгоритмом Луна. 
// В функцию передаётся карта: 4561-2612-1234-5464,
// а функция возвращает true, если карта проходит алгоритм и false, если нет.

const correctNum = '4561-2612-1234-5464'
const incorrectNum = '9099-2612-1234-5464'

function checkCardNumber(cardNumber) {
    cardNumber = cardNumber.trim()
    .replaceAll('-', '')
    if(isNaN(cardNumber)){
        console.log('Not valid cardnumber')
        return false
    }
    const digits = cardNumber.split('').map(Number);
    let sum = 0
    
    for(let i = 0; i < digits.length; i++){
        let digit = digits[i]
        if(i % 2 === 1){
            digit *= 2
            if(digit > 9) {
                digit -= 9
            }
        }
        sum += digit;
    }
    return sum % 10 === 0;
} 

console.log(checkCardNumber(correctNum))
console.log(checkCardNumber(incorrectNum))