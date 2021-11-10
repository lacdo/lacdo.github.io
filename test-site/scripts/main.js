let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/Coco.jpeg') {
        myImage.setAttribute('src', 'images/Coco2.jpeg');
    } else {
        myImage.setAttribute('src', 'images/Coco.jpeg');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');
myButton.onclick = function() {
    setUserName();
}

function setUserName() {
    let myName = prompt('Please enter your name.');
    if (!myName) {
        setUserName();
    } else {
        localStorage.setItem('name', myName);
        myHeading.textContent = 'Empress Coco is cool, ' + myName;
    }
}

if (!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Empress Coco is cool, ' + storedName;
}