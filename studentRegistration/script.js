const form = document.getElementById("myForm").value;
const fullName = document.getElementById("fullName").value;
const gender = document.getElementById("myGender").value;
const date = document.getElementById("date").value;
const place = document.getElementById("myPlace").value;
const address = document.getElementById("myCurrentAddress").value;
const email = document.getElementById("email").value;
const phone = document.getElementById("phone").value;
const course = document.getElementById("myCourses").value;

console.log(date)

let index = 0;

const students = JSON.parse(localStorage.getItem("students")) || [];
const createStudent = () => {
  index += 1;

  const student = {
    index: index,
    name: fullName,
    gender: gender,
    date: date,
    place: place,
    address: address,
    email: email,
    phone: phone,
    course: course,
  };

  students.push(student);
  localStorage.setItem("students", JSON.stringify(students));
};
