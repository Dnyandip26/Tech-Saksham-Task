let students = [];

// Function to add a student
function addStudent() {
    let name = document.getElementById("name").value;
    let studentId = document.getElementById("studentId").value;
    let age = document.getElementById("age").value;
    let grade = document.getElementById("grade").value;

    if (name === "" || studentId === "" || age === "" || grade === "") {
        alert("All fields are required!");
        return;
    }

    studentId = parseInt(studentId);
    age = parseInt(age);

    if (students.some(student => student.studentId === studentId)) {
        alert("Student ID already exists!");
        return;
    }

    students.push({ studentId, name, age, grade });
    updateTable();
    clearForm();
}

// Function to update table
function updateTable() {
    let tableBody = document.getElementById("studentTable");
    tableBody.innerHTML = "";

    students.forEach((student, index) => {
        let row = `<tr>
            <td>${student.studentId}</td>
            <td>${student.name}</td>
            <td>${student.age}</td>
            <td>${student.grade}</td>
            <td>
                <button onclick="editStudent(${index})">Edit</button>
                <button onclick="deleteStudent(${index})">Delete</button>
            </td>
        </tr>`;
        tableBody.innerHTML += row;
    });
}

// Function to search student
function searchStudent() {
    let searchId = parseInt(document.getElementById("searchId").value);
    let student = students.find(student => student.studentId === searchId);

    if (student) {
        document.getElementById("searchResult").innerHTML = `
            <strong>Student ID:</strong> ${student.studentId}<br>
            <strong>Name:</strong> ${student.name}<br>
            <strong>Age:</strong> ${student.age}<br>
            <strong>Grade:</strong> ${student.grade}
        `;
    } else {
        document.getElementById("searchResult").innerHTML = "Student not found!";
    }
}

// Function to edit student
function editStudent(index) {
    let student = students[index];

    let newName = prompt("Enter new name:", student.name);
    let newAge = prompt("Enter new age:", student.age);
    let newGrade = prompt("Enter new grade:", student.grade);

    if (newName !== null) student.name = newName;
    if (newAge !== null) student.age = parseInt(newAge);
    if (newGrade !== null) student.grade = newGrade;

    updateTable();
}

// Function to delete student
function deleteStudent(index) {
    let confirmDelete = confirm("Are you sure you want to delete this student?");
    if (confirmDelete) {
        students.splice(index, 1);
        updateTable();
    }
}

// Function to clear form fields
function clearForm() {
    document.getElementById("name").value = "";
    document.getElementById("studentId").value = "";
    document.getElementById("age").value = "";
    document.getElementById("grade").value = "";
}

// Function to toggle dark mode
function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
}
