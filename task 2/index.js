document.addEventListener("DOMContentLoaded", function (event) {
  fetch(
    "https://api.nasa.gov/planetary/apod?api_key=jg4kSp5vTeI5dPMsPdSBYzn7g0hIVocOuXl5cQt7"
  )
    .then((response) => response.json())
    .then((data) => {
      const title = document.querySelector(".title");
      title.innerHTML = data.title;
      const image = document.querySelector(".image");
      image.src = data.url;
      const info = document.querySelector(".info");
      info.innerHTML = data.explanation;
    })
    .catch((error) => console.log(error));
});

document.addEventListener("DOMContentLoaded", function (event) {
  fetch("https://official-joke-api.appspot.com/random_joke")
    .then((response) => response.json())
    .then((data) => {
      const setup = document.querySelector(".setup");
      setup.innerHTML = data.setup;
      const punchline = document.querySelector(".punchline");
      punchline.innerHTML = data.punchline;
    })
    .catch((error) => console.log(error));
});

document.addEventListener("DOMContentLoaded", function (event) {
  fetch("https://yesno.wtf/api")
    .then((response) => response.json())
    .then((data) => {
      const answer = document.querySelector(".answer");
      answer.innerHTML = data.answer;
      const img = document.querySelector(".img");
      img.src = data.image;
    })
    .catch((error) => console.log(error));
});

document.addEventListener("DOMContentLoaded", function (event) {
  fetch("https://www.boredapi.com/api/activity/")
    .then((response) => response.json())
    .then((data) => {
      const activity = document.querySelector(".activity");
      activity.innerHTML = data.activity;
    })
    .catch((error) => console.log(error));
});
