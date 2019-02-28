person = Object(); //creating object
person["Firstname"] = "MD";
person["Middle_name"] = "Shibli";
person["Last_name"] = "Mollah";

myfname ="Firstname";
console.log(person);
console.log(person.Firstname);

person.address = new Object();
person.address.street = "95, Aziz market";

console.log(person["address"]);
console.log(person.address.street);
//Syntax Perser

person = {};
person.fr = "Jisan";
console.log(person.fr);

//***PERFECT JOB DONE BY SYNTAX PERSER***
var md = {
    firstname: "MD",
    city: "Dhaka",
    country: "Bangladesh",
    Ethnicity: "Asian",
    Sex: "male"
}; //Oject literal***

console.log(md);
console.log(md.city);

function greeting(person) {
    console.log("Hello " + person.firstname);
}

greeting(md);

//JSON - Java Script Object Notation
console.log(JSON.stringify(md));
/*
    "firstname": "MD",
    "isProgrammer": true
}*/
//JSON.parse();

/*anonimus = function () {
    console.log("Hola");
}
anonimus();

function log(a) {
    console.log(a);
}

log("shibli");
log(5);*/

var c = { city: "Dhaka" };
var d;
d = c;
d.city = "Ctg";
console.log(c);
console.log(d);
console.log(this);
var c = {
    city: "dhaka",
    log: function () {

        var self = this;

        this.city = "Burned Dhaka",
        console.log(self); //calling a function inside an object.

        var setname = function (newname) { //function inside a function, this becomes global object.***
            self.city = newname;
        }
        setname("Mirpur is also burned");
        console.log(self);
    } //representing the object
}

c.log();

//Array is a collection of anything in js
arr = [
    5,
    {
        name: "Shibli",
        address: "Cantt"
    },
    function(name) {
        var greet = "hello ";
        console.log(greet + name)
    },
    "Hola"
]
arr[2](arr[1].name);

//ARGUMENTS OF A FUNCTION
function greet(language) {
    if (language === "en")
        var g = "hello ";
    if (language === "es")
        g = "Hola ";
    return g;
}

function finalgreet(firstname, lastname, language) {
    console.log(greet(language) + firstname + " " + lastname);
}

finalgreet("MD Shibli", "Mollah", "en");
finalgreet("Jonathan", "Menejes", "es");

var n = function getname() {
    return
    {
        name: 'Rabi'
    }
}
console.log(n.name);

function tst() {
    console.log("Done");
}
tst();
//IIFE - Immediately invocation function expressions
//1
var gre = function (name) {
    console.log('hello ' + name);
}("Rabi");

//2
fname = "Rabi";
(function (name) {
    var greet = "Hello " + name;
    console.log(greet);
}(fname));


