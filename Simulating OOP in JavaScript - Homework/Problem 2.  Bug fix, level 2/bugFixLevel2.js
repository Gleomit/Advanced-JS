Person.prototype = {
    get firstName(){
        return this._firstName;
    },
    set firstName(val){
        if(typeof val === "string") {
            this._firstName = val;
        } else{
            throw new Error("LastName must be string.");
        }
    },
    get lastName(){
        return this._lastName;
    },
    set lastName(val){
        if(typeof val === "string") {
            this._lastName = val;
        } else{
            throw new Error("LastName must be string.");
        }
    },
    get fullName(){
        return this.firstName + " " + this.lastName;
    },
    set fullName(val){
        if(typeof val === "string") {
            var names = val.split(" ");
            this.firstName = names[0];
            this.lastName = names[1];
        } else{
            throw new Error("LastName must be string.");
        }
    }
}

function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
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