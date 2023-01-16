document.addEventListener('DOMContentLoaded', function (event) {
    fetch('https://api.nasa.gov/planetary/apod?api_key=jg4kSp5vTeI5dPMsPdSBYzn7g0hIVocOuXl5cQt7')
        .then(response => response.json())
        .then(data => {
            const title = document.querySelector('.title');
            title.innerHTML = data.title;
            const image = document.querySelector('.image');
            image.src = data.url;
            const info = document.querySelector('.info');
            info.innerHTML = data.explanation;
        })
        .catch(error => console.log(error));
})