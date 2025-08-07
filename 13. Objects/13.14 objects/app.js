
let queryParameters = {
    search: 'Вася',
    take: 10,
    skills: 'testing',
    height: 177
}

function getUrlWithQuery(queryParameters){
    return Object.entries(queryParameters)
    .map(([key, value]) => `${key}=${value}`)
    .join('&')
}

console.log(getUrlWithQuery(queryParameters))
