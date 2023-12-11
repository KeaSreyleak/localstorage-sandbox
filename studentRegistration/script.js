//Enroll
// this should have it own file because it is a different page and should not be called on the home page
let date = "";
document.getElementById("birthDate").addEventListener("change", function () {
  try {
    date = this.value;
  } catch (e) {
    date = "";
  }
});



const createStudent = () => {
  const students = JSON.parse(localStorage.getItem("students")) || [];

  let index = students.length > 0 ? students[students.length - 1].index : 0;

  const gender = document.getElementById("myGender").value;

  const place = document.getElementById("myPlace").value;
  const address = document.getElementById("myCurrentAddress").value;
  const myCourse = document.getElementById("myCourses").value;

  const fullName = document.getElementById("fullName").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;

  if (
    !isValid(gender) ||
    !isValid(gender) ||
    !isValid(gender) ||
    !isValid(gender) ||
    !isValid(gender) ||
    !isValid(gender) ||
    !isValid(gender)
  ) {
    window.alert("Please fill all the fields");
    return;
  }
  index += 1;

  const student = {
    index: index,
    studentName: fullName,
    gender: gender,
    date: date,
    place: place,
    address: address,
    email: email,
    phone: phone,
    course: myCourse,
  };

  students.push(student);
  localStorage.setItem("students", JSON.stringify(students));
};

function isValid(value) {
  return value !== "" && value !== null && value !== undefined;
}

function saveStudent(students) {
  localStorage.setItem("students", JSON.stringify(students));
}

function displayData() {
  const studentTable = document.getElementById("studentTable");
  const students = getDataFromLocalStorage();

  studentTable.innerHTML = "";

  students.forEach((student, index) => {
    const row = `
              <tr>
                 <td>${student.studentName}</td>
                 <td>${student.gender}</td>
                 <td>${student.date}</td>
                 <td>${student.place}</td>
                 <td>${student.address}</td>
                 <td>${student.email}</td>
                 <td>${student.phone}</td>
                 <td>${student.course}</td>
                 <td>
                  <button class="btn btn-primary btn-sm" onclick="updateStudent(${index})">Edit</button>
                  <button class="btn btn-danger btn-sm" onclick="deleteStudent(${index})">Delete</button>
                </td>
              </tr>
          `;

    studentTable.innerHTML += row;
  });
}

function updateStudent(index) {
  const students = JSON.parse(localStorage.getItem("students")) || [];
  const student = students[index];

  let editFullName = document.getElementById("editFullName");
  let gender = document.getElementById("editMyGender");

  let place = document.getElementById("editMyPlace");
  let address = document.getElementById("editMyCurrentAddress");
  let myCourse = document.getElementById("editMyCourses");

  let email = document.getElementById("editEmail");
  let phone = document.getElementById("editPhone");
  let date = document.getElementById("editBirthDate");

  editFullName.value = student.studentName;
  gender.value = student.gender;
  date.value = student.date;
  place.value = student.place;
  address.value = student.address;
  email.value = student.email;
  phone.value = student.phone;
  myCourse.value = student.course;

  const editModal = new bootstrap.Modal(document.getElementById("editModal"));
  editModal.show();

  document.getElementById("saveChange").addEventListener("click", function () {
    student.studentName = editFullName.value;
    student.gender = gender.value;
    student.date = date.value;
    student.place = place.value;
    student.address = address.value;
    student.email = email.value;
    student.phone = phone.value;
    student.course = myCourse.value;

    saveStudent(students);

    editModal.hide();

    displayData();
  });
}
