function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

var peter = null;

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
    get name(){
        return this.firstName + " " + this.lastName;
    }
};

peter = new Person("Peter", "Jackson");

console.log(peter.name);
console.log(peter.firstName);
console.log(peter.lastName);
