// CODE here for your Lambda Classes


class Person {
    constructor(person){
        this.name = person.name;
        this.location = person.location;
    }

    speak(){
        console.log ( `Hellow my name is ${this.name}, I am from ${this.location}.`);        
    }
}


class Instructor extends Person {
    constructor(Instructor){
        super(Instructor);
        this.specialty=Instructor.specialty;
        this.favLanguage=Instructor.favLanguage;
        this.catchPhrase=Instructor.catchPhrase;
    }

    demo(subject){
        console.log ( `Today we are learning about ${subject}.`);
    }    
    grade (Student,subject ){console.log ( `${Student.name} receives a perfect score on ${subject}.`);       
    }
}

class Student extends Person {
    constructor(Student){
        super(Student);
        this.previousBackground = Student.previousBackground;
        this.className = Student.className;
        this.favSubjects = Student.favSubjects;
    }
    
    listsSubjects(){
        console.log (`This student's favorites Subjects ${this.favSubjects}`);
    }

    PRAssignment(subject){
        console.log(`${Student.name} has submitted a PR for ${subject}.`);
    }

    sprintChallenge (subject){
        console.log(`${Student.name} has begun sprint challenge on ${subject}.`);
    }
}

class Project_Manager extends Instructor{
    constructor(Project_Manager){
        super(Project_Manager);
        this.gradClassName = Project_Manager.gradClassName;
        this.favInstructor = Project_Manager.favInstructor;
    }
    
    standUp(channel){
        console.log(`${this.name} announces to ${channel}, @channel standy times!​​​​​`);

    }

    debugsCode (student,subject ){
        console.log(`${this.name} debugs ${student.name}'s code on ${subject}`);

    }
}


const fred_real = new Instructor({
    name: 'Fred',
    location: 'Bedrock',
    age: 37,
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`
  });

  const Amy = new Instructor({
    name: 'Amy',
    location: 'NYC',
    age: 21,
    favLanguage: 'c++',
    specialty: 'Front-end',
    catchPhrase: `Don't go far from your hometown :)`
  });


  const fred = new Instructor({
    name: 'Tom',
    location: 'LA',
    age: 27,
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `You can rock JS, and I know it!`
  });

  const William = new Student({
    name: 'William',
    previousBackground: 'techy media buyer',
    className: 'web25',
    favSubjects: 'JavaScript'
  });

  const Bob = new Student({
    name: 'Bob',
    previousBackground: 'hardcord football fan',
    className: 'web25',
    favSubjects: 'c++'
  });

  
  const Sam_Proman = new Project_Manager({
    name: 'Sam Proman',
    gradClassName: 'web25',
    favInstructor: 'Sam Goodman'
  });

  const Tony_Star = new Project_Manager({
    name: 'Tony Star',
    gradClassName: 'web25',
    favInstructor: 'Amy'
  });

//Instructor testing
  fred_real.demo('top 10 fun fact about JS');
  Amy.grade(William,'Top 10 fact about JS');


//Student testing
    Bob.listsSubjects();
    William.PRAssignment('JS');


//Project_Manager testing
    Sam_Proman.standUp('AllStudents');
    Tony_Star.debugsCode(William,'C++');


