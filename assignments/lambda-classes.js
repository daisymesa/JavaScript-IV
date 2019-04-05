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

const david = new Instructor ({
    name: "David",
    location: "New York",
    age: 35,
    gender: "male",
    favLanguage: "Python",
    speciality: "Computer Science",
    catchPhrase:"Don't forget the homies"
})

const annie = new Instructor ({
    name: "Annie",
    location: "Philadelphia",
    age: 32,
    gender: "female",
    favLanguage: "JavaScript",
    speciality: "Front-End",
    catchPhrase:"I love cats and JS"
})

const oscar = new Instructor ({
    name: "Oscar",
    location: "New Jersey",
    age: 39,
    gender: "male",
    favLanguage: "C++",
    speciality: "Back-End",
    catchPhrase:"You can do this"
})

const albert = new Student ({
    name: "Albert",
    location: "Orlando",
    age: 27,
    gender: "male",
    previousBackground: "Chef",
    gradClassName: "Web19",
    faveSubjects: ["CSS", "LESS"]
})

const sara = new Student ({
    name: "Sara",
    location: "Boston",
    age: 29,
    gender: "female",
    previousBackground: "Teacher",
    gradClassName: "Web20",
    faveSubjects: ["CSS", "HTML"]
})

const sebastian = new Student ({
    name: "Sebastian",
    location: "San Diego",
    age: 21,
    gender: "male",
    previousBackground: "Physical Trainer",
    gradClassName: "Web20",
    faveSubjects: ["JavaScript", "React"]
})

const esther = new ProjectManager ({
    name: "Esther",
    location: "Chicago",
    age: 36,
    gender: "female",
    favLanguage: "CSS",
    speciality: "Front-End",
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
    speciality: "Front-End",
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
    speciality: "Back-End",
    catchPhrase:"I'm here to help'",
    gradClassName: "Web17",
    faveInstructor: "Annie"
})
