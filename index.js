
//Home Page

const students = [
    {
        img: `sources/student-2.jpg`,
        name: `Mary Jane`,
        review: `I am a student of this course and I am very happy to be a part of this course. I have learned a lot from this course. I am a student of this course and I am very happy to be a part of this course. I have learned a lot from this course.`,
        course: `Student of Css Developer`
    },
    {
        img: `sources/student-3.jpg`,
        name: `John`,
        review: `This course was very well-organized and easy to follow. The instructor was very knowledgeable and explained everything in a way that was easy to understand. I would recommend this course to anyone who wants to learn HTML.`,
        course: `Student of Web Developer`
    },
    {
        img: `sources/student-4.jpg`,
        name: `Emily`,
        review: `I found the course content to be incredibly informative and engaging. The practical examples provided a great hands-on learning experience. I would highly recommend this course to anyone interested in improving their coding skills.`,
        course: `Student of JavaScript Developer`
    },
    {
        img: `sources/student-5.png`,
        name: `Sophia`,
        review: `The course on React development exceeded my expectations. The step-by-step approach helped me grasp complex concepts easily. I now feel confident in my React skills and am ready to tackle real-world projects.`,
        course: `Student of React Developer`
    }
  ];
  
  // add event when review button is clicked
  
  document.getElementById("review-btn").addEventListener("click", function () {
    // get random number between 0 to 4
    const i = Math.floor(Math.random() * students.length);
    document.getElementById("review-box").innerHTML =
    ` 
    <div id="review-pf">
    <img src="${students[i].img}" alt="studentImg">
    <h5>${students[i].name}</h5>
    <p>${students[i].course}</p>
    </div>
    <div id="review-text">
      <p>“${students[i].review}”</p>
    </div>
    `
  });