console.log('start');

const name = document.getElementById('name');
const course = document.getElementById('course');
const author = document.getElementById('author');
const subBtn = document.getElementById('submitBtn');
const courseList = document.getElementById('list');

subBtn.addEventListener('click', regCourse);

function regCourse() {
    processData();
};

// colect input data
function processData() {
    const nameInput = document.getElementById('name').value;
    const courseInput = document.getElementById('course').value;
    const authorInput = document.getElementById('author').value;

    const newDiv = document.createElement('div');
    newDiv.classList.add('cours-box');

    const person = document.createElement('p');
    person.classList.add('user');
    person.innerHTML = `User name - ${nameInput}`;

    const persCourse = document.createElement('p');
    persCourse.classList.add('userCourse');
    persCourse.innerHTML = `Course name - ${courseInput}`;

    const courseAuth = document.createElement('p');
    courseAuth.classList.add('userAuth');
    courseAuth.innerHTML = `Course author - ${authorInput}`;

    courseList.appendChild(newDiv);
    newDiv.appendChild(person);
    person.appendChild(persCourse);
    persCourse.appendChild(courseAuth);
}