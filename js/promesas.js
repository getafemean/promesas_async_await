const users = ['Juan Pérez','Lucía Gómez','Carlos López','Sara García'];

function getUser(position, timeout) {
    return new Promise((resolve, reject) => {
        if(typeof position !== 'number' || position >= users.length) {
            reject('Posición no válida'); // No hace falta return All credits to Enrique
        }
        setTimeout(() => {
            resolve({user: users[position]})
        }, timeout)
    })
}

function showMessage(name) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Hola ' +  name);
        }, 3000)
    })
}

getUser('pepe', 2000)
    .then(data => {
        console.log(data);
        return getUser(3, 1000);
    })
    .then(data => {
        console.log(data);
        return showMessage(data.user)
    })
    .then(data => {
        console.log(data);
    })
    .catch(err => console.error(err));

    
getUser(0, 1000)
    .then(data => console.log(data))
    .catch(err => console.error(err));