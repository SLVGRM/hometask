function crypto(password) {
    const [_, first, second, third, ...others] = password.split('')
    const letersJoin = others.join('')
    const cryptoPass = letersJoin+second+third+first;
    return cryptoPass;
}

function checkPass(cryptoPass, checkedPass){
    const checker = crypto(checkedPass);
    if(cryptoPass === checker){
        return console.log('Password correct')
    }
    else{
        console.log('Password incorrect')
    }
}

checkPass('колоо', 'молоко')
checkPass('мякажео', 'Кожемяка')
checkPass('мякажео', '123')
