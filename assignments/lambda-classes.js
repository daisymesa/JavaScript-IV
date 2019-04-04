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
        console.log(`Hello, my name is ${this.name}, I am from ${this.location}.`);
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
          return `Today we are learning about ${subject}.`;
    }
    grade(student, subject) {
        return `${student.name} receives a perfect score on ${subject}.`;
    }
}

// ****************** STUDENT ******************
class Student extends Person {
    constructor (studentProperties) {
        super(studentProperties);
        this.previousBackground = studentProperties.previousBackground;
        this.className = studentProperties.className;
        this.faveSubjects = studentProperties.faveSubjects;

    }
    listsSubjects() {
        return this.faveSubjects;
    }
    PRAssignment(subject) {
        return `${student.name} has submitted a PR for ${subject}.`;
    }
    sprintChallenge (subject) {
        return `${student.name} has begun sprint challenge on ${subject}.`;
    }
}

// ****************** PROJECT MANAGER ******************
class ProjectManager extends Instructor {
    constructor (projectManagerProperties) {
        super(projectManagerProperties);
        this.gradClassName = projectManagerProperties.gradClassName;
        this.faveInstructor = projectManagerProperties.faveInstructor;

    }
    standUp(channel) {
          return `${this.name} announces to ${channel}, @channel standy times!​​​​​`;
    }
    debugsCode(student, subject) {
        return `${this.name} debugs ${student}'s code on ${subject}.`;
    }
}