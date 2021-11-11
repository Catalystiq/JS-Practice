//create a basic javascript object

let animal = {
    name: "carl",
    numLegs: 4
};

//use dot notation to access the properties of an object

let dog = {
    name: "Spot",
    numLegs: 4
};
console.log(dog.name);
console.log(dog.numLegs);

//create a method on an object

let dog1 = {
    name: "Spot",
    numLegs: 4,
    sayLegs: function () {
        return `This dog has ${dog1.numLegs} legs.`
    }
};

console.log(dog1.sayLegs());

//make code more reusable with the this keyword

let dog2 = {
    name: "Spot",
    numLegs: 4,
    sayLegs: function () {
        return `This dog has ${this.numLegs} legs.`;
    }
};

console.log(dog2.sayLegs());

//define a constructor function

function Dog() {
    this.name = "Carl";
    this.color = "Brown";
    this.numLegs = 4;
}

//use a constructor to create a new object

function Dog1() {
    this.name = "Rupert";
    this.color = "brown";
    this.numLegs = 4;
}

let hound = new Dog1();

//extend contructors to recieve arguments

function Dog2(name, color) {
    this.name = name;
    this.color = color;
    this.numLegs = 4;
}
let terrier = new Dog2("Mark", "Black");

//verify an object's constructor with instanceof

function House(numBedrooms) {
    this.numBedrooms = numBedrooms;
}

let myHouse = new House(6);
console.log(myHouse instanceof House);

//understand own properties

function Bird(name) {
    this.name = name;
    this.numLegs = 2;
}

let canary = new Bird("Tweety");
let ownProps = [];
for (let property in canary) {
    if (canary.hasOwnProperty(property)) {
        ownProps.push(property);
    }
}
console.log(ownProps);

//use protoype properties to reduce duplicate code

function Dog3(name) {
    this.name = name;
}


Dog3.prototype.numLegs = 2;
let beagle = new Dog3("Snoopy");
console.log(Dog3.prototype.numLegs);

//iterate over all properties

function Dog4(name) {
    this.name = name;
}

Dog4.prototype.numLegs = 4;

let beagle1 = new Dog4("Snoopy");

let ownProps1 = [];
let prototypeProps = [];

for (let property in beagle1) {
    if (beagle1.hasOwnProperty(property)) {
        ownProps1.push(property);
    } else {
        prototypeProps.push(property)
    }
}
console.log(ownProps1);
console.log(prototypeProps);

//understand the constructor property

function Dog5(name) {
    this.name = name;
}

function joinDogFraternity(candidate) {
    if (candidate.constructor === Dog5) {
        return true;
    } else {
        return false;
    }
}

//change the prototype to a new object

function Dog6(name) {
    this.name = name;
}

Dog6.prototype = {
    numLegs: 2,
    eat: function () {
        console.log("nom nom nom");
    },
    describe: function () {
        console.log(`My name is ${this.name}`);
    }
};

//remember to set the constructor property when changing the prototype

function Dog7(name) {
    this.name = name;
}

Dog7.prototype = {
    constructor: Dog7,
    numLegs: 4,
    eat: function () {
        console.log("nom nom nom");
    },
    describe: function () {
        console.log("My name is " + this.name);
    }
};

//understand where an object's prototype comes from

function Dog8(name) {
    this.name = name;
}

let beagle2 = new Dog8("Snoopy");

// Only change code below this line
console.log(Dog8.prototype.isPrototypeOf(beagle2));

//understand the prototype chain

function Dog9(name) {
    this.name = name;
}

let beagle3 = new Dog9("Snoopy");

console.log(Dog9.prototype.isPrototypeOf(beagle3));

console.log(Object.prototype.isPrototypeOf(Dog9.prototype));

//use inheritance so you don't repeat your self

function Cat(name) {
    this.name = name;
}

Cat.prototype = {
    constructor: Cat,
};

function Bear(name) {
    this.name = name;
}

Bear.prototype = {
    constructor: Bear,
};

function Animal() {}

Animal.prototype = {
    constructor: Animal,
    eat: function () {
        console.log("nom nom nom");
    }
};

//inherit behaviors from a supertype

function Animal1() {}

Animal1.prototype = {
    constructor: Animal1,
    eat: function () {
        console.log("nom nom nom");
    }
};


let duck = Object.create(Animal1.prototype);
let beagle4 = Object.create(Animal1.prototype);

//set the child's prototype to an instance of the parent

function Animal2() {}

Animal2.prototype = {
    constructor: Animal2,
    eat: function () {
        console.log("nom nom nom");
    }
};

function Dog10() {}

Dog10.prototype = Object.create(Animal2.prototype);

let beagle5 = new Dog10();

//reset an inherited constructor protperty

function Animal3() {}

function Bird1() {}

function Dog11() {}

Bird1.prototype = Object.create(Animal3.prototype);
Dog11.prototype = Object.create(Animal3.prototype);

Bird1.prototype.constructor = Bird1;
Dog11.prototype.constructor = Dog11;


let duck1 = new Bird1();
let beagle6 = new Dog11();
console.log(duck1.constructor);
console.log(beagle6.constructor);

//add methods after inheritance

function Animal4() {}
Animal4.prototype.eat = function () {
    console.log("nom nom nom");
};

function Dog12() {}

Dog12.prototype = Object.create(Animal4.prototype);
Dog12.prototype.constructor = Dog12;
Dog12.prototype.bark = function () {
    console.log("Woof!");
};

let beagle7 = new Dog12();

//override inherited methods

function Bird2() {}

Bird2.prototype.fly = function () {
    return "I am flying!";
};

function Penguin() {}
Penguin.prototype = Object.create(Bird2.prototype);
Penguin.prototype.constructor = Penguin;

Penguin.prototype.fly = function () {
    return "Alas, this is a flightless bird.";
}


let penguin = new Penguin();
console.log(penguin.fly());

//use a mixin to add common behavior between unrelated objects

let bird = {
    name: "Donald",
    numLegs: 2
};

let boat = {
    name: "Warrior",
    type: "race-boat"
};

let glideMixin = function (obj) {
    obj.glide = function () {
        console.log("Gliding, wooosh!");
    }
}

glideMixin(bird);
glideMixin(boat);
console.log(bird);
console.log(boat);

//use closure to protect properties within an object from being modified externally

function Bird3() {
    let weight = 15;
    this.getWeight = function () {
        return weight;
    }
}

//use the immediately invoked function expression (IIFE)

(function () {
    console.log("A cozy nest is ready");
})();

//use an IIFE to create a module

let funModule = (function () {
    return {
        isCuteMixin: function (obj) {
            obj.isCute = function () {
                return true;
            };
        },
        singMixin: function (obj) {
            obj.sing = function () {
                console.log("Singing to an awesome tune");
            };
        }
    }
})();