// CODE here for your Lambda Classes

// ****************** PERSON ******************
class Person {
    constructor (properties) {
      this.name = properties.name;
      this.age = properties.age;
      this.location = properties.location;
      this.gender = properties.gender;

    }
    speak(){
      return `Hello, my name is ${this.name}, I am from ${this.location}.`;
    }
}


