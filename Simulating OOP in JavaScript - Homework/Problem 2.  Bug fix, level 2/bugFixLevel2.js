Person.prototype = {
    get firstName(){
        return this._firstName;
    },
    set firstName(val){
        this._firstName = val;
    },
    get lastName(){
        return this._lastName;
    },
    set lastName(val){
        this._lastName = val;
    },
    get fullName(){
        return this.firstName + " " + this.lastName;
    },
    set fullName(val){
        var names = val.split(" ");
        this.firstName = names[0];
        this.lastName = names[1];
    }
}

function Person(fName, lName) {
    this.firstName = fName;
    this.lastName = lName;
}

var person = new Person("Peter", "Jackson");

console.log();

console.log(person.firstName);
console.log(person.lastName);
console.log(person.fullName);

console.log();

person.firstName = "Michael";
console.log(person.firstName);
console.log(person.fullName);
person.lastName = "Williams";
console.log(person.lastName);
console.log(person.fullName);

console.log();

person.fullName = "Alan Marcus";
console.log(person.fullName);
console.log(person.firstName);
console.log(person.lastName);