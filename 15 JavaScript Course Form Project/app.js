console.log('start');

const subBtn = document.getElementById('submitBtn');

subBtn.addEventListener('click', regCourse);

function regCourse() {
    checkFields();
};

// colect input data
function processData() {
    let nameInput = document.getElementById('name').value;
    let courseInput = document.getElementById('course').value;
    let authorInput = document.getElementById('author').value;
    const courseList = document.getElementById('list');

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
    newDiv.appendChild(persCourse);
    newDiv.appendChild(courseAuth);

    clearFields();
}

// clear fields after submit
function clearFields() {
    document.getElementById('name').value = '';
    document.getElementById('course').value = '';
    document.getElementById('author').value = '';
}

// field validation
function checkFields() {
    let name = document.getElementById('name').value;
    let course = document.getElementById('course').value;
    let author = document.getElementById('author').value;

    if(name === '' || course === '' || author === '') {
        return alert('Please complete all required fields');
    } else {
        processData();
    }
}