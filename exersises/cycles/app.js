const operations = [1000, -700, 300, -500, 10000]
let startingMoney = 100

function getBalance(operations, startingMoney){
    let balance = startingMoney;
    for(const element of operations){
        balance += element;
    }
    return balance
}

console.log(getBalance(operations, startingMoney))

function checkOperations(operations, startingMoney) {
    let balance = startingMoney;
    let isOk = true;
    for(const element of operations){
        balance += element;
        if(balance < 0){
            isOk = false;
            break;
        }
    }
    return isOk;
}

console.log(checkOperations(operations, startingMoney))


function averageOperations(operations){
    let positiveCount = 0;
    let negativeCount = 0;
    for(const element of operations){
        averegeOpp += element;
    }
    return (averegeOpp/operations.length)
}

console.log(averageOperations(operations))

