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

// ****************** INSTRUCTOR ******************
class Instructor extends Person {
    constructor (instructorProperties) {
        super(instructorProperties);
        this.specialty = instructorProperties.specialty;
        this.favLanguage = instructorProperties.favLanguage;
        this.catchPhrase = instructorProperties.catchPhrase;

    }
    demo(subject) {
          return `Today we are learning about ${subject}.`
    }
}

