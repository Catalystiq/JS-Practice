console.log(1);
console.log(2);

setTimeout(() => {
    //console.log('callback function fired');
}, 2000)

console.log(3);
console.log(4);



const getTodos = (resource) => {

    return new Promise((resolve, reject) => {
        const request = new XMLHttpRequest();

        request.addEventListener('readystatechange', () => {
            if (request.readyState === 4 && request.status === 200) {
                const data = JSON.parse(request.responseText);
                //callback(undefined, data);
                resolve(data);
            } else if (request.readyState === 4) {
                //callback('could not fetch data', undefined);
                reject('error getting resource');
            }
        });

        request.open('GET', resource);
        request.send();
    });


};
getTodos('todos/luigi.json').then((data) => {
    console.log('promise 1 resolved: ', data)
    return getTodos('todos/mario.json');
}).then((data) => {
    console.log('promise 2 resolved: ', data);
    return getTodos('todos/shaun.json');
}).then((data) => {
    console.log('promise 3 resolved: ', data);
}).catch((err) => {
    console.log('promise rejected: ', err);
})






// console.log(1);
// console.log(2);

//promise example
const getSomething = () => {

    return new Promise((resolve, reject) => {
        //fetch something
        resolve('some data');
        //reject('some error');
    });

}

getSomething().then((data) => {
    console.log(data);
    
}, (err) => {
    console.log(err);
});


// console.log(3);
// console.log(4);


getSomething().then((data) => {
    console.log(data);
    console.log('');
}).catch((err) => {
    console.log(err)
});






/* getTodos('todos/luigi.json', (err, data) => {
    console.log(data);
    getTodos('todos/mario.json', (err, data) => {
        console.log(data);
        getTodos('todos/shaun.json', (err, data) => {
            console.log(data);
        })
    })
     console.log(err, data);
    if (err) {
        console.log(err);
    } else {
        console.log(data);
    } 
}); */








