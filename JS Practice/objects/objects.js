//object literals

let users = {
    name: 'crystal',
    age: 30,
    email: 'crystal@thenetninja.co.uk',
    location: 'berlin',
    blogs: ['why mac & cheese rules', '10 thingsto make with marmite']
};

console.log(users);
console.log(users.name);


users.age = 35;
console.log(users.age);

console.log(users['name']);
console.log(users['email']);
users['name'] = 'chun-li';
console.log(users['name']);


const key = 'location';
console.log(users[key]);


console.log(typeof users);
console.log('');







//Object literals

//  const blogs = [
//      {title: 'why mac and cheese rules', likes: 30},
//      {title: '10 things to make with marmite', likes: 50}
// ];

// console.log(blogs);

let user = {
    name: 'james',
    age: 14,
    email: 'jamesnel.exe@gmail.com',
    location: 'slc',
    blogs: [{
            title: 'why mac and cheese rules',
            likes: 30
        },
        {
            title: '10 things to make with marmite',
            likes: 50
        }
    ],
    login() {
        console.log('the user logged in');
    },
    logout() {
        console.log('the user logged out');
    },
    logBlogs() {
        //console.log(this.blogs);
        console.log('this user has written the following blogs');
        this.blogs.forEach(blog => {
            console.log(blog.title, blog.likes);
        })
    }
};

user.login();
user.logout();
user.logBlogs();
console.log(this);

const names = 'mario';
names.toUpperCase();
console.log(names);
console.log('');


//Math Objects

console.log(Math);
console.log(Math.PI);
console.log(Math.E);

const area = 7.7;

console.log(Math.round(area));
console.log(Math.floor(area));
console.log(Math.ceil(area));
console.log(Math.trunc(area));

//Random Numbers

const random = Math.random();

console.log(random);
console.log(Math.round(random * 100));
console.log('');




//Primitive Values

// let scoreOne = 50;
// let scoreTwo = scoreOne;

// console.log(`scoreOne: ${scoreOne}`, `scoreTwo: ${scoreTwo}`);

// scoreOne = 100;
// console.log(`scoreOne: ${scoreOne}`, `scoreTwo: ${scoreTwo}`);

//reference values

const userOne = {
    name: 'ryu',
    age: 30
};
const userTwo = userOne;

console.log(userOne, userTwo);

userTwo.age = 40;
userOne.name = 'chun-li';
console.log(userOne, userTwo);