//alert(greetz);
//call(), apply(), bind()
var person = {
    firstname: "MD SHIBLI",
    lastname: "Mollah",
    getFullName: function () { //not global
        var fullname = this.firstname + " " + this.lastname;
        return fullname;
    }
}

var logName = function(lang1, lang2) {
    console.log ('logged ' + this.getFullName());
    console.log(lang1 + " " + lang2);  //looks for global
}

//var logn = logName.bind(person); //bind(), function isn't called

logName.call(person, 'en', 'es'); //function is called
logName.apply(person, ['en', 'bl']);//works as same as call but takes the arguments as array.

//var logPersonName = logName.bind(person);

//logPersonName();

//function currying
function mul(a, b) {
    return a * b;
}
mul2 = mul.bind(this, 5);
mul3 = mul.bind(this, 3);
b = mul3(2);
a = mul2(7);
console.log(a);
console.log(b);

//proto
var person = {
    firstname: "default",
    lastname: "Default",
    getFullName: function () {
        return this.firstname + ' ' + this.lastname;
    }
}
var shibli = {
    firstname: 'MD',
    lastname: 'Mollah'
}
shibli.__proto__ = person;//for demo purpose only
console.log(shibli.getFullName());

// OBject from FUNCTION
function Person() {
    this.firstname = 'MD';
    this.lastname = 'Mollah'
}

var shibli = new Person();
console.log(shibli);
//FUNCTION CONSTRUCTOR
function Person(firstname, lastname) {
    console.log(this);
    this.firstname = firstname;
    this.lastname = lastname;
    console.log("found");
}

var shibli = new Person('MD', 'Mollah');
console.log(shibli);

//latest***** if person is an object
person = {
    firstname: 'default',
    lastname: 'default',
    greet: function() {
        return 'Hi' + this.firstname + ' ' + this.lastname;
}
}
var john = Object.create(Person);
console.log(john);

class Person1 {
    constructor(firstname, lastname) {
        this.firstname = firstname;
        this.lastname = lastname;
    }
    greet() {
        return 'Hi' + firstname;
    }
}

var john = new Person1('John', 'Doe');





















