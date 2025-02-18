// constants for query selector

// function to change bg color from user input and add student id
function changeCustomColor() {
    const userInput = document.getElementById('customNumber').value;
    const studentIdDisplay = document.getElementById('myStudentId');
    const studentId = '200590241';

    studentIdDisplay.textContent = `Student ID: ${studentId}`;

    let color = '';
    if (userInput < 0 || userInput > 100) {
        color = 'red';
    } else if (userInput >= 0 && userInput <= 20) {
        color = 'green';
    } else if (userInput > 20 && userInput <= 40) {
        color = 'blue';
    } else if (userInput > 40 && userInput <= 60) {
        color = 'orange';
    } else if (userInput > 60 && userInput <= 80) {
        color = 'purple';
    } else if (userInput > 80 && userInput <= 100) {
        color = 'yellow';
    }

    document.body.style.backgroundColor = color;
}

// function to change bg color from random no.
function changeRandomColor() {
    const randomNum = Math.floor(Math.random() * 101);
    const studentIdDisplay = document.getElementById('myStudentId');
    const studentId = '200590241';

    studentIdDisplay.textContent = `Student ID: ${studentId}`;

    let color = '';
    if (randomNum < 0 || randomNum > 100) {
        color = 'red';
    } else if (randomNum >= 0 && randomNum <= 20) {
        color = 'green';
    } else if (randomNum > 20 && randomNum <= 40) {
        color = 'blue';
    } else if (randomNum > 40 && randomNum <= 60) {
        color = 'orange';
    } else if (randomNum > 60 && randomNum <= 80) {
        color = 'purple';
    } else if (randomNum > 80 && randomNum <= 100) {
        color = 'yellow';
    }

    document.body.style.backgroundColor = color;
}

// function to generate options for select list
function addList() {
    const imageSelect = document.getElementById('imageSelect');
    const images = ['image1.jpg', 'image2.jpg', 'image3.jpg']; // Replace with actual image file names

    images.forEach((image, index) => {
        const option = document.createElement('option');
        option.value = image;
        option.textContent = `Image ${index + 1}`;
        imageSelect.appendChild(option);
    });
}

// function to change image
function changeImage() {
    const imageSelect = document.getElementById('imageSelect');
    const imageDisplay = document.getElementById('images');
    const selectedImage = imageSelect.value;

    if (selectedImage) {
        imageDisplay.src = `img/${selectedImage}`;
        imageDisplay.style.display = 'block';
    } else {
        imageDisplay.style.display = 'none';
    }
}
// event listeners for on click event of buttons and select
document.querySelector('.custColor').addEventListener('click', changeCustomColor);
document.querySelector('.randColor').addEventListener('click', changeRandomColor);
document.getElementById('imageSelect').addEventListener('change', changeImage);

// event listeners for on change event of select
addList();