let language = navigator.language;

    switch(true) {
        case language === 'en-US':
            console.log('Hellow my friend!')
            break;
        case language === 'ru-RU':
            console.log('Здравствуйте, у вас установлен русский язык')
            break;
        case language === 'de-DE':
            console.log('Ja ja, naturlich')
            break;
        default: 
            console.log('Sorry it is so hard to make my code more complicated, I couldnt define your language')
    }