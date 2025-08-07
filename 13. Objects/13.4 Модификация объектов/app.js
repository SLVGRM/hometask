const users = [
    { name: 'Вася', surname: 'Пупкин', age: 30, skills: ['Разработка', 'DevOps'] },
    { name: 'Катя', age: 18, surname: 'Белова', skills: ['Дизайн'] },
];

const usersData = users.map(el =>  ({
    fullName: `${el.name} ${el.surname}`,
    skills: el.skills.length
        }
    )
)

console.log(usersData)