let student = {
  name: 'Carmen',
  age: 14,
  grade: 10,
  courses: ['biology', 'algebra', 'composition', 'ceramics'],
  gpa: 3.75,
};

// retrieve value of courses property of our student object
let courses = student.courses;
console.log('courses: ', courses);

// if you access a property that doesn't exist on an object
// you get 'undefined'
console.log(student.locker) // -> udefined

let jane = {
  firstName: 'Jane',
  lastName: 'Harrelson',
  age: 32,
  location: {
    country: 'Denmark',
    city: 'Aarhus'
  },
  occupation: 'engineer',
}

// retrieve jane's country
let country = jane.location.country;
console.log('country: ', country)