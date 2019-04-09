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
          return `Today we are learning about ${subject}.`;
    }
    grade(student, subject) {
        return `${student} receives a perfect score on ${subject}.`;
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
        return `${this.name} has submitted a PR for ${subject}.`;
    }
    sprintChallenge (subject) {
        return `${this.name} has begun sprint challenge on ${subject}.`;
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

// ****************** TEST OBJECTS ******************

//INSTRUCTOR OBJECTS

const david = new Instructor ({
    name: "David",
    location: "New York",
    age: 35,
    gender: "male",
    favLanguage: "Python",
    specialty: "Computer Science",
    catchPhrase:"Don't forget the homies"
})

const annie = new Instructor ({
    name: "Annie",
    location: "Philadelphia",
    age: 32,
    gender: "female",
    favLanguage: "JavaScript",
    specialty: "Front-End",
    catchPhrase:"I love cats and JS"
})

const oscar = new Instructor ({
    name: "Oscar",
    location: "New Jersey",
    age: 39,
    gender: "male",
    favLanguage: "C++",
    specialty: "Back-End",
    catchPhrase:"You can do this"
})

//STUDENT OBJECTS

const albert = new Student ({
    name: "Albert",
    location: "Orlando",
    age: 27,
    gender: "male",
    previousBackground: "Chef",
    className: "Web19",
    faveSubjects: ["CSS", "LESS"]
})

const sara = new Student ({
    name: "Sara",
    location: "Boston",
    age: 29,
    gender: "female",
    previousBackground: "Teacher",
    className: "Web20",
    faveSubjects: ["CSS", "HTML"]
})

const sebastian = new Student ({
    name: "Sebastian",
    location: "San Diego",
    age: 21,
    gender: "male",
    previousBackground: "Physical Trainer",
    className: "Web20",
    faveSubjects: ["JavaScript", "React"]
})

//PROJECT MANAGER OBJECTS

const esther = new ProjectManager ({
    name: "Esther",
    location: "Chicago",
    age: 36,
    gender: "female",
    favLanguage: "CSS",
    specialty: "Front-End",
    catchPhrase:"I know how you feel",
    gradClassName: "Web17",
    faveInstructor: "Oscar"
})

const luisa = new ProjectManager ({
    name: "Luisa",
    location: "Houston",
    age: 28,
    gender: "female",
    favLanguage: "JavaScript",
    specialty: "Front-End",
    catchPhrase:"You got this",
    gradClassName: "Web17",
    faveInstructor: "Albert"
})

const julian = new ProjectManager ({
    name: "Julian",
    location: "Baltimore",
    age: 27,
    gender: "male",
    favLanguage: "Java",
    specialty: "Back-End",
    catchPhrase:"I'm here to help'",
    gradClassName: "Web17",
    faveInstructor: "Annie"
})

// ****************** TEST CONSOLES ******************

console.log(david.name);
console.log(oscar.specialty);
console.log(annie.catchPhrase);

console.log(albert.previousBackground);
console.log(sara.className);
console.log(sebastian.faveSubjects);

console.log(esther.gradClassName);
console.log(julian.faveInstructor);


console.log(annie.demo("Pre-Processors"));
console.log(oscar.grade("Sara", "JavaScript III"));

console.log(albert.speak());
console.log(sara.listsSubjects());
console.log(sara.PRAssignment("JavaScript IV"));
console.log(sebastian.sprintChallenge("Applied Javascript"));

console.log(esther.speak());
console.log(esther.demo("CSS Flexbox"));
console.log(luisa.grade("Albert", "JavaScript IV"));
console.log(luisa.standUp("web19_Luisa"));
console.log(julian.debugsCode("Sebastian", "Constructor Functions"));
